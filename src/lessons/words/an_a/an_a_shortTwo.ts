/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.inradio];
const title = "'An' or 'a'?";
const icon = icons.inradio;

const lessons = [
    {
        id: id(common), title: title,
        name: space + " honest error",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " union",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " unicorn",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " one-legged man",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " egg",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " used napkin",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " policeman",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " movie",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " idiot",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " dog",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " horse",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " orphan",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " broken egg",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " unusual problem",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " teacher",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " practicing " + capital.people.Buddhist,
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " bottle of water",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " new glass of milk",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " eagle",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " invitation",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }
] as BoardFaces

export {
title,
lessons,
icon
}


