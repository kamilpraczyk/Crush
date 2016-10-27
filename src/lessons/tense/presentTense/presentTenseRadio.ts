/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons, multi, capital } from '../../helper/constants';
import explenation = require('./explenation');

const common = [viewIds.radio];
const placeholder = "Simple Present Tense";
const title = "Simple Present Tense";
const lessons = [
    {
        id: id(common), title: title,
        name: "You " + space + " " + capital.nationalityAdj.English + ".",
        correct: ["speak"],
        incorrect: ["speaks", "speaking"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: capital.places.NewYork + " " + space + " a small city.",
        correct: ["is", "is not"],
        incorrect: ["are", "are not"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "You " + space + " " + capital.nationalityAdj.English + ".",
        correct: ["do not speak"],
        incorrect: ["do not speaking", "does not speak"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Windows " + space + " of glass.",
        correct: ["are made"],
        incorrect: ["is made", "not made"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Chickens " + space + " milk.",
        correct: ["do not drink"],
        incorrect: ["do not drinks", "does not drink"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "The bus does " + space + " at 10 " + capital.clock.am+", it " + space + " at 10 " + capital.clock.pm,
        correct: ["not arrive " + multi + " arrives"],
        incorrect: ["not arrive " + multi + " arrive", "not arrives " + multi + " arrives", "not arrive " + multi + " does arrive"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "When " + space + " class " + space + " tomorrow?",
        correct: ["does " + multi + " begin"],
        incorrect: ["do " + multi + " begin", "does " + multi + " begining"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "He " + space + " not need help now.",
        correct: ["does"],
        incorrect: ["do", "is", "will"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I " + space + " here now.",
        correct: ["am"],
        incorrect: ["was", "are", "did"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: capital.places.Barcelona + " " + space + " in the " + capital.countries.UnitedKingdom + ".",
        correct: ["is not"],
        incorrect: ["does not", "do not", "are not"],
        explenation: explenation,
        placeholder: placeholder
    }

] as BoardFaces

export {
title,
lessons,
}


