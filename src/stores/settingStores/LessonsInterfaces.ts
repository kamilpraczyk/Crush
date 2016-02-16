/// <reference path="../../../typings/tsd.d.ts" />

export interface LessonFace {
    name: string,
    disable: boolean,
    active : boolean,
    amount? : number,
    hide? : boolean,
    lessons : Array<any>
}

export interface LessonMapFace {
    [id: string]: LessonFace;
}
