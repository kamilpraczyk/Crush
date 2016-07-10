/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Present Perfect Continuous Tense";
const title = "Present Perfect Continuous Tense";
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["They", "have", "been", "playing cricket", "since 5p.m."], 
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have", "been", "talking", "for the last hour"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["We", "have", "been", "waiting here", "for over two hours!"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: [capital.names.Tom, "has", "not ", "been practicing", "his " + capital.nationalityNoun.English],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: [capital.names.Lisa, "has", "been feeling", "a little", "depressed"],
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The teacher", "has", "been", "teaching", capital.nationalityNoun.English],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Recently,", "I have", "been", "feeling", "really tired"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have", "you", "been", "exercising", "lately?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She has", "been waiting", "for", "you all", "day"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Recently, " + capital.names.Mark, "has", "been", "doing", "the work"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Recently, the work", "has", "been", "done", "by " + capital.names.Mark],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "been", "listening", "to the radio"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have", "been", "going", "to school"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "been", "swimming"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["It", "has", "been", "living"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "been", "living"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have", "we", "been", "living", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["What have", "you", "been", "doing", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "not", "been", "running"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Has", "she", "been", "reading", "?"],
        explenation: explenation,
        placeholder: placeholder
    }
] as BoardFaces

export {
title,
lessons,
}


