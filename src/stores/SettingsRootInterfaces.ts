/// <reference path="../../typings/tsd.d.ts" />

export interface RootFace {
    name?: string,
    active: boolean,
    disable: boolean,
    icon? : string
}

export interface RootFaces {
    [id: string]: RootFace;
}

