import _ = require('underscore');
import dictionary = require('../../utils/dictionary');
import css = require('../../utils/css/css');
import { md5 } from '../../utils/utils';
import catalog = require("../../catalog/catalog");
import Promise = require("bluebird");
import Matchers = require('../../components/settings/views/user/registering/Matchers');

const initialState = {
    login: {
        error: null as string,
        process: false,
        success: false
    },
    register: {
        show: false,
        error: null as string,
        process: false,
        success: false
    },
    subscribe: {
        error: null as string,
        process: false,
    },
    user: {
        isPrime: false,
        name: null as string,
        email: null as string,
        password: null as string,
        valid_to: null as string,
        active: false,
        last_login: null as string
    },
    status: {
        process: false
    }
};

declare type PassState = typeof initialState;

function getInitialPass(): PassState {
    return JSON.parse(JSON.stringify(initialState));
}

class PassStore {

    private pass = getInitialPass();
    constructor() { }


    reset() {
        this.pass = getInitialPass();
    }

    startLogin(callback: () => void): Promise<void> {
        this.reset();
        this.pass.login.success = false;
        this.pass.login.process = true;
        callback();
        return Promise.resolve();
    }

    startSubscribe(callback: () => void): Promise<void> {
        this.pass.subscribe.process = true;
        callback();
        return Promise.resolve();
    }

    startRegister(callback: () => void): Promise<void> {
        this.pass.register.success = false;
        this.pass.register.process = true;
        callback();
        return Promise.resolve();
    }

    login(o: { email: string, password: string }) {
        console.info('-> login');
        return catalog.serverIsPrime(o.email, md5(o.password)).then(data => {
            this.pass.login.success = true;
            this.pass.login.process = false;
            const active = (data.user.active === '1'); //TODO future ban people
            this.pass.user = {
                isPrime: (!!data.isPrime) && active,
                name: data.user.name,
                email: data.user.email,
                password: o.password,
                valid_to: data.user.valid_to,
                active,
                last_login: data.user.last_login
            };
            return null;
        }).catch(e => {
            console.error(e);
            this.pass.login.process = false;
            this.pass.login.error = e.message;
        })
    }

    logout() {
        this.pass = getInitialPass();
    }

    updateLastLogin() {
        if (this.pass.login.success)
            return catalog.updateLastLogin(this.pass.user.email)
                .catch((e: Error) => {
                    console.error(e);
                });
        return Promise.resolve(null);
    }

    subscribe(o: { email: string, valid_to: string }) {
        return new Promise((resolve, reject) => {
            console.info('-> subscribe');
            catalog.serverUpdateValidTo(o.email, o.valid_to).then((data: { error?: string, success?: boolean }) => {
                this.pass.subscribe.process = false;
                console.info('<- subscribed to =', data);
                data = data || {};

                if (data.error) return Promise.reject(new Error(dictionary.SERVER_ERROR_SUBSCRIBING_WENT_WRONG));

                this.pass.user.isPrime = !!data.success;
                this.pass.user.valid_to = o.valid_to;
                return resolve(null);
            }).catch(e => {
                console.error(e);
                this.pass.subscribe.process = false;
                this.pass.subscribe.error = e.message;
                return reject(e);
            });
        })
    }


    register(o: { email: string, password: string, retypePassword: string, name: string }) {
        return new Promise((resolve, reject) => {
            console.info('-> register');

            Matchers.validate(o).then((e) => {
                return catalog.serverRegister(o.email, md5(o.password), o.name).then((data: { error?: string, success?: boolean }) => {
                    console.info('register data =', data);
                    data = data || {};
                    this.pass.register.process = false;
                    this.pass.register.success = !data.error && data.success ? true : false;
                    if (data.error) {
                        if (data.error.indexOf('Duplicate') !== -1 || data.error.indexOf('duplicate') !== -1)
                            return Promise.reject(new Error(dictionary.SERVER_ERROR_DUPLICATE_EMAIL));
                        return Promise.reject(new Error(dictionary.SERVER_ERROR_INVALID_DATA));
                    }
                    return resolve(null);
                });
            }).catch(e => {
                console.error(e);
                this.pass.register.process = false;
                this.pass.register.error = e.message;
                return reject(e);
            });
        })
    }


    sendEmailGreeting(o: { email: string, password: string, retypePassword: string, name: string }) {
        console.info('-> send greeting email');
        return catalog.emailGreeting(o);
    }

    toogleRegister() {
        const show = !this.pass.register.show;
        this.pass.register = getInitialPass().register;
        this.pass.register.show = show;
    }

    readStatus(o: { email: string }) {
        console.info('-> read user lesson status');
        return catalog.readStatus(o);
    };


    startSaveStatus(callback: () => void): Promise<void> {
        this.pass.status.process = false;
        callback();
        return Promise.resolve();
    }

    saveStatus(data: { uid: string, status: number }) {
        return new Promise((resolve, reject) => {
            console.info('-> save status');

            catalog.updateStatus({
                email: this.pass.user.email,
                name: data.uid,
                value: String(data.status)
            }).then(() => {
                this.pass.status.process = false;
                return resolve(null);
            }).catch((e: Error) => {
                console.error(e);
                this.pass.status.process = false;
                return reject(e);
            });
        })
    }
    getStatus(): PassState { return this.pass; }

}

export {
    PassStore,
    PassState
}