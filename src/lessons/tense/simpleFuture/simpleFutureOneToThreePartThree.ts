/// <reference path="../../../../typings/tsd.d.ts" />
import { RawData } from '../../../types';
import { TypeId, id, getNameFemale, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Simple Future Tense";
const info = 'Build the correct sentence in Simple Future Tense.';
const lessons: RawData[] = [
    {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I", "will", "always", "help", "you"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["When", "will", "they", "leave", "?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I think", "you", "are going to", "marry", "a wrong person"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I", "will", "find", "a", "job"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["We", "will", "eat", "in five", "minutes"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["He", "will", "stay", "for", "dinner"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "you", "give", "me", "a hand?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "you", "please,", "help", "me?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I hope", "he", "will not", "be disappointed"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "you", "come", "with us", "?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["What", "will", "she", "cook?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I will", "fix", "the computer", "as soon", "as I can"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "I", "go?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Where", "will", "I", "go?"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameFemale(), "will", "turn", "18", "this year"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameMale(), "says", "he", "will", "help us"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I am", "sure", "he will", "like it"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: [getNameMale(), "will", "be", "at", "the meeting"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix,
        correct: ["I", "will", "not", "give", "up"],
    }, {
        id: id(common), name: separator, title, explenation, info, postfix: '',
        correct: ["Will", "you", "come", "early", "?"],
    }
] 

export {
    title,
    lessons
}
