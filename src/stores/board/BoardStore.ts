/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';

import LessonStore = require('../lesson/LessonStore');
import SettingStore = require('../setting/SettingStore');
import storageHelper = require('./storageHelper');

let list = LessonStore.getLessons();
let _index = 0;

let lastActiveLesson = null as string;

function loadLesson() {

    if (list !== LessonStore.getLessons()) {
        list = LessonStore.getLessons();
        _index = 0
    }
}

function onNext() {
    if (_index === list.length - 1) {
        _index = 0;
    } else {
        _index++;
    }
    storageHelper.reset();
}

function onPrev() {
    if (_index === 0) {
        _index = list.length - 1;
    } else {
        _index--;
    }
    storageHelper.reset();
}

class BoardStore extends BaseStore {

    constructor() {
        super()
    }

    getSettingsIds() {
        return SettingStore.getIds();
    }

    getActiveSettingId() {
        return SettingStore.getActiveId();
    }

    getQuatroState() {
        return storageHelper.getState(list[_index]);
    }

    getDrawState() {
        return {
            lessonData: list[_index]
        }
    }

    getRadioStage() {
        return storageHelper.getState(list[_index]);
    }

    dispatcherIndex = this.register((payload: { action: any }) => {
        var action = payload.action;

        switch (action.actionType) {

            case Constants.CHOOSE_PICTURE:
            case Constants.CHOOSE_RADIO:

                storageHelper.setPressedAnswer(action.id);
                this.emitChange()
                break;

            case Constants.SWITCH_ACTION:
                this.waitFor([LessonStore.dispatcherIndex, SettingStore.dispatcherIndex], () => {
                    console.log('switch board store!!!');
                    loadLesson()
                    this.emitChange()
                });
                break;

            case Constants.BOARD_PREV:
                onPrev();
                this.emitChange();
                break;

            case Constants.BOARD_NEXT:
                onNext();
                this.emitChange();
                break;

        }
        return true;
    })
}

const boardStore = new BoardStore();
export = boardStore;
