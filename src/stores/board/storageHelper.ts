/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces, BoardResult} from '../../lessons/interface';
import _ = require('underscore');
import {space, empty, multi, viewIds}  from '../../lessons/helper/constants';
import utils = require('../../utils/utils');
import pointsHelper = require('./pointsHelper');

let generatedList: string[] = [];
let lastId: string = null;
let _selectedAnswer: string = null;
let _selectedAnswerQueue: any[] = [];
let _board: BoardFace = null;
let wasLastCorrect: boolean = null;


function generate(board: BoardFace) {
    let id = board.id;
    if (lastId !== id) {
        _selectedAnswer = null;
        _selectedAnswerQueue = [];
        wasLastCorrect = false;
        const incorrent = _.sample(board.incorrect, 3) as string[];
        _board = board;
        generatedList = [].concat(board.correct).concat(incorrent) as string[];
        generatedList = _.sample(generatedList, generatedList.length) as string[];
        lastId = id;
    }
}


function reset() {
    _selectedAnswer = null;
    wasLastCorrect = false;
    _selectedAnswerQueue = [];
}

function getCorrectSentence() {
    let name = _board.name;
    let read = '';
    if (isDraw()) {
        read = name;

    } else if (isOneTwoThree()) {
        //put placeholder if no answer jet 
        if (!_selectedAnswerQueue.length) {
            read = _board.placeholder;  //e.g Simple Present Tense
        } else {
            read = _selectedAnswerQueue.join(name);
            if (isCompletedAndCorrect()) { //finish sentence with dot
                read = read + '.'
            }
        }

    } else if (isFourPictures()) {
        /*answer is a path to a picture*/
        return name;
    } else if (isRadio()) {

        if (_selectedAnswer.indexOf(multi) !== -1) {
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
    }
    read = read.replace('  ', ' ').replace(' .', '.').replace(' ,', ',');//do not replace '-'
    return read;
}

function isCorrect() {
    if (isOneTwoThree()) {
        const length = _selectedAnswerQueue.length;
        return _.last(_selectedAnswerQueue) === _board.correct[length - 1];
    }
    return _.contains(_board.correct, _selectedAnswer);
}

function isCompletedAndCorrect() {
    return _board.correct.length === _selectedAnswerQueue.length && _.difference(_board.correct, _selectedAnswerQueue).length === 0;
}

function isOneTwoThree() {
    return _board.id.indexOf(viewIds.oneTwoThree) !== -1;
}
function isRadio() {
    return _board.id.indexOf(viewIds.radio) !== -1;
}
function isDraw() {
    return _board.id.indexOf(viewIds.draw) !== -1;
}
function isFourPictures() {
    return _board.id.indexOf(viewIds.fourPictures) !== -1;
}



function setPressedAnswer(answer: string) {

    _selectedAnswer = answer;
    wasLastCorrect = false;

    if (isOneTwoThree()) {

        const length = _selectedAnswerQueue.length;

        if (_board.correct[length] === answer) {
            _selectedAnswerQueue.push(answer);
            wasLastCorrect = true;
            utils.voice.read(answer);
            //all answered and last one is correct?
            if (isCompletedAndCorrect()) {
                pointsHelper.setCompletedStatus(_board, true);
            }
            return;
        } else {
            pointsHelper.setCompletedStatus(_board, false);
        }

    } else {

        if (isCorrect()) {
            const read = getCorrectSentence();
            utils.voice.read(read);
            wasLastCorrect = true;
            pointsHelper.setCompletedStatus(_board, true);
        } else {
            pointsHelper.setCompletedStatus(_board, false);
        }

    }


}



function getState(board: BoardFace) {
    generate(board);

    let name = board.name;
    //replace name with correct sentence
    if (isCorrect()) {
        name = getCorrectSentence();
    }

    const boardResult: BoardResult = {
        selectedAnswer: _selectedAnswer,
        generatedList: generatedList,
        text: name,
        lessonData: board,
        isCorrect: wasLastCorrect
    }
    return boardResult;
}

export = {
    reset,
    setPressedAnswer,
    getState
}