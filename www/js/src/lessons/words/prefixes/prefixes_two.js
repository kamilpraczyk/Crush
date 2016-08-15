"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio, constants_1.displayIds.noSpace];
var title = "Prefixes";
exports.title = title;
var info = 'Use correct prefix.';
var lessons = [
    {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "cycle",
        correct: ["re"],
        incorrect: ["dis", "pre", "un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "dict",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "lucky",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "pare",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "turn",
        correct: ["re"],
        incorrect: ["dis", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "kind",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "well",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "build",
        correct: ["re"],
        incorrect: ["dis", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "vious",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "honest",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "agree",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "allow",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "happy",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "obey",
        correct: ["dis"],
        incorrect: ["un", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "equal",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "usual",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "real",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "card",
        correct: ["dis"],
        incorrect: ["un", "re", "pre"],
        explenation: explenation //TODO make 1 more
    }
];
exports.lessons = lessons;
