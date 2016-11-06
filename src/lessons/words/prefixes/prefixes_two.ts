/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital, displayIds} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio, displayIds.noSpace];
const title = "Prefixes: re, dis, pre, un";
const info = 'Use the correct prefix.'

const lessons = [
    {
        id: id(common), title, explenation, info,
        name: space + "cycle",
        correct: ["re"],
        incorrect: ["dis", "pre", "un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "dict",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "lucky",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "pare",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "turn",
        correct: ["re"],
        incorrect: ["dis", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "kind",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "well",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "build",
        correct: ["re"],
        incorrect: ["dis", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "vious",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "honest",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "agree",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "allow",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "happy",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "obey",
        correct: ["dis"],
        incorrect: ["un", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "equal",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "usual",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "real",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "card",
        correct: ["dis"],
        incorrect: ["un", "re", "pre"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "run",
        correct: ["re"],
        incorrect: ["un", "dis", "pre"],
    }
] as BoardFaces



export {
title,
lessons,
}


