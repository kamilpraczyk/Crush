/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital, getNameFemale, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const title = "Present Perfect Continuous Tense";
const info = 'Build the correct sentence.';
const lessons = [
    {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["They", "have", "been", "playing cricket", "since 5p.m."],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have", "been", "talking", "for the last hour"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["We", "have", "been", "waiting here", "for over two hours!"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "has", "not ", "been practicing", "his " + capital.nationalityNoun.English],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameFemale(), "has", "been feeling", "a little", "depressed"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The teacher", "has", "been", "teaching", capital.nationalityNoun.English],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Recently,", "I have", "been", "feeling", "really tired"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "you", "been", "exercising", "lately?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She has", "been waiting", "for", "you all", "day"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Recently, " + getNameMale(), "has", "been", "doing", "the work"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Recently, the work", "has", "been", "done", "by " + getNameMale()],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "been", "listening", "to the radio"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have", "been", "going", "to school"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "has", "been", "swimming"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It", "has", "been", "living"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "has", "been", "living"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "we", "been", "living", "?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["What have", "you", "been", "doing", "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "has", "not", "been", "running"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Has", "she", "been", "reading", "?"],
    }
] as BoardFaces

export {
title,
lessons,
}


