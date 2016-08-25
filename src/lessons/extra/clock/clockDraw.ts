/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, displayIds } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.draw, displayIds.digitalTime];
import _ = require("underscore");
const title = 'What time is it?';
const isHelp = true;
const lessons = [
    {
        id: id(common), title: title,
        name: "It's quarter to two.",
        correct: ["01:45"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twelve o'clock.",
        correct: ["12:00"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty-five past ten.",
        correct: ["10:25"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five past six.",
        correct: ["06:05"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five to seven.",
        correct: ["06:55"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's ten past eight.",
        correct: ["08:10"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's half past eleven.",
        correct: ["11:30"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty to two.",
        correct: ["01:40"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty past nine.",
        correct: ["09:20"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's quarter past three.",
        correct: ["03:30"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's quarter past three.",
        correct: ["03:15"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five to four.",
        correct: ["03:55"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five past five.",
        correct: ["05:05"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's ten to ten.",
        correct: ["09:50"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty to eight.",
        correct: ["07:40"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's three o'clock.",
        correct: ["01:00"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five past three.",
        correct: ["03:05"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's half past five.",
        correct: ["05:30"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty-five to ten.",
        correct: ["09:35"],
        isHelp: isHelp, explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's quarter to four.",
        correct: ["03:45"],
        isHelp: isHelp, explenation: explenation
    },


] as BoardFaces


export {
title,
lessons,
}
