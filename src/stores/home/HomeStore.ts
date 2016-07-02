/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';
import LessonStore = require('../lesson/LessonStore');
import catalog = require("../../catalog/catalog");
import dictionary = require('../../utils/dictionary');

const initialState = {

    login: {
        error: false,
        process: false,
        success: false
    },
    register: {
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
        valid_to: null as string
    },
};
declare type State = typeof initialState;

let state: State = JSON.parse(JSON.stringify(initialState));


function reset() {
    state = JSON.parse(JSON.stringify(initialState));
}

function logIn(login: string, password: string) {
    reset();

    return catalog.serverIsPrime(login, password).then((data: { error?: string, isPrime?: boolean, user?: { email: string, name: string, valid_to: string } }) => {
        data = data || {};

        state.login.success = data.user && data.user.name ? true : false;
        state.login.error = !state.login.success;

        if (data.user) {
            state.user = {
                isPrime: _.isBoolean(data.isPrime) ? data.isPrime : false,
                name: data.user.name,
                email: data.user.email,
                valid_to: data.user.valid_to
            };
        }
    }).catch((e: Error) => {
        state.login.error = true;
        console.error(e)
    });
}

function updateValidation(login: string, valid_to: string) {
    return catalog.serverUpdateValidTo(login, valid_to).then((data: { error?: string, success?: boolean }) => {
        console.info('updateValidation data =', data)
        data = data || {};

        state.subscribe.error = data.error ? dictionary.SERVER_ERROR_SUBSCRIBING_WENT_WRONG : null;
        state.user.isPrime = !!data.success;
        state.user.valid_to = valid_to;

    }).catch((e: Error) => {
        console.error(e);
        state.subscribe.error = dictionary.SERVER_ERROR_SUBSCRIBING_WENT_WRONG;
    });
}

function register(login: string, password: string, name: string) {
    return catalog.serverRegister(login, password, name).then((data: { error?: string, success?: boolean }) => {
        console.info('register data =', data);
        data = data || {};
        if (data.error) {
            if (data.error.indexOf('Duplicate') !== -1 || data.error.indexOf('duplicate') !== -1) {
                state.register.error = dictionary.SERVER_ERROR_DUPLICATE_EMAIL;
            } else {
                state.register.error = dictionary.SERVER_ERROR_INVALID_DATA;
            }
        } else if (data.success) {
            state.register.success = true;
        }
    }).catch((e: Error) => {
        console.error(e);
        state.register.error = dictionary.SERVER_ERROR_NO_RESPOND;
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
                    logIn(action.login, action.password)
                        .finally(() => {
                            state.login.process = false;
                            emitChange();
                        })
                });
                break;

            case Constants.LOGOUT:
                reset();
                emitChange();
                break;

            case Constants.REGISTER_ON_SERVER:

                state.register.process = true;
                emitChange();

                utils.delay().then(() => {
                    register(action.user.email, action.user.password, action.user.name)
                        .finally(() => {
                            state.register.process = false;
                            emitChange();
                        })
                });
                break;

            case Constants.SUBSCRIPTION_ON_SERVER:

                state.subscribe.process = true;
                emitChange()
                utils.delay().then(() => {
                    updateValidation(state.user.email, action.valid_to)
                        .finally(() => {
                            state.subscribe.process = false;
                            emitChange()
                        });
                });
                break;
        }
        return true;
    })
}

const store = new Store();
export = store;
