/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {empty, space, viewIds, id, icons, multi, capital, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const common = [viewIds.radio];
const placeholder = "Present Continuous Tense";
const title = "Present Continuous Tense";
const lessons = [
    {
        id: id(common), title: title,
        name: "This work is good! Your handwriting " + space + " better and better.",
        correct: ["is getting"],
        incorrect: ["getting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Sorry, she can not come to the phone right now. She " + space + " a bath.",
        correct: ["is having"],
        incorrect: ["have", "has"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: space + " you " + space + " anything on " + capital.days.Saturday + " morning?",
        correct: ["Are " + multi + " doing"],
        incorrect: ["Do " + multi + " doing"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Where is " + getNameMale() + "? He is " + space + " soccer in the sports hall.",
        correct: ["playing"],
        incorrect: ["having"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I am " + space + " tired of you always coming late to class.",
        correct: ["getting"],
        incorrect: ["get"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: space + " you know if he is going next week?",
        correct: ["Do"],
        incorrect: ["Did", "Have"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "You " + space + " always " + space + " me when I am talking.",
        correct: ["are " + multi + " interrupting"],
        incorrect: [empty + " " + multi + " interrupting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Why " + space + " always raining in " + capital.countries.England + "?",
        correct: ["is it"],
        incorrect: [empty, "is"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "We can still play tennis. It is not " + space + " very hard.",
        correct: ["raining"],
        incorrect: ["rain"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "You " + space + " not " + space + " very hard today. Is anything wrong?",
        correct: ["are " + multi + " working"],
        incorrect: [empty + " " + multi + " worked"],
        explenation: explenation,
        placeholder: placeholder
    },
] as BoardFaces

export {
title,
lessons,
}


