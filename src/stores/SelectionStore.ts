/// <reference path="../../typings/tsd.d.ts" />
import Constants = require('../constants/Constants');
import BaseStore from '../utils/store/BaseStore';
import SettingsRootStore = require('./SettingsRootStore');

import LessonStore = require('./lesson/LessonStore');
import SettingStore = require('./setting/SettingStore');
import {LessonMapFace} from './lesson/interface';
import {SettingMapFace} from './setting/interface';

const getList = function(): LessonMapFace | SettingMapFace {
    const ids = SettingsRootStore.getIds();
    switch (SettingsRootStore.getActiveRoot()) {
        case ids.settings:
            return SettingStore.getAll();
        case ids.lessons:
            return LessonStore.getAll();
    }
}

class SelectionStore extends BaseStore {

    constructor() {
        super()
    }

    getList() {
        return getList();
    }

    dispatcherIndex = this.register((payload: { action: any }) => {
        var action = payload.action;

        switch (action.actionType) {

            case Constants.SWITCH_ACTION:
                this.waitFor([SettingStore.dispatcherIndex, LessonStore.dispatcherIndex], () => {
                    this.emitChange();
                });

                break;
            case Constants.ROOT_ITEM_CLICK:
                this.emitChange();
                break;
        }
        return true;
    })
}

const selectionStore = new SelectionStore();
export = selectionStore;