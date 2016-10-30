/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const title = "Simple Present Tense";
const info = 'Build the correct sentence.';

const lessons = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "a big", "house"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "gives me", "a call", "every", "morning"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "enjoys", "playing", "the", "guitar"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He", "tries", "very", "hard"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", "party", "starts", "at 8", "o'clock"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "needs", "help", "right", "now"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Twice", "a week,", getNameMale(), "cleans", "the car"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Do", "you", "have", "your passport", "with you?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "is", "not", "here", "now"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Every", "twelve months", "the " + capital.places.Earth, "circles", "the " + capital.places.Sun],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He", "works", "at", capital.places.McDonalds],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["The", "next train", "leaves", "this evening", "at 6p.m."],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He", "gets up", "early", "in", "the morning"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "do", "not", "write", "a letter"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", capital.places.Sun, "rises", "in", "the east"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Does", "he", "get up", "early", "in the morning?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "sing", "a song"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "read", "lessons"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Does", "the " + capital.places.Sun, "rise", "in", "the east?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "reaches", "home", "in", "time"],
    }
] as BoardFaces

export {
title,
lessons,
}


