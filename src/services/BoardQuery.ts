/// <reference path="../../typings/tsd.d.ts" />
import { BoardFace, BoardResult } from '../types';
import _ = require('underscore');
import utils = require('../utils/utils');
import { space, empty, multi, viewIds, isId } from '../lessons/helper/constants';
import { getState } from '../services';

interface QueryResult {
    generatedList: string[];
    selectedAnswer: string;
    selectedAnswerQueue: any[];
    board: BoardFace;
    wasLastCorrect: boolean;
    isSupportShowAnswer: boolean; //null do not show it
}


function getCorrectSentence(query: QueryResult) {
    let name = query.board.name;
    let read = '';
    function getAnswer() {
        const spaces = isId.isNoSpace(query.board.id) ? '' : ' ';
        return query.selectedAnswer === empty ? ' ' : spaces + query.selectedAnswer + spaces;
    }

    if (isId.isDraw(query.board.id)) {
        read = name;

    } else if (isId.isOneTwoThree(query.board.id)) {
        if (!query.selectedAnswerQueue.length) {
            read = name;
        } else {
            read = query.selectedAnswerQueue.join(name);
            if (isCompletedAndCorrect(query)) {
                read = read + query.board.postfix
            }
        }

    } else if (isId.isMultiRadio(query.board.id)) {
        if (!query.selectedAnswerQueue.length) {
            read = '';
        } else {
            const selectedAnswerQueue = query.selectedAnswerQueue.map(item => utils.upercaseFirstLetter(item));
            read = utils.upercaseFirstLetter(name) + ' - ' + selectedAnswerQueue.join(' - ');
        }
    } else if (isId.isFourPictures(query.board.id) || isId.isFourWords(query.board.id)) {
        /*answer is a path to a picture or word*/
        return name;
    } else if (isId.isInradio(query.board.id)) {

        read = name.replace(space, getAnswer());

    } else if (isId.isRadio(query.board.id)) {

        if (query.selectedAnswer.indexOf(multi) !== -1) {
            /*answer is a multi answer, separated by 'space'*/
            const split = query.selectedAnswer.split(multi);
            read = name;
            split.map((item) => {
                read = read.replace(space, item.replace(multi, '').trim());
            });
        } else if (name.indexOf(space) !== -1) {
            /*name contains partly answer, in place of 'space'*/
            read = name.replace(space, getAnswer());
        } else if (query.selectedAnswer !== empty) {
            /* selected answer is correct*/
            read = query.selectedAnswer;
        } else if (query.selectedAnswer !== empty) {
            /*answer is an empty answer - origin sentence correct*/
            read = name;
        }
    }
    read = read.replace('  ', ' ').replace(' .', '.').replace(' ,', ',');//do not replace '-'
    return read;
}


function isCorrect(query: QueryResult) {
    if (isId.isOneTwoThree(query.board.id)) {
        const length = query.selectedAnswerQueue.length;
        return _.last(query.selectedAnswerQueue) === query.board.correct[length - 1];
    }
    if (isId.isMultiRadio(query.board.id)) {
        return _.intersection(query.selectedAnswerQueue, query.board.correct).length === query.board.correct.length;
    }
    return _.contains(query.board.correct, query.selectedAnswer);
}

function isCompletedAndCorrect(query: QueryResult) {
    return query.board.correct.length === query.selectedAnswerQueue.length && _.difference(query.board.correct, query.selectedAnswerQueue).length === 0;
}


function getGeneratedList(board: BoardFace) {

    let generatedList: string[] = [];
    if (isId.isMultiRadio) { //reduce to max 4 lines => max 3 correct and rest not correct
        const maxLines = 4;
        const missing = maxLines - board.correct.length;
        generatedList = [].concat(board.correct).concat(_.sample(board.incorrect, missing));
    } else {
        const incorrent = _.sample(board.incorrect, 3) as string[]; //generate randomized incorect 
        generatedList = [].concat(board.correct).concat(incorrent);
    }
    return _.sample(generatedList, generatedList.length) as string[] //randomize
}

function generateQuery(board: BoardFace) {
    const query: QueryResult = {
        board,
        wasLastCorrect: false,
        selectedAnswer: null,
        selectedAnswerQueue: [],
        isSupportShowAnswer: board.isHelp ? false : null,
        generatedList: getGeneratedList(board)
    }
    return query
}

function setUserAnswer(query: QueryResult, answer: string) {
    const s = getState();
    query.selectedAnswer = answer;
    query.wasLastCorrect = false;

    if (isId.isOneTwoThree(query.board.id)) {

        const length = query.selectedAnswerQueue.length;

        if (query.board.correct[length] === answer) {
            query.selectedAnswerQueue.push(answer);
            query.wasLastCorrect = true;
            utils.voice.read(answer);
            //all answered and last one is correct?
            if (isCompletedAndCorrect(query)) {
                s.lessonsCatalog.board.setCompletedBoard(true);
            }
            return query;
        } else {
            s.lessonsCatalog.board.setCompletedBoard(false);
        }

    } else if (isId.isMultiRadio(query.board.id)) {
        const isCorrect = _.contains(query.board.correct, answer) && !_.contains(query.selectedAnswerQueue, answer);

        if (isCorrect) {
            query.selectedAnswerQueue.push(answer);
            console.log(query.selectedAnswerQueue);
            query.wasLastCorrect = true;
            utils.voice.read(answer);
            //all answered and last one is correct?
            if (isCompletedAndCorrect(query)) {
                s.lessonsCatalog.board.setCompletedBoard(true);
            }
            return query;
        } else {
            s.lessonsCatalog.board.setCompletedBoard(false);
        }

    } else {

        if (isCorrect(query)) {
            const read = getCorrectSentence(query);
            utils.voice.read(read);
            query.wasLastCorrect = true;
            s.lessonsCatalog.board.setCompletedBoard(true);
        } else {
            s.lessonsCatalog.board.setCompletedBoard(false);
        }

    }
    return query;
}



class BoardQuery {
    query: QueryResult = null;


    constructor(board: BoardFace) {
        this.query = generateQuery(board)
    }

    toggleSupportHelp() {
        this.query.isSupportShowAnswer = !this.query.isSupportShowAnswer;
    }
    setUserAnswer(answer: string) {
        this.query = setUserAnswer(this.query, answer);
    }

    getState() {

        let name = this.query.board.name;
        //replace name with correct sentence
        if (isCorrect(this.query)) {
            name = getCorrectSentence(this.query);
        }

        const boardResult: BoardResult = {
            selectedAnswer: this.query.selectedAnswer,
            generatedList: this.query.generatedList,
            text: name,
            lessonData: this.query.board,
            isCorrect: this.query.wasLastCorrect,
            isSupportShowAnswer: this.query.isSupportShowAnswer
        }
        return boardResult;
    }



}



export {
    BoardQuery
}