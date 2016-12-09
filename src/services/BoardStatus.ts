/// <reference path="../../typings/tsd.d.ts" />
import { LessonFace, Board } from '../types';
import _ = require('underscore');
import { BoardAnswer } from './BoardAnswer';
import { clone, round10 } from '../utils/utils';

interface MapStatus {
    [autoId: string]: boolean
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
    boards: Board[],
    board: Board,
    mapStatus: MapStatus
}

function _isCompletedStatus(mapStatus: MapStatus, id: string) {
    return _.has(mapStatus, id);
}

function createPoint(lessons: LessonFace, index: number, mapStatus: MapStatus): Points {

    function _isFinished() {
        return _.keys(mapStatus).length === boards.length && _isCompletedStatus(mapStatus, board.autoId);
    }
    const boards = lessons.boards;
    const board = boards[index];
    const currentLesson = _.indexOf(boards, board) + 1;
    const lessonsLength = boards.length;
    const isLastPage = (currentLesson === lessonsLength);
    const isCurrentSuccess = mapStatus[board.autoId];
    const isCurrentFail = isCurrentSuccess === false ? true : false;
    const isFinished = _isFinished();
    const score = _.compact(_.values(mapStatus)).length;
    const scorePercent = round10(score * (100 / lessonsLength), -1);
    const display = currentLesson + '/' + lessonsLength;

    return {
        uid: lessons.uid,
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

function getRandomNotCompletedId(lessons: LessonFace, currentId: string, mapStatus: MapStatus) {
    /*Get random id of next lesson and skip current lesson */
    const mapKeys = _.keys(mapStatus).concat([currentId]);
    const boardKeys = lessons.boards.map(board => board.autoId);
    const diff = _.difference(boardKeys, mapKeys);

    const sample = _.sample(diff, 1);
    if (sample.length) {
        const id = _.first(sample);
        const item = _.findWhere(lessons.boards, { autoId: id });
        const index = _.indexOf(lessons.boards, item);
        if (_.isNumber(index)) {
            return index;
        }
    }
    return null;
}

class BoardStatus {
    activeIndex: number = 0;
    lesson: LessonFace = null;
    mapStatus: MapStatus = {};
    public boardAnswer: BoardAnswer;

    constructor(lesson: LessonFace) {
        this.activeIndex = 0;
        this.mapStatus = {};
        this.lesson = lesson;
        this.generateNewBoardQuery();
    }

    private getCurrentBoard() { return this.lesson.boards[this.activeIndex]; }

    generateNewBoardQuery() { this.boardAnswer = new BoardAnswer(this.getCurrentBoard()); }

    onNextBoard() {
        if (this.activeIndex === this.lesson.boards.length - 1) {
            this.activeIndex = 0;
        } else this.activeIndex++;
        this.generateNewBoardQuery();
    }

    onNextRandomBoard() {
        const autoId = getRandomNotCompletedId(this.lesson, this.getCurrentBoard().autoId, this.mapStatus);
        if (autoId) this.activeIndex = autoId;
        this.generateNewBoardQuery();
    }

    onPrevBoard() {
        if (this.activeIndex === 0) {
            this.activeIndex = this.lesson.boards.length - 1;
        } else this.activeIndex--;
        this.generateNewBoardQuery();
    }

    setCompletedBoard(isSuccess: boolean) {
        if (!_isCompletedStatus(this.mapStatus, this.getCurrentBoard().autoId))
            this.mapStatus[this.getCurrentBoard().autoId] = isSuccess;
    }

    getState() {
        const returns = {
            points: createPoint(this.lesson, this.activeIndex, this.mapStatus),
            board: this.getCurrentBoard(),
            answer: this.boardAnswer.getState()
        }
        return clone(returns);
    }

}

export {
    BoardStatus
}