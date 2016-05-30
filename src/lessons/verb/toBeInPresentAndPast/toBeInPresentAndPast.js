var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var toPlural = 'Change to Plural';
var toSingular = 'Change to Singular';
var toPast = 'Change to Past Tense';
var toPresent = 'Change to Present Tense';
var common = [constants_1.viewIds.radio];
var title = 'Verb: "to be" in present and past';
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "Those girls were beautiful.",
        correct: ["That girl was beautiful"],
        incorrect: ["That girl is beautiful"],
        info: toSingular,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Those boys are clever.",
        correct: ["That boy is clever."],
        incorrect: ["That boy was clever."],
        info: toSingular,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Those girls were beautiful.",
        correct: ["That girl was beautiful."],
        incorrect: ["That girl is beautiful."],
        info: toSingular,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "This house was old.",
        correct: ["Those houses were old."],
        incorrect: ["Those houses are old."],
        info: toPlural,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "This flower is beautiful.",
        correct: ["Those flowers are beautiful."],
        incorrect: ["Those flowers was beautiful."],
        info: toPlural,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "That child was unhappy.",
        correct: ["Those children were unhappy."],
        incorrect: ["Those children are unhappy."],
        info: toPlural,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "That woman is intelligent.",
        correct: ["Those women are intelligent."],
        incorrect: ["Those women were intelligent."],
        info: toPlural,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "I am an engineer.",
        correct: ["I was an engineer."],
        incorrect: ["I shall be an engineer.", "I would be an engineer."],
        info: toPast,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "This house is old.",
        correct: ["This house was old."],
        incorrect: ["Those houses were old.", "Those houses are old."],
        info: toPast,
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Those children were short.",
        correct: ["Those children are short."],
        incorrect: ["Those children aren't short."],
        info: toPresent,
        explenation: explenation
    }
];
exports.lessons = lessons;
