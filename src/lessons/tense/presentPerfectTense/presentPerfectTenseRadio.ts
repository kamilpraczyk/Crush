/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital, getNameFemale, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require("underscore");
const common = [viewIds.radio];
const title = "Present Perfect Tense";
const info = 'Build the correct sentence.';

const lessons = [
    {
        id: id(common), title, explenation, info,
        name: "He has " + space + " a letter to " + getNameFemale() + ".",
        correct: ["written"],
        incorrect: ["write"],
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " studied.",
        correct: ["have"],
        incorrect: ["has"],
    }, {
        id: id(common), title, explenation, info,
        name: "He " + space + " eaten.",
        correct: ["has"],
        incorrect: ["have"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameMale() + " and " + getNameFemale() + " " + space + " to " + capital.countries.Spain + ".",
        correct: ["have traveled"],
        incorrect: ["had traveled", "traveled"],
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " in " + capital.places.Madrid + " for one week.",
        correct: ["have been"],
        incorrect: ["been", "was"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameMale() + " " + space + " my friend for " + _.sample[2, 4, 6, 8, 9, 12] + " years.",
        correct: ["has been"],
        incorrect: ["had been", "was"],
    }, {
        id: id(common), title, explenation, info,
        name: "Peter has " + space + " a lot of money to his sister.",
        correct: ["not given"],
        incorrect: ["not give", "give"],
    }, {
        id: id(common), title, explenation, info,
        name: "I have " + space + " my teeth.",
        correct: ["brushed"],
        incorrect: ["brush"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " the women left yet?",
        correct: ["Have"],
        incorrect: ["Had", "Does"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " you ever tried chocolate?",
        correct: ["Haven't"],
        incorrect: ["Hasn't"],
    }
] as BoardFaces

export {
title,
lessons,
}


