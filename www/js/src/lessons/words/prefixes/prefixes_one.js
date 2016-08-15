"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.inradio, constants_1.displayIds.noSpace];
var title = "Prefixes";
exports.title = title;
var info = 'Make the word mean the opposite.';
var lessons = [
    {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "able",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "popular",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "appear",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "own",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "seen",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "usual",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "qualify",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "obey",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "tidy",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        info: info,
        name: constants_1.space + "do",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    },
];
exports.lessons = lessons;
