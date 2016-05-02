/// <reference path="../../typings/tsd.d.ts" />

export interface Explenation {
    exp: any
}

export interface BoardFace {
    id: string,
    name: string,
    correct?: Array<string>,
    incorrect?: Array<string>,
    explenation?: Explenation,
    info?: string
}

export interface BoardFaces {
    [id: number]: BoardFace,
    length: number,
    concat: Function
}

export interface LessonFace {
    settings: string,
    name: string,
    active: boolean,
    bought: boolean,
    lessons: BoardFaces
}

export interface LessonMapFace {
    [id: string]: LessonFace
}


