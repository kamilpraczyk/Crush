var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var separator = " ";
var postfix = ".";
var common = [constants_1.viewIds.oneTwoThree];
var placeholder = "Simple Present Tense";
var title = "Simple Present Tense";
exports.title = title;
var icon = constants_1.icons.oneTwoThree;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Where", "does", "he", "work", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "do not", "go", "fishing", "at weekends"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Do", "I", "go", "fishing", "at weekends?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "he ever", "put milk", "in his tea", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["My", "father", "plays", "the", "violin"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Do", "we go", "to", "the cinema", "on " + constants_1.capital.daysPlural.Fridays + "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["A rabbit", "does", "not have", "two", "legs"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["How", "many legs", "does", "a spider", "have?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", constants_1.capital.places.Earth, "goes", "round", "the " + constants_1.capital.places.Sun],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The " + constants_1.capital.places.Sun, "does", "not", "go round", "the " + constants_1.capital.places.Earth],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "the " + constants_1.capital.places.Moon, "go", "round", "the " + constants_1.capital.places.Earth + "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", "course", "does", "not start", "in " + constants_1.capital.mounths.June],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The train", "leaves", "at half", "past", "six"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "like", "chocolate"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Water", "is", "liquid", "at room", "temperature"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: [constants_1.capital.names.Jason + " takes", "the ball,", "then he", "throws", "and scores two points"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: "",
        correct: ["What", "time", "does", "the train", "leave?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The train", "gets", "in", "at 4 o'clock"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The oceans", "are", "deep", "and cold"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: separator, postfix: postfix,
        correct: [constants_1.capital.places.Antartica, "is", "covered", "with", "ice"],
        explenation: explenation,
        placeholder: placeholder
    },
];
exports.lessons = lessons;
