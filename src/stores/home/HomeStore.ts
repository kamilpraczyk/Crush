/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';
import LessonStore = require('../lesson/LessonStore');
import catalog = require("../../catalog/catalog");

let state = {
    isPrime: false,
    isGreetings: true,
    isInvalidLogin: false, //todo
    user: {
        name: null as string,
        email: null as string,
        valid_to: null as string
    }
};

function logIn(login: string, password: string, callback: () => void) {
    catalog.isPrime(login, password).then((data: { isPrime: boolean, user: { email: string, name: string, valid_to: string } }) => {

        if (data.isPrime) {
            state.isInvalidLogin = false;
            state.isPrime = true;
            state.isGreetings = false;
        } else {
            state.isInvalidLogin = true;
        }

        if (data.user) {
            state.user.name = data.user.name;
            state.user.email = data.user.email;
            state.user.valid_to = data.user.valid_to;
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
