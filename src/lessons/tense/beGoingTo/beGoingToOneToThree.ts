import { RawData } from '../../../types';
import { space, TypeId, id, capital, getNameFemale, getNameMale, getCountry, getPossessiveNameMale, getCity } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require('underscore');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Be going to";
const info = 'Build the correct sentence using "be going to" form.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "going to", "take a few exams", "at the end", "of the month"],
    }, {
        id: id(common), title, explenation, info, postfix: "",
        name: separator,
        correct: ["Are", "you", "going to", "meet " + getNameFemale(), "tonight?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Get back! The bomb", "is going", "to explode"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I am", "going to", getCountry(), "next month"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She is", "going to", "be a professional", "dancer", "when she grows up"],
    }, {
        id: id(common), title, explenation, info, postfix: "",
        name: separator,
        correct: ["Who are", "you going to", "invite", "to the party?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "is", "going to", "spend her vacation in", getCountry()],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He is", "going to", "spend his holidays in", getCountry()],
    }, {
        id: id(common), title, explenation, info, postfix: "",
        name: separator,
        correct: ["Who", "is going", "to make", getPossessiveNameMale(), "birthday cake?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We are", "going to", "take a bottle of orange juice", "to the party"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We talked about it", "yesterday", "and I'm", "going to", "quit my job tomorrow"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I was", "going to", "call you", "but I lost", "your phone number"],
    }, {
        id: id(common), title, explenation, info, postfix: "",
        name: separator,
        correct: ["They we", "going to", "take a bottle of orange juice", "to the party?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We are", "going to", "drive", "all the way", "to " + getCity()],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "is going to", "meet" + getNameFemale(), "tonight"],
    }, {
        id: id(common), title, explenation, info, postfix: "",
        name: separator,
        correct: ["Is", getNameFemale(), "going to", "meet" + getNameMale(), "tomorrow?"],
    }, {
        id: id(common), title, explenation, info, postfix: "",
        name: separator,
        correct: ["When", "are we", "going to meet", "each other", "tonight?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameFemale(), "is", "going to", "begin business school", "next year"],
    }, {
        id: id(common), title, explenation, info, postfix: "",
        name: separator,
        correct: ["They", "are", "going to", "meet at " + _.sample([4, 5, 6, 7, 8, 9]) + " p.m."],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It's so cold! I think", "it is", "going to", "snow"],
    }
]

export {
    title,
    lessons,
}



