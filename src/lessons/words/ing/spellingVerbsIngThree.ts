/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Spellings verbs -ing';
const info = 'Find the correct form.'

const lessons = [
    {
        id: id(common), title, explenation, info,
        name: "feel",
        correct: ["feeling"],
        incorrect: ["feelling"],
    }, {
        id: id(common), title, explenation, info,
        name: "go",
        correct: ["going"],
        incorrect: ["goeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "have",
        correct: ["having"],
        incorrect: ["haveing"],
    }, {
        id: id(common), title, explenation, info,
        name: "take",
        correct: ["taking"],
        incorrect: ["takeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "sleep",
        correct: ["sleeping"],
        incorrect: ["sleepping"],
    }, {
        id: id(common), title, explenation, info,
        name: "happen",
        correct: ["happening"],
        incorrect: ["happeening"],
    }, {
        id: id(common), title, explenation, info,
        name: "get",
        correct: ["getting"],
        incorrect: ["geting"],
    }, {
        id: id(common), title, explenation, info,
        name: "enter",
        correct: ["entering"],
        incorrect: ["enterring"],
    }, {
        id: id(common), title, explenation, info,
        name: "fix",
        correct: ["fixing"],
        incorrect: ["fixeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "die",
        correct: ["dying"],
        incorrect: ["dieing"],
    }, {
        id: id(common), title, explenation, info,
        name: "snow",
        correct: ["snowing"],
        incorrect: ["snowwing"],
    }, {
        id: id(common), title, explenation, info,
        name: "refer",
        correct: ["referring"],
        incorrect: ["refering"],
    }, {
        id: id(common), title, explenation, info,
        name: "whisper",
        correct: ["whispering"],
        incorrect: ["whisperring"],
    }, {
        id: id(common), title, explenation, info,
        name: "offer",
        correct: ["offering"],
        incorrect: ["offerring"],
    }, {
        id: id(common), title, explenation, info,
        name: "tune",
        correct: ["tuning"],
        incorrect: ["tunning"],
    }, {
        id: id(common), title, explenation, info,
        name: "take",
        correct: ["taking"],
        incorrect: ["takeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "come",
        correct: ["coming"],
        incorrect: ["comming"],
    }, {
        id: id(common), title, explenation, info,
        name: "hide",
        correct: ["hiding"],
        incorrect: ["hideing"],
    }, {
        id: id(common), title, explenation, info,
        name: "fake",
        correct: ["faking"],
        incorrect: ["fakking"],
    }, {
        id: id(common), title, explenation, info,
        name: "boil",
        correct: ["boiling"],
        incorrect: ["boilling"],
    }
] as BoardFaces

export {
title,
lessons,
}


