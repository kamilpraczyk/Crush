/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons, capital } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require("underscore");

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Present Perfect Tense";
const title = "Present Perfect Tense";
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have", "walked"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["How long", "has", "it been", "since", "the last time we met?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "swum", "the " + capital.places.EnglishChannel, "every summer"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["For six", "generations,", "members of my family", "have been", "doctors"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He", "has", "read", capital.books.GameOfThrones],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "just", "finished", "my work"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "been to the cinema", "twice", "this week"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have not", "lived", "here", "for years"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "lived", "in " + capital.places.London, "since 19" + _.sample([83, 78, 91, 82, 79, 81, 80])],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have you", "played", "the piano", "since you were", "a child?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "worked hard", "this", "week"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["We", "have not", "seen", "her", "today"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Has", "he", "just", "left", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "has", "studied", capital.nationalityAdj.Japanese + " and " + capital.nationalityAdj.English],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["We", "have", "just", "seen", "her"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["We", "have", "had", "the same car", "for two years"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "just", "eaten"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["It", "has", "rained", "a lot", "this year"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Have", "you", "seen", capital.books.TrueBlood, "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Someone", "has", "eaten", "my sandwich", "!"],
        explenation: explenation,
        placeholder: placeholder
    }
] as BoardFaces

export {
title,
lessons,
}


