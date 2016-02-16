import {LessonMapFace, LessonFace} from '../lesson/interface';
import Constants = require('../../constants/Constants');
import BaseStore from '../../utils/store/BaseStore';
import utils = require('../../utils/utils');

let _lessons: LessonMapFace = {

    all: {
        name: 'all',
        amount: 5,
        disable: false,
        active: false,
        hide: true,
        lessons: []//???
    },

    animals: {
        name: 'animals',
        disable: false,
        active: false,
        lessons: require('../../lessons/animals')
    },

    lesson2: {
        name: 'lesson 2',
        disable: false,
        active: false,
        lessons: require('../../lessons/lesson2')
    }
};

let _active = 'animals';

_lessons[_active].active = true;

function onSwitchAction(id: string) {
    if (_lessons[id]) {
        _lessons[_active].active = false;
        _active = id;
        _lessons[_active].active = true;
    }
}

class LessonStore extends BaseStore {
    constructor() {
        super()
    }

    getAll(): LessonMapFace {
        return _lessons;
    }
    getItem(id: string): LessonFace {
        return _lessons[id]
    }
    getActiveId() {
        return _active;
    }
    getLessons() {
        return _lessons[_active].lessons;
    }

    dispatcherIndex = this.register((payload: { action: any }) => {
        var action = payload.action;

        switch (action.actionType) {
            case Constants.SWITCH_ACTION:
                onSwitchAction(action.id)
                break;
        }
        return true;
    })

};

const lessonStore = new LessonStore();
export = lessonStore;