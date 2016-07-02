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
        name: "feel",
        correct: ["feeling"],
        incorrect: ["feelling"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "go",
        correct: ["going"],
        incorrect: ["goeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "have",
        correct: ["having"],
        incorrect: ["haveing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "take",
        correct: ["taking"],
        incorrect: ["takeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sleep",
        correct: ["sleeping"],
        incorrect: ["sleepping"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "happen",
        correct: ["happening"],
        incorrect: ["happeening"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "get",
        correct: ["getting"],
        incorrect: ["geting"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "enter",
        correct: ["entering"],
        incorrect: ["enterring"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "fix",
        correct: ["fixing"],
        incorrect: ["fixeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "die",
        correct: ["dying"],
        incorrect: ["dieing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "snow",
        correct: ["snowing"],
        incorrect: ["snowwing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "refer",
        correct: ["referring"],
        incorrect: ["refering"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "whisper",
        correct: ["whispering"],
        incorrect: ["whisperring"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "offer",
        correct: ["offering"],
        incorrect: ["offerring"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "tune",
        correct: ["tuning"],
        incorrect: ["tunning"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "take",
        correct: ["taking"],
        incorrect: ["takeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "come",
        correct: ["coming"],
        incorrect: ["comming"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hide",
        correct: ["hiding"],
        incorrect: ["hideing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "fake",
        correct: ["faking"],
        incorrect: ["fakking"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "boil",
        correct: ["boiling"],
        incorrect: ["boilling"],
        explenation: explenation
    }
] as BoardFaces

export {
title,
lessons,
icon
}


