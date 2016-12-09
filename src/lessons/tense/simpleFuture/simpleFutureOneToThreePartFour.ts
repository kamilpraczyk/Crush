/// <reference path="../../../../typings/tsd.d.ts" />
import { RawData } from '../../../types';
import { TypeId, id, getNameFemale, getNameMale, getMounth, getDay } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Simple Future Tense";
const info = 'Build the correct sentence in Simple Future Tense.';
const lessons: RawData[] = [
    {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameMale() + " will", "get married", "in", getMounth()],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["It", "will", "probably", "rain tonight"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameMale(), "will be", "driving", "to work", "tomorrow"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameFemale(), "will", "be", "late"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameFemale() + "will", "pass the exam.", "She is", "hardworking"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["My", "homework", "will be", "due tomorrow"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["The", "sun", "will rise", "at 7a.m."],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameMale(), "will", "finish", "his report", "later today"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I hope", getNameMale(), "will have", "a successful", "trip"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["It", "will be", "a nice", "day", "tomorrow"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameMale(), "will", "not", "be", "late"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameFemale(), "will", "be back", "on " + getDay(), "afternoon"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I", "will", "close", "the", "window"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["We", "shall", "play", "football"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameFemale(), "will", "not", "come"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["If I have", "enough time,", "I will watch", "the film"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["If it begins to rain,", "I will", "certainly", "need an umbrella"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will they", "be coming", "to", "see us", "next week?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["They", "will be coming", "to", "see us", "next week"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["They", "will", "cook", "dinner"],
    }
] 

export {
    title,
    lessons
}
