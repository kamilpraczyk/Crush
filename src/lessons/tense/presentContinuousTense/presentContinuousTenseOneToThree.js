var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var separator = " ";
var postfix = ".";
var common = [constants_1.viewIds.oneTwoThree];
var placeholder = "Present Continuous Tense";
var title = "Present Continuous Tense";
exports.title = title;
var icon = constants_1.icons.oneTwoThree;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "writing", "a letter"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["You", "are", "studying", constants_1.capital.nationalityNoun.English, "grammar"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["You", "are", "not", "watching", constants_1.capital.things.TV],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["You", "are", "watching", constants_1.capital.things.TV],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Are", "you", "watching", constants_1.capital.things.TV, "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "am", "sitting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "are", "reading", "their", "books"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "are", "not", "watching", "television"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["What", "are", "you", "doing", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Why", "aren't", "you", "doing", "your homework?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I am", "not", "reading", "any", "books right now"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I am", "studying", "to become", "an engineer"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "am", "meeting", "some friends", "after work"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I am", "not", "going to", "the party", "tonight"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Are", "you", "still", "watching", constants_1.capital.things.TV + "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Isn't", "she", "coming", "with us", "tonight?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "always", "coming to", "class late"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "constantly", "talking"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She's", "studying", "with her", "friend", "for a week"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He's", "eating", "a lot", "these", "days"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
