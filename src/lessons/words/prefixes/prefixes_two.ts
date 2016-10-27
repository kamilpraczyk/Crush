/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons, capital, displayIds} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio, displayIds.noSpace];
const title = "Prefixes: re, dis, pre, un";
const info = 'Use correct prefix.'

const lessons = [
    {
        id: id(common), title: title,
        info: info,
        name: space + "cycle",
        correct: ["re"],
        incorrect: ["dis", "pre", "un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "dict",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "lucky",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "pare",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "turn",
        correct: ["re"],
        incorrect: ["dis", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "kind",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "well",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "build",
        correct: ["re"],
        incorrect: ["dis", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "vious",
        correct: ["pre"],
        incorrect: ["dis", "re", "un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "honest",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "agree",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "allow",
        correct: ["dis"],
        incorrect: ["re", "pre", "un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "happy",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "obey",
        correct: ["dis"],
        incorrect: ["un", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "equal",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "usual",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "real",
        correct: ["un"],
        incorrect: ["dis", "re", "pre"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "card",
        correct: ["dis"],
        incorrect: ["un", "re", "pre"],
        explenation: explenation//TODO make 1 more
    }
] as BoardFaces



export {
title,
lessons,
}


