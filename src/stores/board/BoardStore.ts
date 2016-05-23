/// <reference path="../../../typings/tsd.d.ts" />
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import BaseStore from '../../utils/store/BaseStore';

import LessonStore = require('../lesson/LessonStore');
import storageHelper = require('./storageHelper');
import pointsHelper = require('./pointsHelper');

import {viewIds} from '../../lessons/helper/constants';

let list = LessonStore.getLessons();
let _index = 0;

let lastActiveLesson = null as string;

function loadLesson() {
    if (list !== LessonStore.getLessons()) {
        list = LessonStore.getLessons();
        _index = 0;
        pointsHelper.reset();
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

function onNextRandom() {
    const id = pointsHelper.getRandomNotCompletedId(list[_index], list);
    if (id) {
        const item = _.findWhere(list, { id: id });
        const index = _.indexOf(list, item);
        if (_.isNumber(index)) {
            _index = index;
            storageHelper.reset();
        }
    }
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

    getSettingId() {
        const idString = list[_index].id;
        let findId: string = null;
        _.mapObject(viewIds, (id: any) => {
            if (idString.indexOf(id) !== -1)
                findId = id;
        });
        if (!findId) {
            console.error('Lesson have no Id: ' + idString)
        }
        return findId;
    }


    getBoardState() {
        return storageHelper.getState(list[_index]);
    }

    getPoints() {
        return pointsHelper.getState(list[_index], list);
    }

    getPurchaseInfoState() {
        return {
            someState: '' //TODO
        }
    }

    getExplenation() {
        return {
            isVisible: true,
            title: LessonStore.getLessonName(),
            explenation: list[_index].explenation
        }
    }

    dispatcherIndex = this.register((payload: { action: any }) => {
        var action = payload.action;

        switch (action.actionType) {

            case Constants.READ:
                utils.voice.read(action.read);
                break;
            case Constants.CHOOSE_PICTURE:
            case Constants.CHOOSE_RADIO:

                storageHelper.setPressedAnswer(action.id);
                this.emitChange()
                break;
            case Constants.CHOOSE_ONE_TWO_THREE:
                storageHelper.setPressedAnswer(action.id);
                this.emitChange()
                break;

            case Constants.SWITCH_ACTION:
                this.waitFor([LessonStore.dispatcherIndex], () => {
                    loadLesson();
                    this.emitChange();
                });
                break;

            case Constants.BOARD_PREV:
                onPrev();
                utils.voice.stopReading();
                this.emitChange();
                break;

            case Constants.BOARD_NEXT:
                onNext();
                utils.voice.stopReading();
                this.emitChange();
                break;

            case Constants.BOARD_NEXT_RANDOM:
                onNextRandom();
                utils.voice.stopReading();
                this.emitChange();
                break;


            case Constants.GREETINGS_CONTINUE:
                pointsHelper.reset()
                this.emitChange();
                break;


        }
        return true;
    })
}

const boardStore = new BoardStore();
export = boardStore;
