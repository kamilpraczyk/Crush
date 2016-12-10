/// <reference path="../../typings/tsd.d.ts" />
import { LessonFace, Board, RawData, FreeType } from '../types';
import { isId } from '../lessons/helper/constants';
import _ = require('underscore');
import { BoardStatus, BoardReturnStatus } from './BoardStatus';
import css = require('../utils/css/css');
import { getNewLessonsStatus, LessonReturnStatus } from './LessonsStatus';

interface LessonsCatalogReturnState {
    uid: string,
    lessonsTitle: string,
    allBoardsLength: number,
    sortedLessons: LessonFace[],
    current: BoardReturnStatus,
    status: LessonReturnStatus
}

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
    const alwaysFree: LessonFace[] = [];
    const whenRegistered: LessonFace[] = [];
    const whenPrime: LessonFace[] = [];
    const inProgressBlock: LessonFace[] = [];
    const allSorted: LessonFace[] = _.values(unordered).sort(compare);

    allSorted.forEach(item => {
        switch (item.freeType) {
            case FreeType.alwaysFree_____: return alwaysFree.push(item);
            case FreeType.whenRegistered_: return whenRegistered.push(item);
            case FreeType.whenPrime______: return whenPrime.push(item);
            case FreeType.inProgressBlock: return inProgressBlock.push(item);
        }
    });

    return inProgressBlock.concat(alwaysFree).concat(whenRegistered).concat(whenPrime);
}
class LessonsCatalog {

    private map: LessonsMap = {};
    private sorted: LessonFace[];
    private allBoardsLength = 0;
    private activeUid: string = null;
    private isDirty = true;
    public board: BoardStatus = null;

    constructor() { }

    add(freeType: FreeType, uid: string, v: { title: string, lessons: RawData[] }) {
        this.isDirty = true;
        this.allBoardsLength = this.allBoardsLength + v.lessons.length;
        if (this.map[uid]) throw new Error('duplicate key in LessonsCatalog');

        const boards = v.lessons.map(data => {
            const lesson: Board = {
                autoId: _.uniqueId('_'),// this will be produced once when load lessons
                data
            }
            return lesson;
        });

        this.map[uid] = {
            uid,
            freeType,
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

        const returns: LessonsCatalogReturnState = {
            uid: this.activeUid,
            lessonsTitle: this.map[this.activeUid].name,
            allBoardsLength: this.allBoardsLength,
            sortedLessons: this.sorted,
            current: this.board.getState(),
            status: getNewLessonsStatus(this.map, this.allBoardsLength)
        }
        return returns;
    }
}


export {
    LessonsCatalog,
    LessonsCatalogReturnState
}

