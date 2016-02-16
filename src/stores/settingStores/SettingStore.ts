/// <reference path="../../../typings/tsd.d.ts" />
import {SettingMapFace, SettingFace} from './SettingInterfaces';
import Constants = require('../../constants/Constants');
import BaseStore from '../../utils/store/BaseStore';
import utils = require('../../utils/utils');

let ids = {
    draw: 'draw',
    qutro: 'qutro'
}

let _setting: SettingMapFace = {
    [ids.draw]: {
        name: 'Write',
        disable: false,
        active: false,
    },
    [ids.qutro]: {
        name: '4 pictures',
        disable: false,
        active: false
    }
};

let _active = ids.qutro;

_setting[_active].active = true;

function onSwitchAction(id: string) {
    if (ids[id]) {
        _setting[_active].active = false;
        _setting[id].active = true;
        _active = id;
    }
}

class SettingStore extends BaseStore {
    constructor(){
        super()
    }
    getAll() {
        return _setting;
    }
    getItem(id: string) {
        return _setting[id]
    }
    getActiveId() {
        return _active;
    }
    getIds() {
        return ids;
    }

    dispatcherIndex = this.register(function(payload: { action: any }) {
        var action = payload.action;

        switch (action.actionType) {
            case Constants.SWITCH_ACTION:
                onSwitchAction(action.id);
                break;
        }
        return true;
    })

};
const settingStore = new SettingStore();
export = settingStore;