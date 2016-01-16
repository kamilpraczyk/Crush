/// <reference path="../../typings/tsd.d.ts" />
import AppDispatcher = require('../dispatcher/AppDispatcher');
import Constants = require('../constants/Constants');
import utils = require('../utils/utils');
import { createStore }from '../utils/store/utilsStore';
import SettingsRootStore = require('./SettingsRootStore');

import LessonStore = require('./settingStores/LessonStore');
import SettingStore = require('./settingStores/SettingStore');
import {LessonMapFace, LessonFace} from './settingStores/LessonsInterfaces';

const RootStore = SettingsRootStore.Store;
const ids = SettingsRootStore.ids;

const getList = function(): any {
    switch (SettingsRootStore.Store.getActiveRoot()) {
        case ids.settings:
            return SettingStore.getAll();
        case ids.lessons:
            return LessonStore.getAll();
    }
}

const executeAction = function(id: string): any {
      let item = null as any;
    console.log('execute', id);
    switch (RootStore.getActiveRoot()) {
        case ids.settings:
             item = SettingStore.getItem(id);
             console.log('execute', item);
            break;
        case ids.lessons:
            item = LessonStore.getItem(id);
            console.log('execute', item);
            break;

    }
};


const Store = createStore({

    getList: function() {
        return getList();
    },

    dispatcherIndex: AppDispatcher.register(function(payload: { action: any }) {
        var action = payload.action;

        switch (action.actionType) {
            case Constants.SWITCH_ACTION:
                executeAction(action.id);
                break;
            case Constants.ROOT_ITEM_CLICK:
                Store.emitChange();
                break;
        }
        return true;
    })

});

export = Store;