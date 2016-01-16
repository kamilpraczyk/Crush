/// <reference path="../../typings/tsd.d.ts" />
import AppDispatcher = require('../dispatcher/AppDispatcher');
import Constants = require('../constants/Constants');
import utils = require('../utils/utils');
import _ = require('underscore');
import { createStore }from '../utils/store/utilsStore';


let _ids = {
    close: 'close',
    lessons: 'lessonsxx',
    settings: 'settingsss'
}

let _activeRoot = _ids.lessons;

let _rootList = {

    [_ids.close]: {
        name: 'X'
    },
    [_ids.lessons]: {
        name: 'lessons',
        active: true,
        disable: false
    },
    [_ids.settings]: {
        name: 'settings',
        active: false,
        disable: false
    }
};


function onClickRootItem(id: string): boolean {

    if (id === _ids.close) {
        //close menu
        console.log('close!!');
        return false;
    } else {
        if (_rootList[_activeRoot])
            _rootList[_activeRoot].active = false

        _activeRoot = id;
        _rootList[_activeRoot].active = true;
    }
    return true;
}


const Store =createStore( {

    getRootList: function() {
        return _rootList;
    },

    getActiveRoot: function() {
        return _activeRoot;
    },

    ids: _ids,

    dispatcherIndex: AppDispatcher.register(function(payload: { action: any }) {
        var action = payload.action;

        switch (action.actionType) {
            case Constants.ROOT_ITEM_CLICK:
                if (onClickRootItem(action.id))
                    Store.emitChange();
                break;
        }
        return true;
    })

})

export = {
    Store: Store,
    ids: _ids
}