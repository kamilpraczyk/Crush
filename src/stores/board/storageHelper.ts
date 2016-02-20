/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../lesson/interface';
import _ = require('underscore');

let generatedList = [] as string[];
let lastId = null as string;
let _selectedAnswer = null as string;


function generate(board: BoardFace) {
    let id = board.id;
    if (lastId !== id) {
        _selectedAnswer = null;
        const incorrent = _.sample(board.incorrect, 3) as string[];
        generatedList = [].concat(board.correct).concat(incorrent) as string[];
        generatedList = _.sample(generatedList, generatedList.length) as string[];
        lastId = id;
    }
}


function reset() {
    _selectedAnswer = null;
}

function setPressedAnswer(answer: string) {
    _selectedAnswer = answer;
}


function getState(board: BoardFace) {
    generate(board);
    return {
        selectedAnswer: _selectedAnswer,
        generatedList: generatedList,
        text: board.name,
        lessonData: board
    }
}

export = {
    reset,
    setPressedAnswer,
    getState
}