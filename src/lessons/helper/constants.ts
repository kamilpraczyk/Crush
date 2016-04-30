/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');


export const space = '___';
export const empty = '_';

export const ids = {
    fourPictures: 'f',
    radio: 'r',
    draw: 'd',


    center: 'c',
}
export function id(a: string[] = [], b: string[] = [], c: string[] = []) {
    return _.uniqueId('_' + a.join('_') + b.join('_') + c.join('_'));
}

/* get rest props of simple object */
export function getRest(group: any, exclude: any): string[] {
    return _.chain(group).values().without(exclude).value();
}



