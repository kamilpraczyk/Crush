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

let _isMinimalized = true;

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


const Store = createStore({

    getRootList: function() {
        return _rootList;
    },

    getActiveRoot: function() {
        return _activeRoot;
    },

    isMinimalized: function() {
        return _isMinimalized;
    },

    ids: _ids,

    dispatcherIndex: AppDispatcher.register(function(payload: { action: any }) {
        var action = payload.action;

        switch (action.actionType) {
            case Constants.ROOT_ITEM_CLICK:
                onClickRootItem(action.id)
                Store.emitChange();
                break;
            case Constants.MAXIMALIZE_SETTINGS:
                _isMinimalized = false;
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