/// <reference path="../../typings/tsd.d.ts" />
import { LessonMapFace, LessonFace, BoardFaces, BoardFace } from '../types';
import { isId } from '../lessons/helper/constants';
import _ = require('underscore');
import { Board } from './Board';
import css = require('../utils/css/css');



function getIconsByIdLesson(lessons: BoardFaces) {
    const i: string[] = [];
    lessons.map(lesson => {
        const id = lesson.id;
        if (isId.isDraw(id)) i.push(css.iconsSets.draw);
        if (isId.isFourPictures(id)) i.push(css.iconsSets.fourPictures);
        if (isId.isFourWords(id)) i.push(css.iconsSets.fourWords);
        if (isId.isInradio(id)) i.push(css.iconsSets.inradio);
        if (isId.isRadio(id)) i.push(css.iconsSets.radio);
        if (isId.isMultiRadio(id)) i.push(css.iconsSets.multiRadio);
        if (isId.isOneTwoThree(id)) i.push(css.iconsSets.oneTwoThree);
    });
    return _.chain(i).compact().uniq().value();
}

interface LessonsMap {
    [uid: string]: LessonFace
}

function compare(a: LessonFace, b: LessonFace) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}


function sort(unordered: LessonsMap): LessonFace[] {
    const orderedFree: LessonFace[] = [];
    const orderedNotFree: LessonFace[] = [];
    const allSorted: LessonFace[] = _.values(unordered).sort(compare);

    allSorted.forEach(item => {
        if (item.free) {
            orderedFree.push(item);
        } else {
            orderedNotFree.push(item);
        }
    })

    return orderedFree.concat(orderedNotFree);
}
class LessonsCatalog {

    map: LessonsMap = {};
    sorted: LessonFace[];
    lessonsLength = 0;
    activeUid: string = null;
    isDirty = true;
    public board: Board = null;


    constructor() { }

    add(free: boolean, uid: string, v: { title: string, lessons: BoardFaces }) {
        this.isDirty = true;
        this.lessonsLength = this.lessonsLength + v.lessons.length;
        if (this.map[uid]) throw new Error('duplicate key in LessonsCatalog');
        this.map[uid] = {
            uid,
            free,
            active: false,
            name: v.title,
            lessons: v.lessons,
            iconSet: getIconsByIdLesson(v.lessons)
        };
    }
    clear() {
        this.map = {};
    }

    resetActiveLesson() {
        this.setActiveLesson(this.activeUid);
    }

    setActiveLesson(uid: string) {
        if (this.map[uid]) {
            if (this.map[this.activeUid]) this.map[this.activeUid].active = false;
            this.activeUid = uid;
            this.map[this.activeUid].active = true;
            this.board = new Board(this.getLesson());
        }
    }

    getLessonTitle() {
        return this.map[this.activeUid].name;
    }

    getLength() {
        return this.lessonsLength;
    }

    getLesson(uid?: string) {
        return this.map[uid || this.activeUid];
    }

    getUid() {
        return this.activeUid;
    }
    getAllUids() {
        return _.keys(this.map);
    }
    getSortedLessons() {
        if (this.isDirty)
            this.sorted = sort(this.map);

        this.isDirty = false;
        return this.sorted;
    }
}


export {
    LessonsCatalog
}

