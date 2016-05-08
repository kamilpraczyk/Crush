/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, idsCss, id } from '../../helper/constants';
import explenation = require('./explenation');

const toPlural = 'Change to Plural';
const toSingular = 'Change to Singular';
const toPast = 'Change to Past Tense';
const toPresent = 'Change to Present Tense';

const common = [viewIds.radio, idsCss.center];

export =[
    {
        id: id(common),
        name: "Those girls were beautiful.",
        correct: ["That girl was beautiful"],
        incorrect: ["That girl is beautiful"],
        info: toSingular,
        explenation: explenation
    }, {
        id: id(common),
        name: "Those boys are clever.",
        correct: ["That boy is clever."],
        incorrect: ["That boy was clever."],
        info: toSingular,
        explenation: explenation
    }, {
        id: id(common),
        name: "Those girls were beautiful.",
        correct: ["That girl was beautiful."],
        incorrect: ["That girl is beautiful."],
        info: toSingular,
        explenation: explenation
    }, {
        id: id(common),
        name: "This house was old.",
        correct: ["Those houses were old."],
        incorrect: ["Those houses are old."],
        info: toPlural,
        explenation: explenation
    }, {
        id: id(common),
        name: "This flower is beautiful.",
        correct: ["Those flowers are beautiful."],
        incorrect: ["Those flowers was beautiful."],
        info: toPlural,
        explenation: explenation
    }, {
        id: id(common),
        name: "That child was unhappy.",
        correct: ["Those children were unhappy."],
        incorrect: ["Those children are unhappy."],
        info: toPlural,
        explenation: explenation
    }, {
        id: id(common),
        name: "That woman is intelligent.",
        correct: ["Those women are intelligent."],
        incorrect: ["Those women were intelligent."],
        info: toPlural,
        explenation: explenation
    }, {
        id: id(common),
        name: "I am an engineer.",
        correct: ["I was an engineer."],
        incorrect: ["I shall be an engineer.", "I would be an engineer."],
        info: toPast,
        explenation: explenation
    }, {
        id: id(common),
        name: "This house is old.",
        correct: ["This house was old."],
        incorrect: ["Those houses were old.", "Those houses are old."],
        info: toPast,
        explenation: explenation
    }, {
        id: id(common),
        name: "Those children were short.",
        correct: ["Those children are short."],
        incorrect: ["Those children aren't short."],
        info: toPresent,
        explenation: explenation
    }



] as BoardFaces
