/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital, displayIds} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.inradio, displayIds.noSpace];
const title = "Prefixes: re, dis, pre, un";
const info = 'Make the word mean the opposite.'

const lessons = [
    {
        id: id(common), title: title,
        info: info,
        name: space + "able",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "popular",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "appear",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "own",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "seen",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "usual",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "qualify",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "obey",
        correct: ["dis"],
        incorrect: ["un"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "tidy",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        info: info,
        name: space + "do",
        correct: ["un"],
        incorrect: ["dis"],
        explenation: explenation
    },
] as BoardFaces

export {
title,
lessons,
}


