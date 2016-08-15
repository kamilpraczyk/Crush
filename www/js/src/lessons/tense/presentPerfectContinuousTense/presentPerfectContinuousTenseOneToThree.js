"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var separator = " ";
var postfix = ".";
var common = [constants_1.viewIds.oneTwoThree];
var placeholder = "Present Perfect Continuous Tense";
var title = "Present Perfect Continuous Tense";
exports.title = title;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["They", "have", "been", "playing cricket", "since 5p.m."],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have", "been", "talking", "for the last hour"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["We", "have", "been", "waiting here", "for over two hours!"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: [constants_1.getNameMale(), "has", "not ", "been practicing", "his " + constants_1.capital.nationalityNoun.English],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: [constants_1.getNameFemale(), "has", "been feeling", "a little", "depressed"],
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The teacher", "has", "been", "teaching", constants_1.capital.nationalityNoun.English],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Recently,", "I have", "been", "feeling", "really tired"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have", "you", "been", "exercising", "lately?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She has", "been waiting", "for", "you all", "day"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Recently, " + constants_1.getNameMale(), "has", "been", "doing", "the work"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Recently, the work", "has", "been", "done", "by " + constants_1.getNameMale()],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "been", "listening", "to the radio"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have", "been", "going", "to school"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "been", "swimming"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["It", "has", "been", "living"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "been", "living"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have", "we", "been", "living", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["What have", "you", "been", "doing", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "not", "been", "running"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Has", "she", "been", "reading", "?"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
