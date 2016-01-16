/// <reference path="../../../typings/tsd.d.ts" />

export interface LessonFace {
    name: string,
    disable: boolean
}

export interface LessonMapFace {
    [id: string]: LessonFace;
}
