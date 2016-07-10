/// <reference path="../../typings/tsd.d.ts" />

export interface Explenation {
    exp: any //react elements
}

export interface BoardFace {
    id: string,
    title: string,
    name: string,
    correct?: Array<string>,
    incorrect?: Array<string>,
    explenation?: Explenation,
    info?: string,
    placeholder?: string  //e.g Simple Present Tense
    postfix?: string //add dot sometimes when sentence is finish
}

export interface BoardFaces {
    [id: number]: BoardFace,
    length: number,
    concat: Function
}

export interface LessonFace {
    name: string,
    active: boolean,
    free: boolean,
    lessons: BoardFaces
}

export interface LessonMapFace {
    [id: string]: LessonFace
}


export interface BoardResult {
    selectedAnswer: string,
    generatedList: string[],
    text: string,
    lessonData: BoardFace,
    isCorrect: boolean
}



export class TimeOutError extends Error {

    constructor(public message?: string) {
        super(message);
        this.name = 'TimeOutError';
        this.message = message;
        this.stack = (<any>new Error()).stack;
    }
    toString() {
        return this.name + ': ' + this.message;
    }
}