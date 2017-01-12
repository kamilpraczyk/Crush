import {RawData} from '../../../types';
import {space, TypeId, id, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = 'Spellings verbs -ing';
const info = 'Find the correct form.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "live",
        correct: ["living"],
        incorrect: ["liveing", "livving"],
    }, {
        id: id(common), title, explenation, info,
        name: "glue",
        correct: ["gluing"],
        incorrect: ["glueing", "gluuing"],
    }, {
        id: id(common), title, explenation, info,
        name: "ache",
        correct: ["aching"],
        incorrect: ["acheing", "achhing"],
    }, {
        id: id(common), title, explenation, info,
        name: "run",
        correct: ["running"],
        incorrect: ["runeing", "runing"],
    }, {
        id: id(common), title, explenation, info,
        name: "lie",
        correct: ["lying"],
        incorrect: ["lieing", "liing"],
    }, {
        id: id(common), title, explenation, info,
        name: "spy",
        correct: ["spying"],
        incorrect: ["spyying", "sping"],
    }, {
        id: id(common), title, explenation, info,
        name: "beg",
        correct: ["begging"],
        incorrect: ["beging", "begeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "tip",
        correct: ["tipping"],
        incorrect: ["tiping", "tipeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "answer",
        correct: ["answering"],
        incorrect: ["answerring", "answerrring"],
    }, {
        id: id(common), title, explenation, info,
        name: "defer",
        correct: ["deferring"],
        incorrect: ["defering", "deffering"],
    }, {
        id: id(common), title, explenation, info,
        name: "slip",
        correct: ["slipping"],
        incorrect: ["sliping", "slipeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "stare",
        correct: ["staring"],
        incorrect: ["stareing", "stareeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "jog",
        correct: ["jogging"],
        incorrect: ["joging", "jogeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "hit",
        correct: ["hitting"],
        incorrect: ["hiting", "hittting"],
    }, {
        id: id(common), title, explenation, info,
        name: "plan",
        correct: ["planning"],
        incorrect: ["planing", "planeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "be",
        correct: ["being"],
        incorrect: ["beeing", "beying"],
    }, {
        id: id(common), title, explenation, info,
        name: "sing",
        correct: ["singing"],
        incorrect: ["singging", "singeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "try",
        correct: ["trying"],
        incorrect: ["tryying", "tring"],
    }, {
        id: id(common), title, explenation, info,
        name: "quit",
        correct: ["quitting"],
        incorrect: ["quiting", "quiteing"],
    }, {
        id: id(common), title, explenation, info,
        name: "rain",
        correct: ["raining"],
        incorrect: ["rainning", "raineing"],
    }
] 

export {
title,
lessons,
}


