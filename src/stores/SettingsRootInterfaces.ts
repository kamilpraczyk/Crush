/// <reference path="../../typings/tsd.d.ts" />

export interface RootFace {
    id: string,
    name: string,
    active: boolean,
    disable: boolean,
    backUrl: string
}

export interface RootFaces {
    [id: string]: RootFace;
}

