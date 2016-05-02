/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../../lessons/interface';
import _ = require('underscore');
import {space, empty}  from '../../lessons/helper/constants';
import utils = require('../../utils/utils');

let generatedList = [] as string[];
let lastId = null as string;
let _selectedAnswer = null as string;
let _board: BoardFace = null;


function generate(board: BoardFace) {
    let id = board.id;
    if (lastId !== id) {
        _selectedAnswer = null;
        const incorrent = _.sample(board.incorrect, 3) as string[];
        _board = board;
        generatedList = [].concat(board.correct).concat(incorrent) as string[];
        generatedList = _.sample(generatedList, generatedList.length) as string[];
        lastId = id;
    }
}


function reset() {
    _selectedAnswer = null;
}

function setPressedAnswer(answer: string) {
    _selectedAnswer = answer
    const isCorrect = _.contains(_board.correct, _selectedAnswer);
    if (isCorrect) {
        let name = _board.name;
        let read = '';
        if (_selectedAnswer.indexOf('.png') !== -1 || _selectedAnswer.indexOf('.jpg') !== -1) { //if is a picture
            read = name;
        } else if (name.indexOf(space) !== -1) { //if contains partly answer
            const replacement = _selectedAnswer === empty ? ' ' : ' ' + _selectedAnswer + ' ';
            read = name.replace(space, replacement);
        } else if (_selectedAnswer !== empty) { // if is not an empty answer
            read = _selectedAnswer;
        } else if (_selectedAnswer !== empty) {// is empty answer
            read = name;
        }
        utils.voice.read(read);
    }
}


function getState(board: BoardFace) {
    generate(board);

    const isCorrect = _.contains(board.correct, _selectedAnswer);
    let name = board.name;
    //replace name with correct sentence
    if (isCorrect) {
        const replacement = _selectedAnswer === empty ? ' ' : ' ' + _selectedAnswer + ' ';
        name = name.replace(space, replacement).replace('  ', ' ').replace(' .', '.').replace(' ,', ',');
    }
    console.log('name', name)

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