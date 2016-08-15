"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var title = 'Either and Neither';
exports.title = title;
var info = 'Find the correct form.';
var lessons = [
    {
        id: constants_1.id(common), title: title, info: info,
        name: "In this game, you " + constants_1.space + " win " + constants_1.space + " lose. It depends on you.",
        correct: ["either " + constants_1.multi + " or"],
        incorrect: ["neither " + constants_1.multi + " nor"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: constants_1.space + " " + constants_1.getNameMale() + " " + constants_1.space + " " + constants_1.getNameFemale() + " will help you with your work. They are both busy at the moment.",
        correct: ["Neither " + constants_1.multi + " nor"],
        incorrect: ["Either " + constants_1.multi + " or"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "I don't speak " + constants_1.capital.nationalityAdj.German + ". You don't " + constants_1.space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "She didn't like " + constants_1.space + " of them.",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "Doesn't he like " + constants_1.space + " of them?",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "Neither... " + constants_1.space,
        correct: ["...nor"],
        incorrect: ["...or"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "Either... " + constants_1.space,
        correct: ["...or"],
        incorrect: ["...nor"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "We " + constants_1.space + " a negative verb with 'neither'.",
        correct: ["don't use"],
        incorrect: ["use"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "We use a negative verb with " + constants_1.space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "He isn't ready to go. We aren't " + constants_1.space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "I cannot understand " + constants_1.capital.nationalityAdj.English + ". " + constants_1.space + ".",
        correct: ["I can't either"],
        incorrect: ["Neither I"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "I would like a glass of water. " + constants_1.space + ".",
        correct: ["So would I"],
        incorrect: ["So either I"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "I'm not happy. " + constants_1.space + ".",
        correct: ["Neither am I"],
        incorrect: ["so either I"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "I don't drink alcohol. " + constants_1.space + ".",
        correct: ["Neither do I"],
        incorrect: ["So do I"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "I have never won anything. " + constants_1.space + ".",
        correct: ["Neither have I"],
        incorrect: ["I didn't either"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "I hate driving. " + constants_1.space + ".",
        correct: ["so do I"],
        incorrect: ["neither I"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title, info: info,
        name: "No one knows that lyrics. " + constants_1.space + " my brother " + constants_1.space + " my mother.",
        correct: ["Neither " + constants_1.multi + " nor"],
        incorrect: ["Either " + constants_1.multi + " or"],
        explenation: explenation
    }
];
exports.lessons = lessons;
