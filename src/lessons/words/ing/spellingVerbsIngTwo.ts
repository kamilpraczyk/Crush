/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Spellings verbs -ing';
const icon = icons.radio;

const lessons = [
    {
        id: id(common), title: title,
        name: "live",
        correct: ["living"],
        incorrect: ["liveing", "livving"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "glue",
        correct: ["gluing"],
        incorrect: ["glueing", "gluuing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "ache",
        correct: ["aching"],
        incorrect: ["acheing", "achhing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "run",
        correct: ["running"],
        incorrect: ["runeing", "runing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "lie",
        correct: ["lying"],
        incorrect: ["lieing", "liing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "spy",
        correct: ["spying"],
        incorrect: ["spyying", "sping"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "beg",
        correct: ["begging"],
        incorrect: ["beging", "begeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "tip",
        correct: ["tipping"],
        incorrect: ["tiping", "tipeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "answer",
        correct: ["answering"],
        incorrect: ["answerring", "answerrring"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "defer",
        correct: ["defering"],
        incorrect: ["deferring", "deffering"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "slip",
        correct: ["slipping"],
        incorrect: ["sliping", "slipeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "stare",
        correct: ["staring"],
        incorrect: ["stareing", "stareeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "jog",
        correct: ["jogging"],
        incorrect: ["joging", "jogeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hit",
        correct: ["hitting"],
        incorrect: ["hiting", "hittting"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "plan",
        correct: ["planning"],
        incorrect: ["planing", "planeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "be",
        correct: ["being"],
        incorrect: ["beeing", "beying"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sing",
        correct: ["singing"],
        incorrect: ["singging", "singeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "try",
        correct: ["trying"],
        incorrect: ["tryying", "tring"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "quit",
        correct: ["quitting"],
        incorrect: ["quiting", "quiteing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "rain",
        correct: ["raining"],
        incorrect: ["rainning", "raineing"],
        explenation: explenation
    },

] as BoardFaces

export {
title,
lessons,
icon
}


