import {LessonMapFace, LessonFace} from '../../lessons/interface';
import Constants = require('../../constants/Constants');
import BaseStore from '../../utils/store/BaseStore';
import utils = require('../../utils/utils');
import _ = require('underscore');
import {lessons, activeStartup} from '../../lessons/lessons';

let _active = activeStartup;
let _lessons = lessons;

_lessons[_active].active = true;

function onSwitchAction(id: string) {
    if (_lessons[id]) {
        _lessons[_active].active = false;
        _active = id;
        _lessons[_active].active = true;
    }
}

function getBought(): LessonMapFace {
    let result = {} as LessonMapFace;
    _.mapObject(_lessons, (lesson: LessonFace, key: string) => {
        if (lesson.bought === true)
            result[key] = lesson;
    });
    return result;
}

function getToBought(): LessonMapFace {
    let result = {} as LessonMapFace;
    _.mapObject(_lessons, (lesson: LessonFace, key: string) => {
        if (lesson.bought === false)
            result[key] = lesson;
    });
    return result;
}

class LessonStore extends BaseStore {
    constructor() {
        super()
    }

    getToBought = getToBought;
    getBought = getBought;

    getItem(id: string): LessonFace {
        return _lessons[id]
    }

    getLessonName() {
        return _lessons[_active].name;
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
                console.log('switch lesson store');
                onSwitchAction(action.id);
                break;
        }
        return true;
    })

};

const lessonStore = new LessonStore();
export = lessonStore;