/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardsArrayFaces} from './BoardInterfaces';
import _ = require('underscore');

let quatroPictures = [] as any;
let lastIdQuatro = null as string;
let _quatroPressedPictureId = null as string;

function generateQuatroPictures(board: BoardFace, boards: BoardsArrayFaces) {
    let id = board.id;
    if (lastIdQuatro !== id) {
        _quatroPressedPictureId = null;

        quatroPictures = _.sample(boards, 4);
        let index = _.indexOf(quatroPictures, board);
        if (index === -1) {
            quatroPictures[_.random(0, quatroPictures.length - 1)] = _.clone(board);
        }
        lastIdQuatro = id;
    }

}

function reset() {
    _quatroPressedPictureId = null;
}

function setPressedPictureId(id: string) {
    _quatroPressedPictureId = id;
}


function getState(board: BoardFace, boards: BoardsArrayFaces) {
    console.log('board',board);
    generateQuatroPictures(board, boards);
    return {
        quatroPressedPictureId: _quatroPressedPictureId,
        quatroPictures: quatroPictures,
        text: board.name,
        lessonData: board
    }
}

export = {
    reset,
    setPressedPictureId,
    getState
}