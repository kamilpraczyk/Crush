/// <reference path="../../typings/tsd.d.ts" />
import Constants = require('../constants/Constants');
import BaseStore from '../utils/store/BaseStore';
import SettingsRootStore = require('./SettingsRootStore');

import LessonStore = require('./lesson/LessonStore');
import SettingStore = require('./setting/SettingStore');
import BoardStore = require('./board/BoardStore');



class SelectionStore extends BaseStore {

    constructor() {
        super()
    }

    getRootState() {
        return {
            ids: SettingsRootStore.getIds(),
            id: SettingsRootStore.getActiveRoot(),
        }
    }
    
    getSettings() {
        return SettingStore.getAll();
    }
    getBought() {
        return LessonStore.getBought();
    }
    getToBought() {
        return LessonStore.getToBought();
    }
    getExplenation() {
        return BoardStore.getExplenation();
    }


    dispatcherIndex = this.register((payload: { action: any }) => {
        var action = payload.action;

        switch (action.actionType) {

            case Constants.SWITCH_ACTION:
                this.waitFor([SettingStore.dispatcherIndex, LessonStore.dispatcherIndex], () => {
                    console.log('switch selection store');
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