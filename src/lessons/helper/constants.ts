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
    fourWords: 'moon-table',
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
//TODO - make something with minimalized menu button - is on the way always
// TODO - left-right will navigate lessons
//TODO - buttons in radio
//TODO - draw -IE11 - fix layout 
//TODO - IE11 settings menu fix layout
//TODO - IE11 grammar fix layout
// lessons 4 pictures with time clock
//TODO onetwothree - first box with word set to lower case only if second letter is lowercase (respect like 'TV' but She-> show)
//TODO - milestone - make history about acheived lessons (encurage to carry on and finish couses - or pay for more)

// make lessons - tences vs each other
//make lessons - sentence to =>question sentence


//make tests check . ? ! (end of sentences and postfix if match)
// when multi are separated in radio 'xxx'-'xxx' make sure there is space between words if is not defined
//check space + rest of sentence have space inside 'xx '+ space +' xxx' is correct

/*
ACTIVE / PASSIVE
Once a week, Tom cleans the car. Active
Once a week, the car is cleaned by Tom. Passive

*/

/*
        VS
Present simple:	I work
Present continuous:	I am working
Present perfect:	I have worked
Present perfect continuous:	I have been working
*/

/* The present progressive tense
//http://www.grammar-quizzes.com/presten1.html  
 */