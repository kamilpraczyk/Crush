/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';
import LessonStore = require('../lesson/LessonStore');

let state = {
    isPrime: false,
    isGreetings: false,
    userName : ''
};

class Store extends BaseStore {

    constructor() {
        super()
    }


    getStateHome() {
        return state;
    }


    dispatcherIndex = this.register((payload: { action: any }) => {
        var action = payload.action;

        switch (action.actionType) {

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
