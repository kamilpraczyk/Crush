/// <reference path="../../../typings/tsd.d.ts" />

export interface BoardFace {
    name: string,
    pic : string
    id: string,
}

export interface BoardsArrayFaces {
    [id: number]: BoardFace;
    length: number;
    concat : Function
}

