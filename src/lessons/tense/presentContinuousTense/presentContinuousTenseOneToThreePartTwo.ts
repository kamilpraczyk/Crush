/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id, capital, getNameFemale, getNameMale } from '../../helper/constants';
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
        correct: ["You", "are", "using", "the", capital.things.Internet],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She's", "swimming", "every", "morning"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "getting", "better", "at playing", "the piano"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You're", "smoking", "too", "much"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["You're", "always", "losing", "your", "keys!"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She's", "constantly", "missing", "the", "train"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "meeting", "my", "father", "tomorrow"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "leaving", "at", "five"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", "weather", "is", "improving"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "visiting", "grandpa", "in the", "afternoon"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["You are", "always", "coming", "late", "for the meetings!"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "taking", "a shower", "now"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm riding a bike", "to get to work", "because", "my car is", "broken"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "are", "not talking", "with each", "other"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["My", "boss", "is", "constantly criticising", " me!"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Is", getNameFemale(), "having", "breakfast", "now?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Are they", "having", "the party", "on " + capital.days.Friday, "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He", "is not", "going to", "school", "tomorrow"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Are", "they", "waiting", "for", getNameMale() + "?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Is", "he", "waiting", capital.things.TV, "?"],
    }
] 

export {
title,
lessons,
}


