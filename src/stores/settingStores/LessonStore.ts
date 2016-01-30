import {LessonMapFace, LessonFace} from './LessonsInterfaces';
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import { createStore }from '../../utils/store/utilsStore';
import utils = require('../../utils/utils');

let _lessons: LessonMapFace = {

    all: {
        name: 'all',
        amount: 5,
        disable: false,
        active: false
    },

    lesson1: {
        name: 'lesson 1',
        disable: false,
        active: false,
        hide: true
    },
    lesson2: {
        name: 'lesson 2',
        disable: false,
        active: false
    }
};

let _active = utils.first(_lessons);

_lessons[_active].active = true;

function onSwitchAction(id: string) {
    if (_lessons[id]) {
        _lessons[_active].active = false;
        _active = id;
        _lessons[_active].active = true;
    }
}

const Store = createStore({
    getAll: function(): LessonMapFace {
        return _lessons;
    },
    getItem: function(id: string): LessonFace {
        return _lessons[id]
    },
    getActiveItem: function() {
        return _lessons[_active];
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