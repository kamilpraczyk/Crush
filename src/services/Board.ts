/// <reference path="../../typings/tsd.d.ts" />
import {LessonFace, BoardFaces, BoardFace} from '../types';
import _ = require('underscore');
import utils = require('../utils/utils');
import {BoardQuery}  from './BoardQuery';

interface MapStatus {
    [uid: string]: boolean
}

interface Points {
    uid: string,
    score: number,
    scorePercent: number,
    currentLesson: number,
    lessonsLength: number,
    display: string,
    isLastPage: boolean,
    isCurrentSuccess: boolean,
    isCurrentFail: boolean,
    isFinished: boolean,
    boards: BoardFaces,
    board: BoardFace,
    mapStatus: MapStatus
}

function _isCompletedStatus(mapStatus: MapStatus, id: string) {
    return _.has(mapStatus, id);
}

function createPoint(l: LessonFace, index: number, mapStatus: MapStatus): Points {

    function _isFinished() {
        return _.keys(mapStatus).length === boards.length && _isCompletedStatus(mapStatus, board.id);
    }
    const boards = l.lessons;
    const board = boards[index];
    const currentLesson = _.indexOf(boards, board) + 1;
    const lessonsLength = boards.length;
    const isLastPage = (currentLesson === lessonsLength);
    const isCurrentSuccess = mapStatus[board.id];
    const isCurrentFail = isCurrentSuccess === false ? true : false;
    const isFinished = _isFinished();
    const score = _.compact(_.values(mapStatus)).length;
    const scorePercent = utils.round10(score * (100 / lessonsLength), -1);
    const display = currentLesson + '/' + lessonsLength;

    return {
        uid: l.uid,
        score,
        scorePercent,
        currentLesson,
        lessonsLength,
        display,
        isLastPage,
        isCurrentSuccess,
        isCurrentFail,
        isFinished,
        boards,
        board,
        mapStatus
    }
}

function getRandomNotCompletedId(l: LessonFace, currentId: string, mapStatus: MapStatus) {
    /*Get random id of next lesson and skip current lesson */
    const mapKeys = _.keys(mapStatus).concat(currentId);
    const boardKeys = l.lessons.map(board => board.id);
    const diff = _.difference(boardKeys, mapKeys);

    const sample = _.sample(diff, 1);
    if (sample.length) {
        const id = _.first(sample);
        const item = _.findWhere(l.lessons, { id: id });
        const index = _.indexOf(l.lessons, item);
        if (_.isNumber(index)) {
            return index;
        }
    }
    return null;
}

class Board {
    activeIndex: number = 0;
    lesson: LessonFace = null;
    mapStatus: MapStatus = {};
    public boardQuery: BoardQuery;

    constructor(lesson: LessonFace) {
        this.activeIndex = 0;
        this.mapStatus = {};
        this.lesson = lesson;
        this.generateNewBoardQuery();
    }

    generateNewBoardQuery() {
        this.boardQuery = new BoardQuery(this.getCurrentBoard());
    }

    getPoints() {
        return createPoint(this.lesson, this.activeIndex, this.mapStatus);
    }

    getCurrentBoard() {
        return this.lesson.lessons[this.activeIndex];
    }
    getLessons() {
        return this.lesson.lessons;
    }

    onNextBoard() {
        if (this.activeIndex === this.getLessons().length - 1) {
            this.activeIndex = 0;
        } else
            this.activeIndex++;
        this.generateNewBoardQuery();
    }

    onNextRandomBoard() {
        const id = getRandomNotCompletedId(this.lesson, this.getCurrentBoard().id, this.mapStatus);
        if (id) {
            this.activeIndex = id;
        }
        this.generateNewBoardQuery();
    }

    onPrevBoard() {
        if (this.activeIndex === 0) {
            this.activeIndex = this.getLessons().length - 1;
        } else
            this.activeIndex--;
        this.generateNewBoardQuery();
    }

    setCompletedBoard(isSuccess: boolean) {
        if (!_isCompletedStatus(this.mapStatus, this.getCurrentBoard().id)) {
            this.mapStatus[this.getCurrentBoard().id] = isSuccess;
        }
    }


}



export {
Board
}