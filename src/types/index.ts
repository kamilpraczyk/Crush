import dictionary = require('../utils/dictionary');
import { TypeId } from '../lessons/helper/constants';

export interface Explenation {
    exp: any //react elements
}

export interface RawData {
    id: TypeId[],
    title: string,
    name: string,
    info: string,
    correct?: Array<string>,
    incorrect?: Array<string>,
    explenation?: Explenation,
    isHelp?: boolean,
    postfix?: string //add dot sometimes when sentence is finish
}


export interface Board {
    autoId: string,
    data: RawData
}

export enum FreeType {
    alwaysFree_____ = 1, //offer free lessons
    whenRegistered_ = 2, //offer free lessons for registoered people
    whenPrime______ = 3, //offer free lessons for subscribers
    inProgressBlock = 4 // lessons in progress or broken do not allow to enter
}

export interface LessonFace {
    uid: string,
    name: string,
    iconSet: string[],
    active: boolean,
    freeType: FreeType,
    numberFinished: number,
    boards: Board[]
}

export interface BoardAnswerState {
    selectedAnswer: string,
    generatedList: string[],
    text: string,
    board: Board,
    isCorrect: boolean,
    isSupportShowAnswer: boolean
}

export interface Speech {
    lang: string,
    name: string
}

export enum RootType {
    close = 1,
    lessons,
    explenation,
    settings,
    user,
}

export interface RootFace {
    id: RootType,
    name: string,
    active: boolean,
    backUrl: string,
    scroll: number
}


export class TimeOutError extends Error {

    constructor(public message = dictionary.SERVER_ERROR_TIMEOUT) {
        super(message);
        this.name = 'TimeOutError';
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

export class InvalidServerDataError extends Error {

    constructor(public message = dictionary.SERVER_ERROR_INVALID_DATA) {
        super();
        this.name = 'InvalidServerData';
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

export class ServerRequestError extends Error {

    constructor(public message = dictionary.SERVER_ERROR_REQUEST) {
        super();
        this.name = 'ServerRequestError';
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

