/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace, BoardFaces, BoardFace} from '../types';
import {isId, icons} from '../lessons/helper/constants';
import _ = require('underscore');
import {Board} from './Board';

interface MapStatus {
    [uid: string]: boolean
}

function getIconsByIdLesson(lessons: BoardFaces) {
    const i: string[] = [];
    lessons.map(lesson => {
        const id = lesson.id;
        if (isId.isDraw(id)) i.push(icons.draw);
        if (isId.isFourPictures(id)) i.push(icons.fourPictures)
        if (isId.isFourWords(id)) i.push(icons.fourWords)
        if (isId.isInradio(id)) i.push(icons.inradio)
        if (isId.isRadio(id)) i.push(icons.radio)
        if (isId.isOneTwoThree(id)) i.push(icons.oneTwoThree)
    });
    return _.chain(i).compact().uniq().value();
}



class LessonsCatalog {

    map: {
        [uid: string]: LessonFace,
        // map<U>(callbackfn: (value: LessonFace, index: number, array: LessonFace[]) => U, thisArg?: any): U[];
    } = {};
    lessonsLength = 0;
    activeUid: string = null;
    public board: Board = null;

    constructor() { }

    add(free: boolean, uid: string, v: { title: string, lessons: BoardFaces }) {
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
        return this.map[this.activeUid || uid];
    }

    getUid() {
        return this.activeUid;
    }
    getAllUids() {
        return _.keys(this.map);
    }

    getMapLessons() {
        return this.map;
    }

    generateStatusMap(): MapStatus {
        return null;
    }

    setStatusMap(map: MapStatus) {

    }
}


export {
LessonsCatalog
}

