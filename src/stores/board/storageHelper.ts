/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFace, BoardFaces} from '../../lessons/interface';
import _ = require('underscore');
import {space, empty, multi, viewIds}  from '../../lessons/helper/constants';
import utils = require('../../utils/utils');

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
    if (_board.id.indexOf(viewIds.oneTwoThree) !== -1) {
        /* answer is a queue answer*/
        read = name;
        console.log('name', name);
        _selectedAnswerQueue.map((item) => {
            read = read.replace(space, item);
        });
    } else if (_board.id.indexOf(viewIds.fourPictures) !== -1) {
        /*answer is a path to a picture*/
        return name;
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

    read = read.replace('  ', ' ').replace(' .', '.').replace(' ,', ',');//do not replace '-'
    return read;
}

function isCorrect() {

    if (_board.id.indexOf(viewIds.oneTwoThree) !== -1) {
        const length = _selectedAnswerQueue.length;
        return _.last(_selectedAnswerQueue) === _board.correct[length - 1];
    }
    return _.contains(_board.correct, _selectedAnswer);
}

function isCorrectForUser() {
    if (_board.id.indexOf(viewIds.oneTwoThree) !== -1) {

    }
    return isCorrect();
}

function setPressedAnswer(answer: string) {
    _selectedAnswer = answer;
    wasLastCorrect = false;
    if (isCorrect()) {
        const read = getCorrectSentence();
        utils.voice.read(read);
        wasLastCorrect = true;
    }
}

function setPressedAnswerOnQueue(answer: string) {
    _selectedAnswer = answer;
    const length = _selectedAnswerQueue.length;

    wasLastCorrect = false;
    if (_board.correct[length] === answer) {
        console.log('correct', length, answer);
        _selectedAnswerQueue.push(answer);
        wasLastCorrect = true;
        utils.voice.read(answer);
    }
}


function getState(board: BoardFace) {
    generate(board);

    let name = board.name;
    //replace name with correct sentence
    if (isCorrect()) {
        name = getCorrectSentence();
    }
    console.log('name', name);
    console.log('generatedList', generatedList);

    return {
        selectedAnswer: _selectedAnswer,
        generatedList: generatedList,
        text: name,
        lessonData: board,
        isCorrect: wasLastCorrect
    }
}

export = {
    reset,
    setPressedAnswer,
    setPressedAnswerOnQueue,
    getState
}