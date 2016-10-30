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
    finishedLessons: number,
    iconSetStatus: { name: number, icon: string }[]
}

function getCountNewStatus(map: MapStatus) {
    const lessonsCatalog = getState().lessonsCatalog;
    let entriesCorrect = 0;
    let entriesIncorrect = 0;
    const statusIcons: MapStatus = {};

    _.mapObject(map, (nr, uid) => {
        entriesCorrect += nr;
        const lesson = lessonsCatalog.getLesson(uid);
        if (lesson) {
            entriesIncorrect += (lesson.lessons.length - nr);
            lesson.iconSet.map(icon => {
                if (!statusIcons[icon]) statusIcons[icon] = 0;
                ++statusIcons[icon];
            });
        }

    });

    const iconSetStatus: { name: number, icon: string }[] = [];
    _.mapObject(statusIcons, (nr, icon) => {
        iconSetStatus.push({ name: nr, icon });
    });

    const status: Status = {
        entriesAll: lessonsCatalog.getLength(),
        entriesUndane: lessonsCatalog.getLength() - entriesCorrect - entriesIncorrect,
        entriesCorrect,
        entriesIncorrect,
        entriesCorrectPercentage: utils.toPercentHumanize(entriesCorrect, lessonsCatalog.getLength()),
        finishedLessons: _.intersection(lessonsCatalog.getAllUids(), _.keys(map)).length,
        iconSetStatus
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