import {RawData} from '../../../types';
import {space, TypeId, id, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.inradio];
const title = "'An' or 'a'?";
const info = 'Choose the correct answer.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: space + " excellent teacher",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " really beautiful eagle",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " hour for lunch",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " unit",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " european",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " itchy sweater",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " ugly duck",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " " + capital.people.Englishman,
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " dancer",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " engineer",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " " + capital.people.Catholic,
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " island",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " awkward",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " bird",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " shoe",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " old man?",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " cake",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " accident",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " pencil",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " enormous",
        correct: ["an"],
        incorrect: ["a"],
    }
] 

export {
title,
lessons,
}


