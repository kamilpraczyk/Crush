/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, displayIds } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
import _ = require("underscore");
const title = 'What time is it?';

const lessons = [
    {
        id: id(common, [displayIds.analogTime]), title: title,
        info: "11:50",
        name: space,
        correct: ["It's ten to twelve."],
        incorrect: ["It's ten past eleven.", "It's ten past twelve."],
        explenation: explenation
    },
    {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "06:15",
        name: space,
        correct: ["It's a quarter past six."],
        incorrect: ["It's half past three.", "It's a quarter to six."],
        explenation: explenation
    },
    {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "03:55",
        name: space,
        correct: ["It's five to four."],
        incorrect: ["It's five past three.", "It's five past four."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "08:40",
        name: space,
        correct: ["It's twenty to nine."],
        incorrect: ["It's nine to twenty.", "It's twenty past eight."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "04:45",
        name: space,
        correct: ["It's a quarter to five."],
        incorrect: ["It's a quarter past five.", "It's a quarter past four."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "02:25",
        name: space,
        correct: ["It's twenty-five past two."],
        incorrect: ["It's twenty-five to two.", "It's half past two."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "01:10",
        name: space,
        correct: ["It's ten past one."],
        incorrect: ["It's one to ten.", "It's one past ten.", "It's ten to one."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "01:30",
        name: space,
        correct: ["It's half past one."],
        incorrect: ["It's one past half.", "It's half to one.", "It's one to half."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "01:45",
        name: space,
        correct: ["It's quarter to two."],
        incorrect: ["It's quarter past two.", "It's quarter past one.", "It's quarter to one."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "02:00",
        name: space,
        correct: ["It's two o'clock."],
        incorrect: ["It's o'clock past two.", "It's twelve past two.", "It's two past twelve."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "02:21",
        name: space,
        correct: ["It's twenty-one past two."],
        incorrect: ["It's twenty-one to two.", "It's two past twenty-one.", "It's two to twenty-one."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "03:05",
        name: space,
        correct: ["It's five past three."],
        incorrect: ["It's three to five.", "It's three past five.", "It's five to three."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "04:20",
        name: space,
        correct: ["It's twenty past four."],
        incorrect: ["It's four past twenty.", "It's twenty to four.", "It's twenty to five."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "05:35",
        name: space,
        correct: ["It's twenty-five to six."],
        incorrect: ["It's twenty-five past six.", "It's twenty-five past five.", "It's twenty-five to five."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "04:50",
        name: space,
        correct: ["It's ten to five."],
        incorrect: ["It's ten past five.", "It's five to six.", "It's five past ten."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "08:15",
        name: space,
        correct: ["It's quarter past eight."],
        incorrect: ["It's quarter to eight.", "It's eight past fifteen.", "It's quarter to fifteen."],
        explenation: explenation
    },
    {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "05:00",
        name: space,
        correct: ["It's five o'clock."],
        incorrect: ["It's five past twelve.", "It's zero past five.", "It's five past zero.", "It's zero o'clock."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "06:30",
        name: space,
        correct: ["It's half past six."],
        incorrect: ["It's six o'clock.", "It's half past to six.", "It's half past seven."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "06:40",
        name: space,
        correct: ["It's twenty to seven."],
        incorrect: ["It's twenty past seven.", "It's twenty to six.", "It's twenty past six."],
        explenation: explenation
    }, {
        id: id(common, [displayIds.digitalTime]), title: title,
        info: "07:55",
        name: space,
        correct: ["It's five to eight."],
        incorrect: ["It's five to seven.", "It's eight past five.", "It's five past eight."],
        explenation: explenation
    },

] as BoardFaces


export {
title,
lessons,
}
