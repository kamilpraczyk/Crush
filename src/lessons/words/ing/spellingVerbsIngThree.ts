/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Spellings verbs -ing';
const info = 'Find the correct form.'

const lessons = [
    {
        id: id(common), title: title, info : info,
        name: "feel",
        correct: ["feeling"],
        incorrect: ["feelling"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "go",
        correct: ["going"],
        incorrect: ["goeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "have",
        correct: ["having"],
        incorrect: ["haveing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "take",
        correct: ["taking"],
        incorrect: ["takeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "sleep",
        correct: ["sleeping"],
        incorrect: ["sleepping"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "happen",
        correct: ["happening"],
        incorrect: ["happeening"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "get",
        correct: ["getting"],
        incorrect: ["geting"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "enter",
        correct: ["entering"],
        incorrect: ["enterring"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "fix",
        correct: ["fixing"],
        incorrect: ["fixeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "die",
        correct: ["dying"],
        incorrect: ["dieing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "snow",
        correct: ["snowing"],
        incorrect: ["snowwing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "refer",
        correct: ["referring"],
        incorrect: ["refering"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "whisper",
        correct: ["whispering"],
        incorrect: ["whisperring"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "offer",
        correct: ["offering"],
        incorrect: ["offerring"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "tune",
        correct: ["tuning"],
        incorrect: ["tunning"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "take",
        correct: ["taking"],
        incorrect: ["takeing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "come",
        correct: ["coming"],
        incorrect: ["comming"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "hide",
        correct: ["hiding"],
        incorrect: ["hideing"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "fake",
        correct: ["faking"],
        incorrect: ["fakking"],
        explenation: explenation
    }, {
        id: id(common), title: title, info : info,
        name: "boil",
        correct: ["boiling"],
        incorrect: ["boilling"],
        explenation: explenation
    }
] as BoardFaces

export {
title,
lessons,
}


