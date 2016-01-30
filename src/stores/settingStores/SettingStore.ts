/// <reference path="../../../typings/tsd.d.ts" />
import {SettingMapFace, SettingFace} from './SettingInterfaces';
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import { createStore }from '../../utils/store/utilsStore';
import utils = require('../../utils/utils');

let _setting: SettingMapFace = {
    'draw': {
        name: 'draw',
        disable: false,
        active: false,
    },
    'setting2': {
        name: 'setting 2',
        disable: false,
        active: false
    }
};

let _active = utils.first(_setting);

_setting[_active].active = true;

function onSwitchAction(id: string) {
    if (_setting[id]) {
        _setting[id].active = !_setting[id].active;
    }
}


const Store = createStore({
    getAll: function(): any {
        return _setting;
    },
    getItem: function(id: string): any {
        return _setting[id]
    },
    getActiveItem: function() {
        return _setting[_active];
    },
    getActiveId: function() {
        return _active;
    },


    dispatcherIndex: AppDispatcher.register(function(payload: { action: any }) {
        var action = payload.action;

        switch (action.actionType) {
            case Constants.SWITCH_ACTION:
                onSwitchAction(action.id)
                break;
        }
        return true;
    })

});

export = Store;