/// <reference path="../../../typings/tsd.d.ts" />
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import utils = require('../../utils/utils');
import _ = require('underscore');
import { createStore }from '../../utils/store/utilsStore';
import LessonStore = require('../settingStores/LessonStore');
import {BoardsArrayFaces} from './BoardInterfaces';

import lesson1 = require('./lesson1');
import lesson2 = require('./lesson2');

let list = [] as BoardsArrayFaces;
let _index = 0;
let lastActiveLesson = null as string;

function loadLesson(): boolean {
    let lessonId = LessonStore.getActiveId();
    if (lastActiveLesson !== lessonId) {
        lastActiveLesson = lessonId;
        _index = 0;
        switch (lessonId) {
            case 'lesson1':
                list = lesson1;
                break;
            case 'lesson2':
                list = lesson2;
                break;
            case 'all':
                list = lesson1.concat(lesson2);
                break;
        }
        return true;
    }
    return false;
};

loadLesson();

function onNext() {
    if (_index === list.length - 1) {
        _index = 0;
    } else {
        _index++;
    }
}

function onPrev() {
    if (_index === 0) {
        _index = list.length - 1;
    } else {
        _index--;
    }
}

const Store = createStore({

    getData: function() {
        return list[_index];
    },

    dispatcherIndex: AppDispatcher.register(function(payload: { action: any }) {
        var action = payload.action;

        switch (action.actionType) {

            case Constants.SWITCH_ACTION:
                AppDispatcher.waitFor([LessonStore.dispatcherIndex], function() {
                    loadLesson() && Store.emitChange();
                });

                break;

            case Constants.BOARD_PREV:
                onPrev();
                Store.emitChange();
                break;
            case Constants.BOARD_NEXT:
                onNext();
                Store.emitChange();
                break;


        }
        return true;
    })

})

export =  Store;
