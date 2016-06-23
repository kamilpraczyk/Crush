/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';
import LessonStore = require('../lesson/LessonStore');
import catalog = require("../../catalog/catalog");

let state = {
    isPrime: false,
    isPrimeExpired: false,//TODO love to purchase more time
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

function logIn(login: string, password: string) {
    resetState();

    return catalog.serverIsPrime(login, password).then((data: { error?: string, isPrime?: boolean, user?: { email: string, name: string, valid_to: string } }) => {
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
    });
}

function updateValidation(login: string, valid_to: string) {
    return catalog.serverUpdateValidTo(login, valid_to).then((data: { error?: string, success?: boolean }) => {
        data = data || {};
        console.log('data ===', data)//TODO
    })
}

function register(login: string, password: string, name: string) {
    return catalog.serverRegister(login, password, name).then((data: { error?: string, success?: boolean }) => {
        data = data || {};
        console.log('data ===', data)//TODO
    })
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
                logIn(action.login, action.password)
                    .catch((e: Error) => { console.error(e) })
                    .finally(this.emitChange.bind(this));
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

            case Constants.REGISTER_ON_SERVER:
                register(action.user.email, action.user.password, action.user.name)
                    .catch((e: Error) => { console.error(e) })
                    .finally(this.emitChange.bind(this));
                break;


            /* case Constants.REGISTER_ON_SERVER: //TODO
                 //TODO change to register on server not to update validation
                 updateValidation(state.user.email || "kamil.praczyk@gmail.com", "2016-07-12")
                     .catch((e: Error) => { console.error(e) })
                     .finally(this.emitChange.bind(this));
                 break;*/
        }
        return true;
    })
}

const store = new Store();
export = store;
