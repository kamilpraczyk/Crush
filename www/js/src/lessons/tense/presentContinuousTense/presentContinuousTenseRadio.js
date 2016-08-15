"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var placeholder = "Present Continuous Tense";
var title = "Present Continuous Tense";
exports.title = title;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "This work is good! Your handwriting " + constants_1.space + " better and better.",
        correct: ["is getting"],
        incorrect: ["getting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Sorry, she can not come to the phone right now. She " + constants_1.space + " a bath.",
        correct: ["is having"],
        incorrect: ["have", "has"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.space + " you " + constants_1.space + " anything on " + constants_1.capital.days.Saturday + " morning?",
        correct: ["Are " + constants_1.multi + " doing"],
        incorrect: ["Do " + constants_1.multi + " doing"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Where is " + constants_1.getNameMale() + "? He is " + constants_1.space + " soccer in the sports hall.",
        correct: ["playing"],
        incorrect: ["having"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I am " + constants_1.space + " tired of you always coming late to class.",
        correct: ["getting"],
        incorrect: ["get"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.space + " you know if he is going next week?",
        correct: ["Do"],
        incorrect: ["Did", "Have"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "You " + constants_1.space + " always " + constants_1.space + " me when I am talking.",
        correct: ["are " + constants_1.multi + " interrupting"],
        incorrect: [constants_1.empty + " " + constants_1.multi + " interrupting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Why " + constants_1.space + " always raining in " + constants_1.capital.countries.England + "?",
        correct: ["is it"],
        incorrect: [constants_1.empty, "is"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "We can still play tennis. It is not " + constants_1.space + " very hard.",
        correct: ["raining"],
        incorrect: ["rain"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "You " + constants_1.space + " not " + constants_1.space + " very hard today. Is anything wrong?",
        correct: ["are " + constants_1.multi + " working"],
        incorrect: [constants_1.empty + " " + constants_1.multi + " worked"],
        explenation: explenation,
        placeholder: placeholder
    },
];
exports.lessons = lessons;
