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
        name: space + " excellent teacher",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " really beautiful eagle",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " hour for lunch",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " unit",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " european",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " itchy sweater",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " ugly duck",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " " + capital.people.Englishman,
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " dancer",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " engineer",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " " + capital.people.Catholic,
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " island",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " awkward",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " bird",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " shoe",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " old man?",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " cake",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " accident",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " pencil",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " enormous",
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


