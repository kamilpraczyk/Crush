/// <reference path="../../typings/tsd.d.ts" />
import _ = require('underscore');
import dictionary = require('../utils/dictionary');
import css = require('../utils/css/css');
import utils = require('../utils/utils');
import catalog = require("../catalog/catalog");
import Promise = require("bluebird");
import Matchers = require('../components/settings/views/user/registering/Matchers');

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
        valid_to: null as string,
        active: false,
        last_login: null as string
    },
    status: {
        process: false
    }
};


declare type State = typeof initialState;


function getInitialPass(): State {
    return JSON.parse(JSON.stringify(initialState));
}

function reset() {
    pass = getInitialPass();
}


function startLogin(callback: () => void): Promise<void> {
    reset();
    pass.login.success = false;
    pass.login.process = true;
    callback();
    return Promise.resolve();
}

function startSubscribe(callback: () => void): Promise<void> {
    pass.subscribe.process = true;
    callback();
    return Promise.resolve();
}


function startRegister(callback: () => void): Promise<void> {
    pass.register.success = false;
    pass.register.process = true;
    callback();
    return Promise.resolve();
}

function login(o: { email: string, password: string }) {
    console.info('-> login');
    return catalog.serverIsPrime(o.email, utils.md5(o.password)).then(data => {
        pass.login.success = true;
        pass.login.process = false;
        const active = (data.user.active === '1'); //TODO future ban people
        pass.user = {
            isPrime: (!!data.isPrime) && active,
            name: data.user.name,
            email: data.user.email,
            valid_to: data.user.valid_to,
            active,
            last_login: data.user.last_login
        };
        return null;
    }).catch(e => {
        console.error(e);
        pass.login.process = false;
        pass.login.error = e.message;
    })
}

function logout() {
    pass = getInitialPass();
}

function updataLastLogin() {
    if (pass.login.success)
        return catalog.updateLastLogin(pass.user.email)
            .catch((e: Error) => {
                console.error(e);
            });
    return Promise.resolve(null);
}

function subscribe(o: { email: string, valid_to: string }) {
    return new Promise((resolve, reject) => {
        console.info('-> subscribe');
        catalog.serverUpdateValidTo(o.email, o.valid_to).then((data: { error?: string, success?: boolean }) => {
            pass.subscribe.process = false;
            console.info('<- subscribed to =', data);
            data = data || {};

            if (data.error)
                return Promise.reject(new Error(dictionary.SERVER_ERROR_SUBSCRIBING_WENT_WRONG));

            pass.user.isPrime = !!data.success;
            pass.user.valid_to = o.valid_to;
            return resolve(null);
        }).catch(e => {
            console.error(e);
            pass.subscribe.process = false;
            pass.subscribe.error = e.message;
            return reject(e);
        });
    })
}


function register(o: { email: string, password: string, retypePassword: string, name: string }) {
    return new Promise((resolve, reject) => {
        console.info('-> register');

        Matchers.validate(o).then((e) => {
            return catalog.serverRegister(o.email, utils.md5(o.password), o.name).then((data: { error?: string, success?: boolean }) => {
                console.info('register data =', data);
                data = data || {};
                pass.register.process = false;
                pass.register.success = !data.error && data.success ? true : false;
                if (data.error) {
                    if (data.error.indexOf('Duplicate') !== -1 || data.error.indexOf('duplicate') !== -1)
                        return Promise.reject(new Error(dictionary.SERVER_ERROR_DUPLICATE_EMAIL));
                    return Promise.reject(new Error(dictionary.SERVER_ERROR_INVALID_DATA));
                }
                return resolve(null);
            });
        }).catch(e => {
            console.error(e);
            pass.register.process = false;
            pass.register.error = e.message;
            return reject(e);
        });
    })
}



function sendEmailGreeting(o: { email: string, password: string, retypePassword: string, name: string }) {
    console.info('-> send greeting email');
    return catalog.emailGreeting(o);
}

function toogleRegister() {
    const show = !pass.register.show;
    pass.register = getInitialPass().register;
    pass.register.show = show;
}

function readStatus(o: { email: string }) {
    console.info('-> read user lesson status');
    return catalog.readStatus(o);
};


function startSaveStatus(callback: () => void): Promise<void> {
    pass.status.process = false;
    callback();
    return Promise.resolve();
}



function saveStatus(data: { uid: string, status: number }) {
    return new Promise((resolve, reject) => {
        console.info('-> save status');

        catalog.updateStatus({
            email: pass.user.email,
            name: data.uid,
            value: String(data.status)
        }).then(() => {
            pass.status.process = false;
            return resolve(null);
        }).catch((e: Error) => {
            console.error(e);
            pass.status.process = false;
            return reject(e);
        });
    })
}


let pass = getInitialPass();

class Pass {

    constructor() { }

    getStatus() {
        return pass;
    }
}


export {
Pass,
startLogin,
login,
logout,
updataLastLogin,
toogleRegister,
readStatus,
saveStatus,
startSaveStatus,
startRegister,
register,
sendEmailGreeting,
startSubscribe,
subscribe
}