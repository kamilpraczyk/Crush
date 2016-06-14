/// <reference path="../../typings/tsd.d.ts" />
import Constants = require('../constants/Constants');
import utils = require('../utils/utils');
import _ = require('underscore');
import {RootFace, RootFaces } from './SettingsRootInterfaces';
import BaseStore from '../utils/store/BaseStore';
import LessonStore = require('./lesson/LessonStore');
import BoardStore = require('./board/BoardStore');

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

let _rootList = {

    [_ids.close]: {
        name: 'practise',
        icon: 'moon-accessibility',
        active: false,
        disable: false
    },
    [_ids.explenation]: {
        name: 'grammar',
        icon: 'moon-file',
        active: false,
        disable: false
    },
    [_ids.lessons]: {
        name: 'lessons',
        icon: 'moon-drawer3',
        active: true,
        disable: false
    },
    [_ids.user]: {
        name: 'user',
        icon: 'moon-user2',
        active: false,
        disable: false
    }
} as RootFaces;


function onClickRootItem(id: string) {

    if (id === _ids.close) {
        _isMinimalized = true;
    } else {
        _isMinimalized = false;
        if (_rootList[_activeRoot])
            _rootList[_activeRoot].active = false

        _activeRoot = id;
        _rootList[_activeRoot].active = true;
    }
}


class SettingRootStore extends BaseStore {
    private ids = _ids

    constructor() {
        super()
    }

    getIds() {
        return this.ids;
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

    dispatcherIndex = this.register((payload: { action: any }) => {
        let action = payload.action;

        switch (action.actionType) {
            case Constants.SWITCH_ACTION:
                this.waitFor([LessonStore.dispatcherIndex, BoardStore.dispatcherIndex], () => {
                    this.emitChange();
                });
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
            case Constants.EXPLENATION_SCROLL_RESET:
                _isMenuMinimalized = false;
                this.emitChange();
                break;



        }
        return true;
    })

}

const settingRootStore = new SettingRootStore();
export = settingRootStore;