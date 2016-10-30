/// <reference path="../../typings/tsd.d.ts" />
import _ = require('underscore');
import dictionary = require('../utils/dictionary');
import css = require('../utils/css/css');
import {getState} from '../services';
import utils = require('../utils/utils');


interface MapStatus {
    [uid: string]: number
}

interface Status {
    entriesAll: number,
    entriesUndane: number,
    entriesCorrect: number,
    entriesIncorrect: number,
    entriesCorrectPercentage: string,
    finishedLessons: number
}

function getCountNewStatus(map: MapStatus) {
    const lessonsCatalog = getState().lessonsCatalog;
    let entriesCorrect = 0;
    let entriesIncorrect = 0;

    _.mapObject(map, (nr, uid) => {
        entriesCorrect += nr;
        entriesIncorrect += (lessonsCatalog.getLesson(uid).lessons.length - nr);
    });

    const status: Status = {
        entriesAll: lessonsCatalog.getLength(),
        entriesUndane: lessonsCatalog.getLength() - entriesCorrect - entriesIncorrect,
        entriesCorrect,
        entriesIncorrect,
        entriesCorrectPercentage: utils.toPercentHumanize(entriesCorrect, lessonsCatalog.getLength()),
        finishedLessons: _.intersection(lessonsCatalog.getAllUids(), _.keys(map)).length
    }
    return status;
}


class LessonsStatus {

    private map: MapStatus = {};
    private status: Status = null;
    private isDirty = true;

    constructor(map: MapStatus) {
        this.map = map;
        this.isDirty = true;
    }
    addLesson(name: string, value: number) {
        this.map[name] = value;
        this.isDirty = true;
    }
    getStatusByUid(uid: string) {
        return this.map[uid];
    }
    getStatus() {
        if (this.isDirty) {
            this.isDirty = false;
            this.status = getCountNewStatus(this.map);
        }
        return this.status;
    }
}

export {
LessonsStatus,
}