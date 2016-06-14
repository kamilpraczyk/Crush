/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';
import LessonStore = require('../lesson/LessonStore');
import catalog = require("../../catalog/catalog");

let state = {
    isPrime: false,
    isPrimeExpired: false,//TODO lowe to purchase more time
    isGreetings: true,
    isRegistering: false,
    isInvalidLogin: false,
    user: {
        name: null as string,
        email: null as string,
        valid_to: null as string
    }
};

function resetState() {
    state.isInvalidLogin = false;
    state.isPrimeExpired = false;
    state.isPrime = false;
    state.isRegistering = false;
    state.user = {
        name: null,
        email: null,
        valid_to: null
    };
}

function logIn(login: string, password: string, callback: () => void) {
    resetState();

    catalog.isPrime(login, password).then((data: { error?: string, isPrime?: boolean, user?: { email: string, name: string, valid_to: string } }) => {
        data = data || {};

        state.isInvalidLogin = data.user ? false : true;
        state.isPrime = _.isBoolean(data.isPrime) ? data.isPrime : false;
        state.isGreetings = state.isPrime ? false : true;
        state.isPrimeExpired = data.user && !state.isPrime ? true : false;

        if (data.user) {
            state.user = {
                name: data.user.name,
                email: data.user.email,
                valid_to: data.user.valid_to
            };
        }

        callback();
    }).catch((err) => {
        callback();
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

        switch (action.actionType) {

            case Constants.LOGIN:
                logIn(action.login, action.password, this.emitChange.bind(this));
                break;

            case Constants.SUBSCRIBE:
                resetState();
                state.isGreetings = true;
                this.emitChange();
                break;

            case Constants.REGISTER:
                state.isGreetings = false;
                state.isRegistering = true;
                this.emitChange();
                break;

            case Constants.LOGOUT:
                resetState();
                state.isGreetings = true;
                this.emitChange();
                break;

            case Constants.GREETINGS_SHOW_LESSONS:
                state.isGreetings = false;
                this.emitChange();
                break;
        }
        return true;
    })
}

const store = new Store();
export = store;
