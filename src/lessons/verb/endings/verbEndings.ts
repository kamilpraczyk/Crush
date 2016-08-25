/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital, getNameFemale, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = "Verb endings: -s, -ed, -ing";

const PRESENT = 'PRESENT';
const PAST = 'PAST';
const FUTURE = 'FUTURE';

const lessons = [
    {
        id: id(common), title: title,
        name: "He jumps",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He kicked",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He saves",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He will be saving",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She lifted",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She will be grabbing",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She jumped",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She kicked",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He prefers",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She will be jumping",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He preferred",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She saved",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He gardened",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He will be gardening",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He gardens",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She grabbed",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She will be kicking",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He lifts",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He lifted",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He will be lifting",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
        explenation: explenation
    }

] as BoardFaces


export {
title,
lessons,
}