/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Spellings verbs -ing';
const info = 'Find the correct form.'

const lessons = [
    {
        id: id(common), title: title, info : info,
        name: "live",
        correct: ["living"],
        incorrect: ["liveing", "livving"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "glue",
        correct: ["gluing"],
        incorrect: ["glueing", "gluuing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "ache",
        correct: ["aching"],
        incorrect: ["acheing", "achhing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "run",
        correct: ["running"],
        incorrect: ["runeing", "runing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "lie",
        correct: ["lying"],
        incorrect: ["lieing", "liing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "spy",
        correct: ["spying"],
        incorrect: ["spyying", "sping"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "beg",
        correct: ["begging"],
        incorrect: ["beging", "begeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "tip",
        correct: ["tipping"],
        incorrect: ["tiping", "tipeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "answer",
        correct: ["answering"],
        incorrect: ["answerring", "answerrring"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "defer",
        correct: ["defering"],
        incorrect: ["deferring", "deffering"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "slip",
        correct: ["slipping"],
        incorrect: ["sliping", "slipeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "stare",
        correct: ["staring"],
        incorrect: ["stareing", "stareeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "jog",
        correct: ["jogging"],
        incorrect: ["joging", "jogeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "hit",
        correct: ["hitting"],
        incorrect: ["hiting", "hittting"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "plan",
        correct: ["planning"],
        incorrect: ["planing", "planeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "be",
        correct: ["being"],
        incorrect: ["beeing", "beying"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "sing",
        correct: ["singing"],
        incorrect: ["singging", "singeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "try",
        correct: ["trying"],
        incorrect: ["tryying", "tring"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "quit",
        correct: ["quitting"],
        incorrect: ["quiting", "quiteing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "rain",
        correct: ["raining"],
        incorrect: ["rainning", "raineing"],
        explenation: explenation
    },

] as BoardFaces

export {
title,
lessons,
}


