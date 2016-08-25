import {LessonFace} from '../../lessons/interface';
import Constants = require('../../constants/Constants');
import BaseStore from '../../utils/store/BaseStore';
import utils = require('../../utils/utils');
import _ = require('underscore');
import modelLessons = require('../../lessons/lessons');
const {lessons, activeStartup} = modelLessons;
let uid = activeStartup;
let _lessons = lessons;

_lessons[uid].active = true;

function onSwitchAction(id: string) {
    if (_lessons[id]) {
        _lessons[uid].active = false;
        uid = id;
        _lessons[uid].active = true;
    }
}

class LessonStore extends BaseStore {
    constructor() {
        super()
    }

    getAllLessons() {
        return _lessons;
    }

    getItem(uid: string): LessonFace {
        return _lessons[uid];
    }

    getLessonName() {
        return _lessons[uid].name;
    }

    getUid() {
        return uid;
    }
    getLessons() {
        return _lessons[uid].lessons;
    }

    dispatcherIndex = this.register((payload: { action: any }) => {
        const action = payload.action;

        switch (action.actionType) {
            case Constants.SWITCH_ACTION:
                onSwitchAction(action.id);
                break;
        }
        return true;
    })

};

const lessonStore = new LessonStore();
export = lessonStore;