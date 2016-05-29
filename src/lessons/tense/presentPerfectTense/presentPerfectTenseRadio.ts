/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require("underscore");
const common = [viewIds.radio];
const placeholder = "Present Perfect Tense";
const title = "Present Perfect Tense";
const icon = icons.radio;
const lessons = [
    {
        id: id(common), title: title,
        name: "He has " + space + " a letter to María.",
        correct: ["written"],
        incorrect: ["write"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I " + space + " studied.",
        correct: ["have"],
        incorrect: ["has"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "He " + space + " eaten.",
        correct: ["has"],
        incorrect: ["have"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "John and Maria " + space + " to Spain.",
        correct: ["have traveled"],
        incorrect: ["had traveled", "traveled"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I " + space + " in Madrid for one week.",
        correct: ["have been"],
        incorrect: ["been", "was"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Chris " + space + " my friend for " + _.sample[2, 4, 6, 8, 9, 12] + " years.",
        correct: ["has been"],
        incorrect: ["had been", "was"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Peter has " + space + " a lot of money to his sister.",
        correct: ["not given"],
        incorrect: ["not give", "give"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I have " + space + " my teeth.",
        correct: ["brushed"],
        incorrect: ["brush"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: space + " the women left yet?",
        correct: ["Have"],
        incorrect: ["Had", "Does"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: space + " you ever tried chocolate?",
        correct: ["Haven't"],
        incorrect: ["Hasn't"],
        explenation: explenation,
        placeholder: placeholder
    }
] as BoardFaces

export {
title,
lessons,
icon
}


