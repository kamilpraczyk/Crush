/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../../lessons/interface';
import _ = require('underscore');

let lastId = null as string;

let points = {
    success: 0,
    currentLesson: 0,
    lessonsLength: 0,
    display: '',
    isLastPage: false
}

function reset() {
    lastId = null;
    points.success = 0;
    points.currentLesson = 0;
    points.lessonsLength = 0;
    points.display = '';
    points.isLastPage = false;
}

function generate(board: BoardFace, boards: BoardFaces) {
    if (lastId !== board.id) {
        points.currentLesson = _.indexOf(boards, board) + 1;
        points.lessonsLength = boards.length;
        points.display = points.currentLesson + '/' + points.lessonsLength;
        points.isLastPage = (points.currentLesson === points.lessonsLength);
        lastId = board.id;
    }
}


function getState(board: BoardFace, boards: BoardFaces) {
    generate(board, boards);

    return {
        points: points
    };
}

export = {
    reset,
    getState
}