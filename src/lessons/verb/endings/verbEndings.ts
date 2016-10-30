/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital, getNameFemale, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = "Verb endings: -s, -ed, -ing";
const info = 'Choose the correct tense.'
const PRESENT = 'PRESENT';
const PAST = 'PAST';
const FUTURE = 'FUTURE';


const lessons = [
    {
        id: id(common),
        title, explenation, info,
        name: "He jumps",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He kicked",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He saves",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He will be saving",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She lifted",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She will be grabbing",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She jumped",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She kicked",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He prefers",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She will be jumping",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He preferred",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She saved",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He gardened",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He will be gardening",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He gardens",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She grabbed",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "She will be kicking",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He lifts",
        correct: [PRESENT],
        incorrect: [PAST, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He lifted",
        correct: [PAST],
        incorrect: [PRESENT, FUTURE],
    }, {
        id: id(common),
        title, explenation, info,
        name: "He will be lifting",
        correct: [FUTURE],
        incorrect: [PRESENT, PAST],
    }

] as BoardFaces


export {
title,
lessons,
}