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
        name: space + " cat",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " very nice lady",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " game of golf",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " easy job",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " " + capital.people.Peruvian,
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " interesting film",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " old man",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " university",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " honest man",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " one-day conference",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " omelette for lunch",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " hour",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " game of golf",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " human emotion",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " " + capital.abbreviations.FBI + " agent",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " purple onion",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " big apple",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " orbit",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " uprising",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " buffalo",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }
] as BoardFaces

export {
title,
lessons,
icon
}


