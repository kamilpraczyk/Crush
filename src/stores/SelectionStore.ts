/// <reference path="../../typings/tsd.d.ts" />
import AppDispatcher = require('../dispatcher/AppDispatcher');
import Constants = require('../constants/Constants');
import { createStore }from '../utils/store/utilsStore';
import SettingsRootStore = require('./SettingsRootStore');

import LessonStore = require('./settingStores/LessonStore');
import SettingStore = require('./settingStores/SettingStore');

const ids = SettingsRootStore.ids;

const getList = function(): any {
    switch (SettingsRootStore.Store.getActiveRoot()) {
        case ids.settings:
            return SettingStore.getAll();
        case ids.lessons:
            return LessonStore.getAll();
    }
}


const Store = createStore({

    getList: function() {
        return getList();
    },

    dispatcherIndex: AppDispatcher.register(function(payload: { action: any }) {
        var action = payload.action;

        switch (action.actionType) {

            case Constants.SWITCH_ACTION:
                AppDispatcher.waitFor([SettingStore.dispatcherIndex, LessonStore.dispatcherIndex], function() {
                    Store.emitChange();
                });

                break;
            case Constants.ROOT_ITEM_CLICK:
                Store.emitChange();
                break;
        }
        return true;
    })

});

export = Store;