/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../lesson/interface';


function getState(board: BoardFace) {
    return {
        lessonData: board
    }
}

export = {
    getState
}