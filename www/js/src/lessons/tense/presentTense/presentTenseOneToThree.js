"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var separator = " ";
var postfix = ".";
var common = [constants_1.viewIds.oneTwoThree];
var placeholder = "Simple Present Tense";
var title = "Simple Present Tense";
exports.title = title;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "a big", "house"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: [constants_1.getNameMale(), "gives me", "a call", "every", "morning"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "enjoys", "playing", "the", "guitar"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "tries", "very", "hard"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", "party", "starts", "at 8", "o'clock"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "needs", "help", "right", "now"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Twice", "a week,", constants_1.getNameMale(), "cleans", "the car"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Do", "you", "have", "your passport", "with you?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "not", "here", "now"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Every", "twelve months", "the " + constants_1.capital.places.Earth, "circles", "the " + constants_1.capital.places.Sun],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "works", "at", constants_1.capital.places.McDonalds],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["The", "next train", "leaves", "this evening", "at 6p.m."],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "gets up", "early", "in", "the morning"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "do", "not", "write", "a letter"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", constants_1.capital.places.Sun, "rises", "in", "the east"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "he", "get up", "early", "in the morning?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "sing", "a song"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "read", "lessons"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "the " + constants_1.capital.places.Sun, "rise", "in", "the east?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: [constants_1.getNameMale(), "reaches", "home", "in", "time"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
