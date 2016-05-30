var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var title = 'Possessive Pronouns: mine, yours, hers...';
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "This blunt knife is not mine. " + constants_1.space,
        correct: ["My knife is sharp."],
        incorrect: ["Mine knife is sharp."],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "I'm a buisness associate of " + constants_1.space + " father",
        correct: ["your"],
        incorrect: ["yours"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "My girlfriend is optimistic and outgoing, how about" + constants_1.space + "?",
        correct: ["yours"],
        incorrect: ["your"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "What I said is none of " + constants_1.space + " buisness",
        correct: ["your"],
        incorrect: ["yours"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Some of " + constants_1.space + " distant relatives are comming next week.",
        correct: ["my"],
        incorrect: ["mine"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "This pen is not " + constants_1.space + ", it's " + constants_1.capital.names.Robs,
        correct: ["mine"],
        incorrect: ["my"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.names.Kates + " father is very rich. Some day all this will be " + constants_1.space,
        correct: ["hers"],
        incorrect: ["her"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.space + " room is not for rent; you must ask someone elese.",
        correct: ["Her"],
        incorrect: ["Hers"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.space + " house is much smaller than yours.",
        correct: ["My"],
        incorrect: ["Mine"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "The large briefcase is his, the smaller one is " + constants_1.space + ".",
        correct: ["hers"],
        incorrect: ["her"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Their house is really big while " + constants_1.space + " is tiny",
        correct: ["mine"],
        incorrect: ["my"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Let's meet on " + constants_1.space + " patio at five.",
        correct: ["our"],
        incorrect: ["ours"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Mr " + constants_1.capital.names.Thomas + " is a friend of " + constants_1.space + " .",
        correct: ["ours"],
        incorrect: ["our"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "My rules are strict, but " + constants_1.space + " are even stricter.",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "The park is mine as much as it's " + constants_1.space + " .",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "I have collected my ticket, but where is " + constants_1.space + "?",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.space + " childhood was tough, but my mum's was tougher.",
        correct: ["Her"],
        incorrect: ["Hers"],
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "That food is ours and not " + constants_1.space + ".",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }
];
exports.lessons = lessons;
