import { Board, BoardAnswerState } from '../types';
import _ = require('underscore');
import { upercaseFirstLetter } from '../utils/utils';
import { space, empty, multi, isId } from '../lessons/helper/constants';
import { events } from '../events';

interface QueryResult {
    generatedList: string[];
    selectedAnswer: string;
    selectedAnswerQueue: any[];
    board: Board;
    wasLastCorrect: boolean;
    isSupportShowAnswer: boolean; //null do not show it
}

function getCorrectSentence(query: QueryResult) {
    let name = query.board.data.name;
    let read = '';
    function getAnswer() {
        const spaces = isId.isNoSpace(query.board.data.id) ? '' : ' ';
        return query.selectedAnswer === empty ? ' ' : spaces + query.selectedAnswer + spaces;
    }

    if (isId.isDraw(query.board.data.id)) {
        read = name;

    } else if (isId.isOneTwoThree(query.board.data.id)) {
        if (!query.selectedAnswerQueue.length) {
            read = name;
        } else {
            read = query.selectedAnswerQueue.join(name);
            if (isCompletedAndCorrect(query)) {
                read = read + query.board.data.postfix
            }
        }

    } else if (isId.isMultiRadio(query.board.data.id)) {
        if (!query.selectedAnswerQueue.length) {
            read = '';
        } else {
            const selectedAnswerQueue = query.selectedAnswerQueue.map(item => upercaseFirstLetter(item));
            read = upercaseFirstLetter(name) + ' - ' + selectedAnswerQueue.join(' - ');
        }
    } else if (isId.isFourPictures(query.board.data.id) || isId.isFourWords(query.board.data.id)) {
        /*answer is a path to a picture or word*/
        return name;
    } else if (isId.isInradio(query.board.data.id)) {

        read = name.replace(space, getAnswer());

    } else if (isId.isRadio(query.board.data.id)) {

        if (isId.isMultiAnswer(query.board.data.id)) {
            /*answer is a multi answer, separated by 'space'*/
            const split = query.selectedAnswer.split(multi);
            read = name;
            split.map(item => {
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
    if (isId.isOneTwoThree(query.board.data.id)) {
        const length = query.selectedAnswerQueue.length;
        return _.last(query.selectedAnswerQueue) === query.board.data.correct[length - 1];
    }
    if (isId.isMultiRadio(query.board.data.id)) {
        return _.intersection(query.selectedAnswerQueue, query.board.data.correct).length === query.board.data.correct.length;
    }
    return _.contains(query.board.data.correct, query.selectedAnswer);
}

function isCompletedAndCorrect(query: QueryResult) {
    return query.board.data.correct.length === query.selectedAnswerQueue.length &&
        _.difference(query.board.data.correct, query.selectedAnswerQueue).length === 0;
}


function getGeneratedList(board: Board) {

    let generatedList: string[] = [];
    if (isId.isMultiRadio(board.data.id)) { //reduce to max 4 lines => max 3 correct and rest not correct
        const maxLines = 4;
        const missing = maxLines - board.data.correct.length;
        generatedList = [].concat(board.data.correct).concat(_.sample(board.data.incorrect, missing));
    } else {
        const incorrent = _.sample(board.data.incorrect, 3) as string[]; //generate randomized incorect 
        generatedList = [].concat(board.data.correct).concat(incorrent);
    }
    return _.sample(generatedList, generatedList.length) as string[] //randomize
}

function generateQuery(board: Board) {
    const query: QueryResult = {
        board,
        wasLastCorrect: false,
        selectedAnswer: null,
        selectedAnswerQueue: [],
        isSupportShowAnswer: board.data.isHelp ? false : null,
        generatedList: getGeneratedList(board)
    }
    return query
}

function setUserAnswer(query: QueryResult, answer: string) {
    query.selectedAnswer = answer;
    query.wasLastCorrect = false;
    let isCompletedBoard: boolean = null;

    if (isId.isOneTwoThree(query.board.data.id)) {

        const length = query.selectedAnswerQueue.length;

        if (query.board.data.correct[length] === answer) {
            query.selectedAnswerQueue.push(answer);
            query.wasLastCorrect = true;
            events.readEvent.publish(answer);
            if (isCompletedAndCorrect(query)) isCompletedBoard = true; //all answered and last one is correct?

        } else isCompletedBoard = false;

    } else if (isId.isMultiRadio(query.board.data.id)) {
        const isCorrect = _.contains(query.board.data.correct, answer) && !_.contains(query.selectedAnswerQueue, answer);

        if (isCorrect) {
            query.selectedAnswerQueue.push(answer);
            query.wasLastCorrect = true;
            events.readEvent.publish(answer);
            if (isCompletedAndCorrect(query)) isCompletedBoard = true; //all answered and last one is correct?

        } else isCompletedBoard = false;

    } else {

        if (isCorrect(query)) {
            const read = getCorrectSentence(query);
            events.readEvent.publish(read);
            query.wasLastCorrect = true;
            isCompletedBoard = true;
        } else isCompletedBoard = false;
    }

    return {
        query,
        isCompletedBoard
    }
}


class BoardAnswer {
    query: QueryResult = null;

    constructor(board: Board) { this.query = generateQuery(board); }

    toggleSupportHelp() { this.query.isSupportShowAnswer = !this.query.isSupportShowAnswer; }

    setUserAnswer(answer: string) {
        const data = setUserAnswer(this.query, answer);
        this.query = data.query;
        return data.isCompletedBoard;
    }

    getState(): BoardAnswerState {
        let name = this.query.board.data.name;
        //replace name with correct sentence
        if (isCorrect(this.query)) name = getCorrectSentence(this.query);

        return {
            selectedAnswer: this.query.selectedAnswer,
            generatedList: this.query.generatedList,
            text: name,
            board: this.query.board,
            isCorrect: this.query.wasLastCorrect,
            isSupportShowAnswer: this.query.isSupportShowAnswer
        }
    }
}


export {
    BoardAnswer,
    BoardAnswerState
}