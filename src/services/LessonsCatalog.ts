import { LessonFace, Board, RawData, FreeType } from '../types';
import { isId } from '../lessons/helper/constants';
import _ = require('underscore');
import { BoardStatus, BoardReturnStatus } from './BoardStatus';
import css = require('../utils/css/css');
import { getIconsByIdLesson } from '../lessons/helper/constants';
import { getNewLessonsStatus, LessonReturnStatus } from './LessonsStatus';
import config = require('../generated-config');
import { PassState } from '../services/Pass';

interface LessonsCatalogReturnState {
    uid: string,
    lessonsTitle: string,
    allBoardsLength: number,
    sortedLessons: LessonFace[],
    current: BoardReturnStatus,
    status: LessonReturnStatus
}


interface LessonsMap {
    [uid: string]: LessonFace
}

function compare(a: LessonFace, b: LessonFace) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
}


function sort(unordered: LessonsMap, pass: PassState): LessonFace[] {
    const free: LessonFace[] = [];
    const notFree: LessonFace[] = [];
    const inProgressBlock: LessonFace[] = [];
    const allSorted: LessonFace[] = _.values(unordered).sort(compare);

    allSorted.forEach(item => {
        switch (item.freeType) {
            case FreeType.alwaysFree_____: return free.push(item);
            case FreeType.whenRegistered_: return pass.user.email ? free.push(item) : notFree.push(item);
            case FreeType.whenPrime______: return pass.user.isPrime ? free.push(item) : notFree.push(item);
            case FreeType.inProgressBlock: return inProgressBlock.push(item);
        }
    });
    const join = free.concat(notFree);
    if (config.isProduction) {
        return join;
    }
    return inProgressBlock.concat(join);
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
    getLessonByUid(uid: string) { return this.map[uid]; }

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
        this.isDirty = true;
    }
    resetAllNumberFinished() {
        _.mapObject(this.map, item => { item.numberFinished = null; });
        this.isDirty = true;
    }

    private getLesson() { return this.map[this.activeUid]; }

    getState(pass: PassState) {
        if (this.isDirty) {
            this.sorted = sort(this.map, pass);
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

