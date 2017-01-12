import {RawData} from '../../../types';
import {space, TypeId, id, capital, getNameFemale, getNameMale} from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Present Perfect Continuous Tense";
const info = 'Build the correct sentence in Present Perfect Continuous Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "has", "been watching", "too much television", "lately"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "has", "been", "teaching at the university", "since " + capital.mounths.July],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They have", "been", "travelling", "since last", capital.mounths.October],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Why has " + getNameFemale(), "not", "been taking her medicine", "for the last", "three days?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It", "has", "been", "raining"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I have", "been", "reading", "that book", "you lent me"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He", "has", "been", "writing emails", "for 2 hours"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Oh, the kitchen is a mess.", "Who", "has", "been", "cooking?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The university", "has been sending students here", "for over twenty years", "to do work experience"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I have got", "a stiff neck.", "I have been", "working too long", "on computer"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He has", "been", "phoning me", "all week", "for an answer"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We", "have", "been", "working hard", "on it for ages"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He has", "been", "working here", "since", "2017"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I have", "been", "looking at", "other options", "recently"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["You look tired.", "Have you", "been", "sleeping", "properly?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He", "has", "not", "	been", "working hard"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["What", "has", "he", "been", "waiting for?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He has been", "reading", "in this school", "since 2010"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He has", "not been", "watering", "the plants", "for two hours"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I have", "not", "been studying", "since ", "3 o'clock"],
    }
] 

export {
title,
lessons,
}


