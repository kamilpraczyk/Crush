/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {empty, space, viewIds, id, multi, capital, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const common = [viewIds.radio];
const title = "Present Continuous Tense";
const info = 'Build the correct sentence.';
const lessons = [
    {
        id: id(common), title, explenation, info,
        name: "This work is good! Your handwriting " + space + " better and better.",
        correct: ["is getting"],
        incorrect: ["getting"],
    }, {
        id: id(common), title, explenation, info,
        name: "Sorry, she can not come to the phone right now. She " + space + " a bath.",
        correct: ["is having"],
        incorrect: ["have", "has"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " you " + space + " anything on " + capital.days.Saturday + " morning?",
        correct: ["Are " + multi + " doing"],
        incorrect: ["Do " + multi + " doing"],
    }, {
        id: id(common), title, explenation, info,
        name: "Where is " + getNameMale() + "? He is " + space + " soccer in the sports hall.",
        correct: ["playing"],
        incorrect: ["having"],
    }, {
        id: id(common), title, explenation, info,
        name: "I am " + space + " tired of you always coming late to class.",
        correct: ["getting"],
        incorrect: ["get"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " you know if he is going next week?",
        correct: ["Do"],
        incorrect: ["Did", "Have"],
    }, {
        id: id(common), title, explenation, info,
        name: "You " + space + " always " + space + " me when I am talking.",
        correct: ["are " + multi + " interrupting"],
        incorrect: [empty + " " + multi + " interrupting"],
    }, {
        id: id(common), title, explenation, info,
        name: "Why " + space + " always raining in " + capital.countries.England + "?",
        correct: ["is it"],
        incorrect: [empty, "is"],
    }, {
        id: id(common), title, explenation, info,
        name: "We can still play tennis. It is not " + space + " very hard.",
        correct: ["raining"],
        incorrect: ["rain"],
    }, {
        id: id(common), title, explenation, info,
        name: "You " + space + " not " + space + " very hard today. Is anything wrong?",
        correct: ["are " + multi + " working"],
        incorrect: [empty + " " + multi + " worked"],
    },
] as BoardFaces

export {
title,
lessons,
}


