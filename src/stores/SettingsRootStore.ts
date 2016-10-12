/// <reference path="../../typings/tsd.d.ts" />
import Constants = require('../constants/Constants');
import utils = require('../utils/utils');
import _ = require('underscore');
import {RootFace, RootFaces } from './SettingsRootInterfaces';
import BaseStore from '../utils/store/BaseStore';
import LessonStore = require('./lesson/LessonStore');
import BoardStore = require('./board/BoardStore');
import css = require('../utils/css/css');
import dictionary = require('../utils/dictionary');

const _ids = {
    close: 'close',
    lessons: 'lessons',
    explenation: 'explenation',
    settings: 'setting',
    user: 'user'
}

let _isMinimalized = true;
let _isMenuMinimalized = false;
let _activeRoot = _ids.lessons;

const _rootList: RootFaces = {

    [_ids.user]: {
        id: _ids.user,
        name: dictionary.menu.USER,
        backUrl: css.backUrl.user,
        active: false,
        disable: false
    },
    [_ids.lessons]: {
        id: _ids.lessons,
        name: dictionary.menu.LESSONS,
        backUrl: css.backUrl.lessons,
        active: true,
        disable: false
    },
    [_ids.explenation]: {
        id: _ids.explenation,
        name: dictionary.menu.GRAMMAR,
        backUrl: css.backUrl.grammar,
        active: false,
        disable: false
    },
    [_ids.close]: {
        id: _ids.close,
        name: dictionary.menu.PRACTISE,
        backUrl: css.backUrl.menu,
        active: false,
        disable: false
    }
};


function onClickRootItem(id: string) {

    if (id === _ids.close) {
        _isMinimalized = true;
    } else {
        _isMinimalized = false;
        _rootList[_activeRoot].active = false;
        _activeRoot = id;
        _rootList[_activeRoot].active = true;
    }
}


class SettingRootStore extends BaseStore {

    constructor() {
        super()
    }

    getIds() {
        return _ids;
    }

    getRootList() {
        return _rootList;
    }

    getActiveRoot() {
        return _activeRoot;
    }

    isMinimalized() {
        return _isMinimalized;
    }
    isMenuMinimalized() {
        return _isMenuMinimalized;
    }

    dispatcherIndex = this.register((payload: { action: { actionType: string, id?: string } }) => {
        const action = payload.action;

        switch (action.actionType) {
            case Constants.GREETINGS_CONTINUE:
                onClickRootItem(_ids.lessons);
                this.emitChange();
                break;
            case Constants.SWITCH_ACTION:
                this.waitFor([LessonStore.dispatcherIndex, BoardStore.dispatcherIndex], () => {
                    onClickRootItem(_ids.explenation);
                    this.emitChange();
                });
                break;
            case Constants.GO_TEST:
                onClickRootItem(_ids.close);
                this.emitChange();
                break;
            case Constants.ROOT_ITEM_CLICK:
                onClickRootItem(action.id)
                this.emitChange();
                break;
            case Constants.MAXIMALIZE_SETTINGS:
                _isMinimalized = false;
                this.emitChange();
                break;
            case Constants.EXPLENATION_SCROLL_MIDDLE:
                _isMenuMinimalized = true;
                this.emitChange();
                break;
            case Constants.EXPLENATION_SCROLL_TOP:
                _isMenuMinimalized = false;
                this.emitChange();
                break;

        }
        return true;
    })

}

const settingRootStore = new SettingRootStore();
export = settingRootStore;