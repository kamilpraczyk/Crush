/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../../lessons/interface';
import _ = require('underscore');
import {space, empty, multi}  from '../../lessons/helper/constants';
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

function getCorrectSentence() {
    let name = _board.name;
    let read = '';
    if (_selectedAnswer.indexOf('.png') !== -1 || _selectedAnswer.indexOf('.jpg') !== -1) {
        /*answer is a path to a picture*/
        read = name;
    } else if (_selectedAnswer.indexOf(multi) !== -1) {
        /*answer is a multi answer, separated by 'space'*/
        const split = _selectedAnswer.split(multi);
        read = name;
        split.map((item) => {
            read = read.replace(space, item.replace(multi, '').trim());
        });
    } else if (name.indexOf(space) !== -1) {
        /*name contains partly answer, in place of 'space'*/
        const replacement = _selectedAnswer === empty ? ' ' : ' ' + _selectedAnswer + ' ';
        read = name.replace(space, replacement);
    } else if (_selectedAnswer !== empty) {
        /* selected answer is correct*/
        read = _selectedAnswer;
    } else if (_selectedAnswer !== empty) {
        /*answer is an empty answer - origin sentence correct*/
        read = name;
    }

    read = read.replace('  ', ' ').replace(' .', '.').replace(' ,', ',');
    return read;
}

function isCorrect() {
    return _.contains(_board.correct, _selectedAnswer);
}

function setPressedAnswer(answer: string) {
    _selectedAnswer = answer;
    if (isCorrect()) {
        const read = getCorrectSentence();
        utils.voice.read(read);
    }
}


function getState(board: BoardFace) {
    generate(board);

    let name = board.name;
    //replace name with correct sentence
    if (isCorrect()) {
        name = getCorrectSentence();
    }
    console.log('name', name)

    return {
        selectedAnswer: _selectedAnswer,
        generatedList: generatedList,
        text: name,
        lessonData: board,
        isCorrect: isCorrect()
    }
}

export = {
    reset,
    setPressedAnswer,
    getState
}