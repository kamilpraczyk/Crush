/// <reference path="../typings/tsd.d.ts" />
import {BoardFace} from '../src/types';
import {init, clear, getState} from '../src/services';
import _ = require("underscore");


function goThrough(test: (board: BoardFace) => void) {
    clear();
    return init().then(() => {
        getState().lessonsCatalog.getSortedLessons().map(boards => {
            boards.lessons.map(board => {
                test(board);
            });
        });
    })
}

function mock() {
    
}
export {
goThrough,
mock
}
