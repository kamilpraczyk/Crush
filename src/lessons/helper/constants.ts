/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');


export const space = '___';
export const multi = '−';
export const empty = '_';

export const viewIds = {
    fourPictures: 'f',
    fourWords: 'w',
    oneTwoThree: 'o',
    radio: 'r',
    draw: 'd',
}

export const displayIds = {
    digitalTime: 'e',
    analogTime: 'c'
}

export const icons = {
    draw: 'moon-quill',
    fourPictures: 'moon-images',
    fourWords : 'moon-table',
    radio: 'moon-insert-template',
    oneTwoThree: 'moon-bubble'
}
export const isId = {
    isOneTwoThree: function (id: string) {
        return id.indexOf(viewIds.oneTwoThree) !== -1;
    },
    isRadio: function (id: string) {
        return id.indexOf(viewIds.radio) !== -1;
    },
    isDraw: function (id: string) {
        return id.indexOf(viewIds.draw) !== -1;
    },
    isFourPictures: function (id: string) {
        return id.indexOf(viewIds.fourPictures) !== -1;
    },
    isFourWords: function (id: string) {
        return id.indexOf(viewIds.fourWords) !== -1;
    },
    isDigitalTime: function (id: string) {
        return id.indexOf(displayIds.digitalTime) !== -1;
    },
    isAnalogTime: function (id: string) {
        return id.indexOf(displayIds.analogTime) !== -1;
    },

}


export function id(a: string[] = [], b: string[] = [], c: string[] = []) {
    return _.uniqueId('_' + a.join('_') + b.join('_') + c.join('_'));
}

/* get rest props of simple object */
export function getRest(group: any, exclude: any): string[] {
    return _.chain(group).values().without(exclude).value();
}


//TODO ESC - will toogle menu,
// TODO - left-right will navigate lessons
//TODO - buttons in radio
//TODO - draw -IE11 - fix layout 
//TODO - IE11 settings menu fix layout
//TODO - IE11 grammar fix layout
// lessons 4 pictures with time clock
//TODO onetwothree - first box with word set to lower case only if second letter is lowercase (respect like 'TV' but She-> show)


// make lessons - tences vs each other
//make lessons - sentence to =>question sentence


//make tests check . ? ! (end of sentences and postfix if match)
