/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../../lessons/interface';
import _ = require('underscore');
import {space, empty}  from '../../lessons/helper/constants';

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
    
    
   // utils.voice.read('Hello');
}


function getState(board: BoardFace) {
    generate(board);

    const isCorrect = _.contains(board.correct, _selectedAnswer);
    let name = board.name;
    //replace name with correct sentence
    if (isCorrect) {
        const replacement = _selectedAnswer === empty ? '' : _selectedAnswer;
        name = name.replace(space, replacement);
    }

    return {
        selectedAnswer: _selectedAnswer,
        generatedList: generatedList,
        text: name,
        lessonData: board,
        isCorrect: isCorrect
    }
}

export = {
    reset,
    setPressedAnswer,
    getState
}