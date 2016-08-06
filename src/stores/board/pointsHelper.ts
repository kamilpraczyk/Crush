/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../../lessons/interface';
import _ = require('underscore');
import utils = require('../../utils/utils');

let points = {
    uid: null as string,
    score: 0,
    scorePercent: 0,
    currentLesson: 0,
    lessonsLength: 0,
    display: '',
    isLastPage: false,
    mapStatus: {},
    isCurrentSuccess: false,
    isCurrentFail: false,
    isFinished: true,
    boards: [] as BoardFaces,
    board: null as BoardFace
}


function reset() {
    points.uid = null;
    points.currentLesson = 0;
    points.lessonsLength = 0;
    points.display = '';
    points.isLastPage = false;
    points.mapStatus = {};
    points.isCurrentSuccess = false;
    points.isCurrentFail = false;
    points.isFinished = false;
    points.score = 0;
    points.boards = [];
    points.board = null;
    points.scorePercent = 0;
}

function generate(board: BoardFace, boards: BoardFaces, uid: string) {
    points.uid = uid;
    points.boards = boards;
    points.board = board;
    points.currentLesson = _.indexOf(boards, board) + 1;
    points.lessonsLength = boards.length;
    points.isLastPage = (points.currentLesson === points.lessonsLength);
    points.isCurrentSuccess = points.mapStatus[board.id];
    points.isCurrentFail = points.isCurrentSuccess === false ? true : false;
    points.isFinished = isFinished(board, boards);
    points.score = _.compact(_.values(points.mapStatus)).length;
    points.scorePercent = utils.round10(points.score * (100 / points.lessonsLength), -1);
    points.display = points.currentLesson + '/' + points.lessonsLength;

    //todo remove 
    //points.isFinished = points.isLastPage;
}

function setCompletedStatus(board: BoardFace, isSuccess: boolean) {
    if (!isCompletedStatus(board)) {
        points.mapStatus[board.id] = isSuccess;
    }
}

function isFinished(board: BoardFace, boards: BoardFaces) {
    return _.keys(points.mapStatus).length === boards.length && isCompletedStatus(board);
}

function isCompletedStatus(board: BoardFace) {
    return _.has(points.mapStatus, board.id);
}

function getState(board: BoardFace, boards: BoardFaces, uid: string) {
    generate(board, boards, uid);
    return {
        points: points
    };
}

function getRandomNotCompletedId(board: BoardFace, boards: BoardFaces) {
    /*Get random id of next lesson and skip current lesson */
    let values = _.chain(boards).pluck('id').compact().difference(_.keys(points.mapStatus)).value();
    if (values.length > 1) {
        values = _.without(values, board.id);
    }
    values = _.sample(values, 1);
    if (values.length) {
        return _.first(values);
    }
    return null;
}

export {
reset,
getState,
setCompletedStatus,
getRandomNotCompletedId
}