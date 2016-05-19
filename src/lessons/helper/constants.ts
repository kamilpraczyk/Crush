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

export const icons = {
    draw: 'moon-quill',
    fourPictures: 'moon-images',
    radio: 'moon-insert-template',
    oneTwoThree: 'moon-bubble'
}

export function id(a: string[] = [], b: string[] = [], c: string[] = []) {
    return _.uniqueId('_' + a.join('_') + b.join('_') + c.join('_'));
}

/* get rest props of simple object */
export function getRest(group: any, exclude: any): string[] {
    return _.chain(group).values().without(exclude).value();
}

//TODO button skip > until finish of lesson 
//TODO ESC - will toogle menu,
// TODO - left right will navigate lessons
//TODO - buttons in radio  
// lessons 4 pictures with time clock


