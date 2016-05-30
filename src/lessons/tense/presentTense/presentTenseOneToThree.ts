/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Simple Present Tense";
const title = "Simple Present Tense";
const icon = icons.oneTwoThree;
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "a big", "house"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: [capital.names.Peter, "gives me", "a call", "every", "morning"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "enjoys", "playing", "the", "guitar"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "tries", "very", "hard"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", "party", "starts", "at 8", "o'clock"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "needs", "help", "right", "now"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Twice", "a week,", capital.names.Tom, "cleans", "the car"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Do", "you", "have", "your passport", "with you?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "not", "here", "now"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Every", "twelve months", "the " + capital.places.Earth, "circles", "the " + capital.places.Sun],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "works", "at", capital.places.McDonalds],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["The", "next train", "leaves", "this evening", "at 6p.m."],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "gets up", "early", "in", "the morning"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "do", "not", "write", "a letter"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", capital.places.Sun, "rises", "in", "the east"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "he", "get up", "early", "in the morning?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "sing", "a song"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "read", "lessons"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "the " + capital.places.Sun, "rise", "in", "the east?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: [capital.names.Mike, "reaches", "home", "in", "time"],
        explenation: explenation,
        placeholder: placeholder
    }

] as BoardFaces

export {
title,
lessons,
icon
}


