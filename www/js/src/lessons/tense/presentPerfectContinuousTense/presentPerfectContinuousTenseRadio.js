"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var separator = " ";
var common = [constants_1.viewIds.radio];
var placeholder = "Present Perfect Continuous Tense";
var title = "Present Perfect Continuous Tense";
exports.title = title;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "She's " + constants_1.space + " to her regularly for a couple of years.",
        correct: ["been writing"],
        incorrect: ["writing", "write"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I've " + constants_1.space + " " + constants_1.capital.nationalityAdj.Polish + " for 20 years and I still don't know very much.",
        correct: ["been learning"],
        incorrect: ["learning", "not been learning"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "You look tired. " + constants_1.space + " been sleeping properly?",
        correct: ["Have you"],
        incorrect: ["Did you", "Were you"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I've been waiting for him for 30 minutes and he still " + constants_1.space + ".",
        correct: ["hasn't arrived"],
        incorrect: ["didn't arrived", "had not arrived"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "You " + constants_1.space + " good results over the last few months.",
        correct: ["have not been getting"],
        incorrect: ["have not getting", "You not getting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I've been " + constants_1.space + " for over an hour. I'm still waiting now.",
        correct: ["waiting"],
        incorrect: ["wait", "waited"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I have no money left because I've been " + constants_1.space + ".",
        correct: ["shopping"],
        incorrect: ["no shopping", "in shop"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "How long have you " + constants_1.space + " " + constants_1.capital.nationalityNoun.English + "?",
        correct: ["been learning"],
        incorrect: ["learning", "learn", "learned"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I've " + constants_1.space + " here for a month.",
        correct: ["been living"],
        incorrect: ["live", "living"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Look at her eyes! I'm sure she has " + constants_1.space + ".",
        correct: ["been crying"],
        incorrect: ["crying", "cry"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
