/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');


export const space = '___';
export const multi = '−';
export const empty = '_';


export const viewIds = {
    fourPictures: 'f',
    oneTwoThree: 'o',
    radio: 'r',
    draw: 'd',
}

export function id(a: string[] = [], b: string[] = [], c: string[] = []) {
    return _.uniqueId('_' + a.join('_') + b.join('_') + c.join('_'));
}

/* get rest props of simple object */
export function getRest(group: any, exclude: any): string[] {
    return _.chain(group).values().without(exclude).value();
}



