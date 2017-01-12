import {RawData} from '../../../types';
import {space, TypeId, id, capital, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Present Perfect Tense";
const info = 'Build the correct sentence in Present Perfect Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", "child", "has", "gone", "to bed"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have", "bought", "a new", "car"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You", "have", "told", "a lie"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have", "gone", "to", "school"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "started", "a job"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You", "have", "not", "told", "a lie"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have", "not", "gone", "to school"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "they", "gone", "to", "school?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "they", "bought", "a new", "car?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It", "has", "rained"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "I", "started", "a job?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "has", "not", "left", "for home"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "you", "told", "a lie", "?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Has", "it", "rained", "?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Has", getNameMale(), "left", "for home", "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have", "not", "bought", "a new car"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", "guests", "have", "arrived"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", "guests", "have", "not", "arrived"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It", "has", "not", "rained"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "not", "started", "a job"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "the", "guests", "arrived", "?"],
    }
] 

export {
title,
lessons,
}


