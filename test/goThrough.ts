/// <reference path="../typings/tsd.d.ts" />
import {BoardFace} from '../src/lessons/interface';
import modelLessons = require('../src/lessons/lessons');
const {lessons, activeStartup} = modelLessons;
import _ = require("underscore");


function goThrough(test: (board: BoardFace) => void) {
    _.mapObject(lessons, (boards) => {
        _.each(boards.lessons, (board) => {
            test(board);
        });
    });
}


export {
goThrough
} 