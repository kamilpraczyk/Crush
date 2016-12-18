import { RawData } from '../src/types';
import { init, getState } from '../src/services';
import _ = require("underscore");

const window: any = {
    document: {
        cookie: ''
    }
}

function goThrough(test: (data: RawData) => void) {
    return init(window).then(() => {
        return getState().lessonsCatalog.sortedLessons.map(lessons => lessons.boards.map(board => test(board.data)));
    })
}

function mock() { }

export {
    goThrough,
    mock
}
