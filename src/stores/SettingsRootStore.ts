/// <reference path="../../typings/tsd.d.ts" />
import Constants = require('../constants/Constants');
import utils = require('../utils/utils');
import _ = require('underscore');
import {RootFace, RootFaces } from './SettingsRootInterfaces';
import BaseStore from '../utils/store/BaseStore';


const _ids = {
    close: 'close',
    lessons: 'lessons',
    explenation: 'explenation',
    settings: 'setting',
    shopping: 'shopping'
}

let _isMinimalized = true;

let _activeRoot = _ids.lessons;

let _rootList = {

    [_ids.close]: {
        icon: 'icon-cancel',
        active: false,
        disable: false
    },
    [_ids.explenation]: {
        name: 'info',
        icon: 'icon-info',
        active: false,
        disable: false
    },
    [_ids.settings]: {
        name: 'settings',
        icon: 'icon-sliders',
        active: false,
        disable: false
    },
    [_ids.lessons]: {
        name: 'lessons',
        icon: 'icon-book',
        active: true,
        disable: false
    },
    [_ids.shopping]: {
        name: 'shopping',
        icon: 'icon-basket',
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

    dispatcherIndex = this.register((payload: { action: any }) => {
        let action = payload.action;

        switch (action.actionType) {
            case Constants.ROOT_ITEM_CLICK:
                onClickRootItem(action.id)
                this.emitChange();
                break;
            case Constants.MAXIMALIZE_SETTINGS:
                _isMinimalized = false;
                this.emitChange();
                break;

        }
        return true;
    })

}

const settingRootStore = new SettingRootStore();
export = settingRootStore;