/// <reference path="../../../typings/tsd.d.ts" />

export interface BoardFace {
    id: string,
    name: string,
    pic: string
}

export interface BoardFaces {
    [id: number]: BoardFace;
    length: number;
    concat: Function
}


export interface LessonFace {
    name: string,
    disable: boolean,
    active: boolean,
    amount?: number,
    hide?: boolean,
    lessons: BoardFaces
}

export interface LessonMapFace {
    [id: string]: LessonFace;
}
