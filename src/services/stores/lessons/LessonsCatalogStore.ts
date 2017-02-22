import { LessonFace, Board, RawData, FreeType } from '../../../types';
import { isId } from '../../../lessons/helper/constants';
import _ = require('underscore');
import { BoardStatusStore, BoardStatusState } from './stores/BoardStatusStore';
import { getNewLessonsStatus, LessonStatusState } from './stores/LessonsStatusStore';
import css = require('../../../utils/css/css');
import { getIconsByIdLesson } from '../../../lessons/helper/constants';
import config = require('../../../generated-config');
import { PassState } from '../../../services/stores';
import { getLessons } from '../../../lessons/lessons';

interface LessonsCatalogState {
    uid: string,
    lessonsTitle: string,
    allBoardsLength: number,
    sortedLessons: LessonFace[],
    current: BoardStatusState,
    status: LessonStatusState
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

class LessonsCatalogStore {

    private map: LessonsMap = {};
    private sorted: LessonFace[];
    private allBoardsLength = 0;
    private activeUid: string = null;
    private isUnsorted = true;
    public boardStatusStore: BoardStatusStore = null;

    constructor() { }

    getLessons = () => getLessons(this);

    add(freeType: FreeType, uid: string, v: { title: string, lessons: RawData[] }) {
        this.isUnsorted = true;
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
            this.boardStatusStore = new BoardStatusStore(this.getLesson());
        }
    }

    setNumberFinished(uid: string, nr: number) {
        if (this.map[uid]) this.map[uid].numberFinished = nr;
        this.isUnsorted = true;
    }
    resetAllNumberFinished() {
        _.mapObject(this.map, item => { item.numberFinished = null; });
        this.isUnsorted = true;
    }

    private getLesson() { return this.map[this.activeUid]; }

    getState(pass: PassState): LessonsCatalogState {
        if (this.isUnsorted) {
            this.sorted = sort(this.map, pass);
            this.isUnsorted = false;
        }

        return {
            uid: this.activeUid,
            lessonsTitle: this.map[this.activeUid].name,
            allBoardsLength: this.allBoardsLength,
            sortedLessons: this.sorted,
            current: this.boardStatusStore.getState(),
            status: getNewLessonsStatus(this.map, this.allBoardsLength)
        }
    }
}


export {
    LessonsCatalogStore,
    LessonsCatalogState
}

