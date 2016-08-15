"use strict";
var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var _ = require("underscore");
var separator = " ";
var postfix = ".";
var common = [constants_1.viewIds.oneTwoThree];
var placeholder = "Present Perfect Tense";
var title = "Present Perfect Tense";
exports.title = title;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have", "walked"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["How long", "has", "it been", "since", "the last time we met?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "swum", "the " + constants_1.capital.places.EnglishChannel, "every summer"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["For six", "generations,", "members of my family", "have been", "doctors"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "has", "read", constants_1.capital.books.GameOfThrones],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "just", "finished", "my work"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "been to the cinema", "twice", "this week"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have not", "lived", "here", "for years"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "lived", "in " + constants_1.capital.places.London, "since 19" + _.sample([83, 78, 91, 82, 79, 81, 80])],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have you", "played", "the piano", "since you were", "a child?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "worked hard", "this", "week"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["We", "have not", "seen", "her", "today"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Has", "he", "just", "left", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "studied", constants_1.capital.nationalityAdj.Japanese + " and " + constants_1.capital.nationalityAdj.English],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["We", "have", "just", "seen", "her"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["We", "have", "had", "the same car", "for two years"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "just", "eaten"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["It", "has", "rained", "a lot", "this year"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have", "you", "seen", constants_1.capital.books.TrueBlood, "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Someone", "has", "eaten", "my sandwich", "!"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
