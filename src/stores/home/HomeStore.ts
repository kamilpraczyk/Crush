/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';
import LessonStore = require('../lesson/LessonStore');
import catalog = require("../../catalog/catalog");
import dictionary = require('../../utils/dictionary');
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
    verification: {
        error: null as string,
        process: false,
        success: false
    },
    user: {
        isPrime: false,
        name: null as string,
        email: null as string,
        valid_to: null as string,
        active: false,
        last_login: null as string
    },
};
declare type State = typeof initialState;

let state: State = JSON.parse(JSON.stringify(initialState));


function reset() {
    state = JSON.parse(JSON.stringify(initialState));
}

function logIn(o: { login: string, password: string }) {
    reset();

    return catalog.serverIsPrime(o.login, utils.md5(o.password)).then((data: { error?: string, isPrime?: boolean, user?: { email: string, name: string, valid_to: string, active: string, last_login: string } }) => {
        data = data || {};
        console.info('serverIsPrime data=', data);

        state.login.success = data.user && data.user.name ? true : false;
        if (!state.login.success)
            return Promise.reject(new Error(dictionary.ERROR_LOGIN_INVALID));

        if (data.user) {
            const active = (data.user.active === '1');
            state.login.success = state.login.success && active;
            state.user = {
                isPrime: _.isBoolean(data.isPrime) ? data.isPrime : false,
                name: data.user.name,
                email: data.user.email,
                valid_to: data.user.valid_to,
                active: active,
                last_login: data.user.last_login
            };
        }
        return Promise.resolve(null);
    }).catch((e: Error) => {
        console.error(e);
        state.login.error = e.message;
    });
}

function updateValidation(o: { login: string, valid_to: string }) {
    return catalog.serverUpdateValidTo(o.login, o.valid_to).then((data: { error?: string, success?: boolean }) => {
        console.info('updateValidation data =', data);
        data = data || {};

        if (data.error)
            return Promise.reject(new Error(dictionary.SERVER_ERROR_SUBSCRIBING_WENT_WRONG));

        state.user.isPrime = !!data.success;
        state.user.valid_to = o.valid_to;
        return Promise.resolve(null);
    }).catch((e: Error) => {
        console.error(e);
        state.subscribe.error = e.message;
    });
}

function sendEmailVerification(o: { login: string, password: string, name: string }) {
    return catalog.sendEmailVerification(o.login, utils.md5(o.password), o.password, o.name).then((data: { success?: boolean }) => {
        console.info('sendEmailVerification data =', data)
        state.verification.success = data.success ? true : false;
        if (!state.verification.success)
            return Promise.reject(new Error(dictionary.SERVER_ERROR_CONFIRMATION_EMAIL));
        return Promise.resolve(null);
    }).catch((e: Error) => {
        console.error(e);
        state.verification.error = e.message; //TODO (when active false and user name - )
    });
}

function register(o: { login: string, password: string, retypePassword: string, name: string }) {
    return Matchers.validate(o).then((e) => {
        return catalog.serverRegister(o.login, utils.md5(o.password), o.name).then((data: { error?: string, success?: boolean }) => {
            console.info('register data =', data);
            data = data || {};
            state.register.success = !data.error && data.success ? true : false;
            if (data.error) {
                if (data.error.indexOf('Duplicate') !== -1 || data.error.indexOf('duplicate') !== -1)
                    return Promise.reject(new Error(dictionary.SERVER_ERROR_DUPLICATE_EMAIL));
                return Promise.reject(new Error(dictionary.SERVER_ERROR_INVALID_DATA));
            }

            return Promise.resolve(null);
        }).then(() => {
            return sendEmailVerification(o);
        });
    }).catch((e: Error) => {
        console.error(e);
        state.register.error = e.message;
    });
}

class Store extends BaseStore {

    constructor() {
        super();
    }

    getStateHome() {
        return state;
    }

    dispatcherIndex = this.register((payload: { action: any }) => {
        var action = payload.action;
        const emitChange = this.emitChange.bind(this);

        switch (action.actionType) {

            case Constants.LOGIN:

                state.login.process = true;
                emitChange();

                utils.delay().then(() => {
                    return logIn({
                        login: action.login, password:
                        action.password
                    });
                }).finally(() => {
                    state.login.process = false;
                    emitChange();
                });
                break;

            case Constants.LOGOUT:
                reset();
                emitChange();
                break;
            case Constants.TOGGLE_REGISTER_VIEW:
                const show = !state.register.show;
                state.register = JSON.parse(JSON.stringify(initialState)).register;
                state.register.show = show;
                emitChange();
                break;

            case Constants.REGISTER_ON_SERVER:

                utils.delayf(() => {
                    state.register.process = true;
                    state.register.error = null;
                    emitChange();
                }).then(() => {
                    return register({
                        login: action.user.email,
                        password: action.user.password,
                        retypePassword: action.user.retypePassword,
                        name: action.user.name
                    });
                }).finally(() => {
                    state.register.process = false;
                    emitChange();
                });
                break;

            case Constants.SUBSCRIPTION_ON_SERVER:

                state.subscribe.process = true;
                emitChange();

                utils.delay().then(() => {
                    return updateValidation({
                        login: state.user.email,
                        valid_to: action.valid_to
                    });
                }).finally(() => {
                    state.subscribe.process = false;
                    emitChange();
                });
                break;
        }
        return true;
    })
}

const store = new Store();
export = store;
