import {RawData} from '../../../types';
import {space, TypeId, id, capital } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Present Continuous Tense";
const info = 'Build the correct sentence in Present Continuous Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "is", "writing", "a letter"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You", "are", "studying", capital.nationalityNoun.English, "grammar"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You", "are", "not", "watching", capital.things.TV],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You", "are", "watching", capital.things.TV],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Are", "you", "watching", capital.things.TV, "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "am", "sitting"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "are", "reading", "their", "books"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "are", "not", "watching", "television"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["What", "are", "you", "doing", "?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Why", "aren't", "you", "doing", "your homework?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I am", "not", "reading", "any", "books right now"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I am", "studying", "to become", "an engineer"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "am", "meeting", "some friends", "after work"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I am", "not", "going to", "the party", "tonight"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Are", "you", "still", "watching", capital.things.TV + "?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Isn't", "she", "coming", "with us", "tonight?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "is", "always", "coming to", "class late"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "is", "constantly", "talking"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She's", "studying", "with her", "friend", "for a week"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He's", "eating", "a lot", "these", "days"],
    }
] 

export {
title,
lessons,
}


