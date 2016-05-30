var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var title = "Verb: have, has";
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "Have you got a book? Yes, " + constants_1.space + ".",
        correct: ["I have"],
        incorrect: ["I have not", "he has"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have you got any cash? No, " + constants_1.space + ".",
        correct: ["I have not"],
        incorrect: ["I have", "she has not"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have you got a boyfriend? Yes, " + constants_1.space + ".",
        correct: ["I have"],
        incorrect: ["I have not", "I haven't"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Has " + constants_1.capital.names.Wilson + " got any money? No, " + constants_1.space + ".",
        correct: ["he has not"],
        incorrect: ["he have", "he has"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have they got a new house? Yes, " + constants_1.space + ".",
        correct: ["they have"],
        incorrect: ["they haven't", "they have not"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Has he got a job? No, " + constants_1.space + ".",
        correct: ["he hasn't"],
        incorrect: ["he has", "she has not"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have you got " + constants_1.space + " credit cards?",
        correct: ["any"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have you got " + constants_1.space + " cash?",
        correct: ["any"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have you got any cash? Yes, I have " + constants_1.space + ".",
        correct: ["some"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Has " + constants_1.capital.names.Sally + " got any books? Yes, she has " + constants_1.space + ".",
        correct: ["some"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Has " + constants_1.capital.names.Peter + " got a credit card? Yes, he has " + constants_1.space + ".",
        correct: ["one"],
        incorrect: ["some"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have you got any insurance? Yes, we have " + constants_1.space + ".",
        correct: ["some"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.names.Sam + " has " + constants_1.space + " job.",
        correct: ["no"],
        incorrect: ["not"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.names.Rob + " has " + constants_1.space + " money this month.",
        correct: ["no"],
        incorrect: ["not"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "They have " + constants_1.space + " time today.",
        correct: ["no"],
        incorrect: ["not"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "I have " + constants_1.space + " got any time today.",
        correct: ["not"],
        incorrect: ["no"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "She has " + constants_1.space + " got any friends there.",
        correct: ["not"],
        incorrect: ["no"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.names.Tom + " has " + constants_1.space + " got a book",
        correct: ["not"],
        incorrect: ["no"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Have we got " + constants_1.space + " batteries?",
        correct: ["any"],
        incorrect: ["some"],
        explenation: explenation
    }
];
exports.lessons = lessons;
