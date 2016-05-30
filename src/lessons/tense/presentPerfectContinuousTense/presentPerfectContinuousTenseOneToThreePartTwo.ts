/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital} from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Present Perfect Continuous Tense";
const title = "Present Perfect Continuous Tense";
const icon = icons.oneTwoThree;
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "been watching", "too much television", "lately"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: [capital.names.Chris, "has", "been", "teaching at the university", "since " + capital.mounths.July],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They have", "been", "travelling", "since last", capital.mounths.October],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Why has " + capital.names.Jadie, "not", "been taking her medicine", "for the last", "three days?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["It", "has", "been", "raining"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I have", "been", "reading", "that book", "you lent me"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "has", "been", "writing emails", "for 2 hours"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Oh, the kitchen is a mess.", "Who", "has", "been", "cooking?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The university", "has been sending students here", "for over twenty years", "to do work experience"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I have got", "a stiff neck.", "I have been", "working too long", "on computer"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He has", "been", "phoning me", "all week", "for an answer"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["We", "have", "been", "working hard", "on it for ages"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He has", "been", "working here", "since", "2017"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I have", "been", "looking at", "other options", "recently"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["You look tired.", "Have you", "been", "sleeping", "properly?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "has", "not", "	been", "working hard"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["What", "has", "he", "been", "waiting for?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He has been", "reading", "in this school", "since 2010"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He has", "not been", "watering", "the plants", "for two hours"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I have", "not", "been studying", "since ", "3 o'clock"],
        explenation: explenation,
        placeholder: placeholder
    }
] as BoardFaces

export {
title,
lessons,
icon
}


