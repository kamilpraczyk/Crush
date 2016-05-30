var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var title = "Reflexive Pronouns: myself, yourself, herself...";
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.names.Jack + ", you should not blame " + constants_1.space + " for the accident.",
        correct: ["yourself"],
        incorrect: ["herself", "yourselves"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Don't worry about her, she can amuse " + constants_1.space + ".",
        correct: ["herself"],
        incorrect: ["himself", "itself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "I just taught to " + constants_1.space + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Thet don't know us. We never introduced" + constants_1.space + ".",
        correct: ["ourselves"],
        incorrect: ["ourself", "yourselves"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "How do you turn this off? It turns " + constants_1.space + " off.",
        correct: ["itself"],
        incorrect: ["herself", "himself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "I cut " + constants_1.space + " while shaving.",
        correct: ["myself"],
        incorrect: ["itself", "himself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "The members argued amongst " + constants_1.space + " for an hour.",
        correct: ["themselves"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "We often ask " + constants_1.space + " why we left " + constants_1.capital.places.Manchester + ".",
        correct: ["ourselves"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "He treated " + constants_1.space + " to the cake.",
        correct: ["himself"],
        incorrect: ["herself", "itself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "He " + constants_1.space + " treated me to the cake.",
        correct: ["himself"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "I thaught " + constants_1.space + " " + constants_1.capital.nationalityNoun.English + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }
];
exports.lessons = lessons;
