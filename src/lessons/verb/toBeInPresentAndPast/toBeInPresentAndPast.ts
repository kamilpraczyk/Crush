/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');

const title = 'Verb: "to be" in present and past';
const toPlural = 'Change to plural.';
const toSingular = 'Change to singular.';
const toPast = 'Change to Past Tense.';
const toPresent = 'Change to Present Tense.';
const common = [TypeId.radio];

const lessons: RawData[] = [
    {
        id: id(common), title, explenation,
        name: "Those girls were beautiful.",
        correct: ["That girl was beautiful"],
        incorrect: ["That girl is beautiful"],
        info: toSingular,
    }, {
        id: id(common), title, explenation,
        name: "Those boys are clever.",
        correct: ["That boy is clever."],
        incorrect: ["That boy was clever."],
        info: toSingular,
    }, {
        id: id(common), title, explenation,
        name: "Those girls were beautiful.",
        correct: ["That girl was beautiful."],
        incorrect: ["That girl is beautiful."],
        info: toSingular,
    }, {
        id: id(common), title, explenation,
        name: "This house was old.",
        correct: ["Those houses were old."],
        incorrect: ["Those houses are old."],
        info: toPlural,
    }, {
        id: id(common), title, explenation,
        name: "This flower is beautiful.",
        correct: ["Those flowers are beautiful."],
        incorrect: ["Those flowers was beautiful."],
        info: toPlural,
    }, {
        id: id(common), title, explenation,
        name: "That child was unhappy.",
        correct: ["Those children were unhappy."],
        incorrect: ["Those children are unhappy."],
        info: toPlural,
    }, {
        id: id(common), title, explenation,
        name: "That woman is intelligent.",
        correct: ["Those women are intelligent."],
        incorrect: ["Those women were intelligent."],
        info: toPlural,
    }, {
        id: id(common), title, explenation,
        name: "I am an engineer.",
        correct: ["I was an engineer."],
        incorrect: ["I shall be an engineer.", "I would be an engineer."],
        info: toPast,
    }, {
        id: id(common), title, explenation,
        name: "This house is old.",
        correct: ["This house was old."],
        incorrect: ["Those houses were old.", "Those houses are old."],
        info: toPast,
    }, {
        id: id(common), title, explenation,
        name: "Those children were short.",
        correct: ["Those children are short."],
        incorrect: ["Those children aren't short."],
        info: toPresent,
    }
] 

export {
title,
lessons,
}