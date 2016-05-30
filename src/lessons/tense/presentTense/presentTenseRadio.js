var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var placeholder = "Simple Present Tense";
var title = "Simple Present Tense";
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "You " + constants_1.space + " " + constants_1.capital.nationalityAdj.English + ".",
        correct: ["speak"],
        incorrect: ["speaks", "speaking"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.places.NewYork + " " + constants_1.space + " a small city.",
        correct: ["is", "is not"],
        incorrect: ["are", "are not"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "You " + constants_1.space + " " + constants_1.capital.nationalityAdj.English + ".",
        correct: ["do not speak"],
        incorrect: ["do not speaking", "does not speak"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Windows " + constants_1.space + " of glass.",
        correct: ["are made"],
        incorrect: ["is made", "not made"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Chickens " + constants_1.space + " milk.",
        correct: ["do not drink"],
        incorrect: ["do not drinks", "does not drink"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "The bus does " + constants_1.space + " at 10 " + constants_1.capital.clock.am + ", it " + constants_1.space + " at 10 " + constants_1.capital.clock.pm,
        correct: ["not arrive " + constants_1.multi + " arrives"],
        incorrect: ["not arrive " + constants_1.multi + " arrive", "not arrives " + constants_1.multi + " arrives", "not arrive " + constants_1.multi + " does arrive"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "When " + constants_1.space + " class " + constants_1.space + " tomorrow?",
        correct: ["does " + constants_1.multi + " begin"],
        incorrect: ["do " + constants_1.multi + " begin", "does " + constants_1.multi + " begining"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "He " + constants_1.space + " not need help now.",
        correct: ["does"],
        incorrect: ["do", "is", "will"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I " + constants_1.space + " here now.",
        correct: ["am"],
        incorrect: ["was", "are", "did"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.places.Barcelona + " " + constants_1.space + " in the " + constants_1.capital.countries.UnitedKingdom + ".",
        correct: ["is not"],
        incorrect: ["does not", "do not", "are not"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
