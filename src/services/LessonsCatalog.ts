/// <reference path="../../typings/tsd.d.ts" />
import { LessonFace, Board, RawData } from '../types';
import { isId } from '../lessons/helper/constants';
import _ = require('underscore');
import { BoardStatus } from './BoardStatus';
import css = require('../utils/css/css');
import { clone } from '../utils/utils';
import { getNewLessonsStatus } from './LessonsStatus';


function getIconsByIdLesson(lessons: RawData[]) {
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

    private map: LessonsMap = {};
    private sorted: LessonFace[];
    private allBoardsLength = 0;
    private activeUid: string = null;
    private isDirty = true;
    public board: BoardStatus = null;

    constructor() { }

    add(free: boolean, uid: string, v: { title: string, lessons: RawData[] }) {
        this.isDirty = true;
        this.allBoardsLength = this.allBoardsLength + v.lessons.length;
        if (this.map[uid]) throw new Error('duplicate key in LessonsCatalog');

        const boards = v.lessons.map(data => { //tODO create bucket with autoId do not go throug them on import?!?!
            const lesson: Board = {
                autoId: _.uniqueId('_'),
                data
            }
            return lesson;
        });

        this.map[uid] = {
            uid,
            free,
            active: false,
            name: v.title,
            boards,
            iconSet: getIconsByIdLesson(v.lessons),
            numberFinished: null
        };
    }
    clear() { this.map = {}; }
    resetActiveLesson() { this.setActiveLesson(this.activeUid); }

    setActiveLesson(uid: string) {
        if (this.map[uid]) {
            if (this.map[this.activeUid]) this.map[this.activeUid].active = false;
            this.activeUid = uid;
            this.map[this.activeUid].active = true;
            this.board = new BoardStatus(this.getLesson());
        }
    }

    setNumberFinished(uid: string, nr: number) {
        if (this.map[uid]) {
            this.map[uid].numberFinished = nr;
        } else console.warn('skip Uid', uid);
    }

    private getLesson() { return this.map[this.activeUid]; }

    getState() {
        if (this.isDirty) {
            this.sorted = sort(this.map);
            this.isDirty = false;
        }

        const returns = {
            uid: this.activeUid,
            lessonsTitle: this.map[this.activeUid].name,
            allBoardsLength: this.allBoardsLength,
            sortedLessons: this.sorted,
            current: this.board.getState(),
            status: getNewLessonsStatus(this.map, this.allBoardsLength)
        }
        return clone(returns);
    }
}


export {
    LessonsCatalog
}

