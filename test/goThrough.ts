/// <reference path="../typings/tsd.d.ts" />
import { RawData } from '../src/types';
import { init, clear, getState } from '../src/services';
import _ = require("underscore");


function goThrough(test: (data: RawData) => void) {
    clear();
    return init().then(() => {
        return getState().lessonsCatalog.sortedLessons.map(lessons => lessons.boards.map(board => test(board.data)));
    })
}

function mock() { }

export {
    goThrough,
    mock
}
