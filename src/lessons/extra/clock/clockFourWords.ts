/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, displayIds } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.fourWords, displayIds.digitalTime];
import _ = require("underscore");
const title = 'What time is it?';
const icon = icons.fourWords;

const lessons = [
    {
        id: id(common), title: title,
        name: "It's twenty-five past ten.",
        correct: ["10:25"],
        incorrect: ["10:35", "10:45", "09:25", "09:35", "05:25"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's quarter to four.",
        correct: ["03:45"],
        incorrect: ["03:15", "04:15", "03:30", "03:40", "04:45"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five past six.",
        correct: ["06:05"],
        incorrect: ["05:06", "06:55", "04:55", "06:50", "04:05"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twelve o'clock.",
        correct: ["12:00"],
        incorrect: ["00:00", "00:12", "12:06", "01:00", "12:30"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five to six.",
        correct: ["05:55"],
        incorrect: ["06:55", "05:05", "05:06", "06:05", "06:15"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's ten past nine.",
        correct: ["09:10"],
        incorrect: ["08:10", "10:09", "09:50", "08:50", "09:20"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty to nine.",
        correct: ["08:40"],
        incorrect: ["08:20", "09:20", "20:09", "08:50", "09:29"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's ten to ten.",
        correct: ["09:50"],
        incorrect: ["10:50", "10:10", "09:10", "09:05"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's half past four.",
        correct: ["04:30"],
        incorrect: ["03:30", "04:15", "03:04", "00:34", "03:15"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty-five to nine.",
        correct: ["08:35"],
        incorrect: ["09:35", "09:25", "08:25", "05:09", "10:35"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty to eight.",
        correct: ["07:40"],
        incorrect: ["08:40", "07:20", "02:08", "08:20", "07:02"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's twenty past six.",
        correct: ["06:20"],
        incorrect: ["02:06", "06:06", "02:20", "05:40", "05:20"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's quarter past three.",
        correct: ["03:30"],
        incorrect: ["03:15", "04:30", "15:30", "03:45", "03:03"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's quarter past four.",
        correct: ["04:15"],
        incorrect: ["03:15", "04:30", "15:40", "04:45", "03:45"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five to four.",
        correct: ["03:55"],
        incorrect: ["04:05", "03:50", "04:50", "05:04", "04:55"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five past four.",
        correct: ["04:05"],
        incorrect: ["05:05", "03:55", "04:50", "3:55", "04:15", "05:04"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's one o'clock.",
        correct: ["01:00"],
        incorrect: ["02:00", "12:00", "00:01", "10:00"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's half past eleven.",
        correct: ["11:30"],
        incorrect: ["12:30", "10:30", "03:30", "11:15"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's quarter to one.",
        correct: ["12:45"],
        incorrect: ["01:45", "01:30", "01:15", "12:15"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "It's five past two.",
        correct: ["02:05"],
        incorrect: ["01:05", "02:55", "02:50", "1:55", "02:15"],
        explenation: explenation
    },


] as BoardFaces


export {
title,
lessons,
icon
}
