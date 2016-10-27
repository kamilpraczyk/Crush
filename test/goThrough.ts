/// <reference path="../typings/tsd.d.ts" />
import {BoardFace} from '../src/types';
import {init, clear, getState} from '../src/services';
import _ = require("underscore");


export function goThrough(test: (board: BoardFace) => void) {
    clear();
    return init().then(() => {
        _.mapObject(getState().lessonsCatalog.getMapLessons(), boards => {
            _.each(boards.lessons, (board) => {
                test(board);
            });
        });
    })
}
