var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var _ = require("underscore");
var common = [constants_1.viewIds.radio];
var placeholder = "Present Perfect Tense";
var title = "Present Perfect Tense";
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "He has " + constants_1.space + " a letter to " + constants_1.capital.names.Maria + ".",
        correct: ["written"],
        incorrect: ["write"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I " + constants_1.space + " studied.",
        correct: ["have"],
        incorrect: ["has"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "He " + constants_1.space + " eaten.",
        correct: ["has"],
        incorrect: ["have"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.names.Jason + " and " + constants_1.capital.names.Maria + " " + constants_1.space + " to " + constants_1.capital.countries.Spain + ".",
        correct: ["have traveled"],
        incorrect: ["had traveled", "traveled"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I " + constants_1.space + " in " + constants_1.capital.places.Madrid + " for one week.",
        correct: ["have been"],
        incorrect: ["been", "was"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.names.Chris + " " + constants_1.space + " my friend for " + _.sample[2, 4, 6, 8, 9, 12] + " years.",
        correct: ["has been"],
        incorrect: ["had been", "was"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Peter has " + constants_1.space + " a lot of money to his sister.",
        correct: ["not given"],
        incorrect: ["not give", "give"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "I have " + constants_1.space + " my teeth.",
        correct: ["brushed"],
        incorrect: ["brush"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.space + " the women left yet?",
        correct: ["Have"],
        incorrect: ["Had", "Does"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.space + " you ever tried chocolate?",
        correct: ["Haven't"],
        incorrect: ["Hasn't"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
