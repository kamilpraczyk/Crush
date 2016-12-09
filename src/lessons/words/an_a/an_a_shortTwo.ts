/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.inradio];
const title = "'An' or 'a'?";
const info = 'Choose the correct answer.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: space + " honest error",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " union",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " unicorn",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " one-legged man",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " egg",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " used napkin",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " policeman",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " movie",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " idiot",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " dog",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " horse",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " orphan",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " broken egg",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " unusual problem",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " teacher",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " practicing " + capital.people.Buddhist,
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " bottle of water",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " new glass of milk",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " eagle",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " invitation",
        correct: ["an"],
        incorrect: ["a"],
    }
] 

export {
title,
lessons,
}


