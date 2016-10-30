/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require("underscore");

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const title = "Present Perfect Tense";
const info = 'Build the correct sentence in Present Perfect Tense.';
const lessons = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have", "walked"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["How long", "has", "it been", "since", "the last time we met?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "has", "swum", "the " + capital.places.EnglishChannel, "every summer"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["For six", "generations,", "members of my family", "have been", "doctors"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He", "has", "read", capital.books.GameOfThrones],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "just", "finished", "my work"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "has", "been to the cinema", "twice", "this week"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They", "have not", "lived", "here", "for years"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "lived", "in " + capital.places.London, "since 19" + _.sample([83, 78, 91, 82, 79, 81, 80])],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have you", "played", "the piano", "since you were", "a child?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "worked hard", "this", "week"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We", "have not", "seen", "her", "today"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Has", "he", "just", "left", "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["She", "has", "studied", capital.nationalityAdj.Japanese + " and " + capital.nationalityAdj.English],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We", "have", "just", "seen", "her"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We", "have", "had", "the same car", "for two years"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "have", "just", "eaten"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It", "has", "rained", "a lot", "this year"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Have", "you", "seen", capital.books.TrueBlood, "?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Someone", "has", "eaten", "my sandwich", "!"],
    }
] as BoardFaces

export {
title,
lessons,
}


