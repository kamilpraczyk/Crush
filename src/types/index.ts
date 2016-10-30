/// <reference path="../../typings/tsd.d.ts" />
import dictionary = require('../utils/dictionary');

export interface Explenation {
    exp: any //react elements
}

export interface BoardFace {
    id: string,
    title: string,
    name: string,
    info: string,
    correct?: Array<string>,
    incorrect?: Array<string>,
    explenation?: Explenation,
    isHelp?: boolean,
    postfix?: string //add dot sometimes when sentence is finish
}

export interface BoardFaces {
    [uid: number]: BoardFace,
    length: number,
    concat: Function,
    map<U>(callbackfn: (value: BoardFace, index: number, array: BoardFace[]) => U, thisArg?: any): U[];
    filter(callbackfn: (value: BoardFace, index: number, array: BoardFace[]) => boolean, thisArg?: any): BoardFace[];
}


export interface LessonFace {
    uid: string,
    name: string,
    iconSet: string[],
    active: boolean,
    free: boolean,
    lessons: BoardFaces
}

export interface LessonMapFace {
    [id: string]: LessonFace,
    //?!?! map<U>(callbackfn: (value: LessonFace, index: string, array: LessonFace[]) => U, thisArg?: any): U[];
}


export interface BoardResult {
    selectedAnswer: string,
    generatedList: string[],
    text: string,
    lessonData: BoardFace,
    isCorrect: boolean,
    isSupportShowAnswer: boolean
}


export interface RootFace {
    id: string,
    name: string,
    active: boolean,
    backUrl: string
}

export interface RootFaces {
    [id: string]: RootFace;
}



export class TimeOutError extends Error {

    constructor(public message?: string) {
        super(message);
        this.name = 'TimeOutError';
        this.message = dictionary.SERVER_ERROR_TIMEOUT;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

export class InvalidServerDataError extends Error {

    constructor(public message?: string) {
        super(message);
        this.name = 'InvalidServerData';
        this.message = dictionary.SERVER_ERROR_INVALID_DATA;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

export class ServerRequestError extends Error {

    constructor(public message?: string) {
        super(message);
        this.name = 'ServerRequestError';
        this.message = dictionary.SERVER_ERROR_REQUEST;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}

