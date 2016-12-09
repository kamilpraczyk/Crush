/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.inradio, TypeId.noSpace];
const title = "Prefixes: re, dis, pre, un";
const info = 'Make the word mean the opposite.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: space + "able",
        correct: ["un"],
        incorrect: ["dis"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "popular",
        correct: ["un"],
        incorrect: ["dis"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "appear",
        correct: ["dis"],
        incorrect: ["un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "own",
        correct: ["dis"],
        incorrect: ["un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "seen",
        correct: ["un"],
        incorrect: ["dis"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "usual",
        correct: ["un"],
        incorrect: ["dis"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "qualify",
        correct: ["dis"],
        incorrect: ["un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "obey",
        correct: ["dis"],
        incorrect: ["un"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "tidy",
        correct: ["un"],
        incorrect: ["dis"],
    }, {
        id: id(common), title, explenation, info,
        name: space + "do",
        correct: ["un"],
        incorrect: ["dis"],
    },
] 

export {
title,
lessons,
}


