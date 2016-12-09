/// <reference path="../../../../typings/tsd.d.ts" />
import { RawData } from '../../../types';
import { TypeId, id, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Simple Future Tense";
const info = 'Build the correct sentence in Simple Future Tense.';
const lessons: RawData[] = [
    {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["She", "will", "leave", "soon"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will he", "be", "coming home", "today?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["Will our friend", "come with", "us?", "Yes, he will"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["I", "will", "give up", "smoking", "!"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Shall", "I", "open", "the window", "?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "you", "buy", "a car?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["He", "will", "be very happy", "when he", "finds out"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "you", "go", "shopping", "?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["I", "wonder", "what", "will", "happen?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["We won't", "tell", "anyone", "about", "it"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I", "will not", "stay at home", "if I", "finish", "the homework"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["I", "will", "be", "there", "at 9 p.m."],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["There", "will", "be", "another conference", "next month"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "they", "leave", "?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["We will be", "very happy", "if you", "will come", "to my party"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["We", "should finish", "the job", "early if " + getNameMale(), "will help us"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["You", "will", "drink", "your milk!"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I think", "I will", "buy", "a", "new car"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I will", "do it", "tomorrow"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I", "will", "not", "go"],
    }
] 

export {
    title,
    lessons
}
