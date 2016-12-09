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
        name: space + " cat",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " very nice lady",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " game of golf",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " easy job",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " " + capital.people.Peruvian,
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " interesting film",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " old man",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " university",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " honest man",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " one-day conference",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " omelette for lunch",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " hour",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " game of golf",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " human emotion",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " " + capital.abbreviations.FBI + " agent",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " purple onion",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " big apple",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " orbit",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " uprising",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " buffalo",
        correct: ["a"],
        incorrect: ["an"],
    }
] 

export {
title,
lessons,
}


