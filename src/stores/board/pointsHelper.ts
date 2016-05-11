/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../../lessons/interface';
import _ = require('underscore');


let points = {
    success: 0,
    currentLesson: 0,
    lessonsLength: 0,
    display: '',
    isLastPage: false,
    mapStatus: {},
    isCurrentSuccess: false,
    isCurrentFail: false
}


function reset() {
    points.success = 0;
    points.currentLesson = 0;
    points.lessonsLength = 0;
    points.display = '';
    points.isLastPage = false;
    points.mapStatus = {};
    points.isCurrentSuccess = false;
    points.isCurrentFail = false;
}

function generate(board: BoardFace, boards: BoardFaces) {
    points.currentLesson = _.indexOf(boards, board) + 1;
    points.lessonsLength = boards.length;
    points.isLastPage = (points.currentLesson === points.lessonsLength);
    points.isCurrentSuccess = points.mapStatus[board.id];
    points.isCurrentFail = points.isCurrentSuccess === false ? true : false;
    points.display = points.currentLesson + '/' + points.lessonsLength;
}

function setCompletedStatus(board: BoardFace, isSuccess: boolean) {
    if (!_.isBoolean(points.mapStatus[board.id])) {
        points.mapStatus[board.id] = isSuccess;
    }
}

function isCompletedStatus(board: BoardFace) {
    return points.mapStatus[board.id];
}

function getState(board: BoardFace, boards: BoardFaces) {
    generate(board, boards);

    return {
        points: points
    };
}

export = {
    reset,
    getState,
    setCompletedStatus,
    isCompletedStatus,
}