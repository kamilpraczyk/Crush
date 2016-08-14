/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = "Reflexive Pronouns: myself, yourself, herself...";

const lessons = [
    {
        id: id(common), title: title,
        name: getNameMale() + ", you should not blame " + space + " for the accident.",
        correct: ["yourself"],
        incorrect: ["herself", "yourselves"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "Don't worry about her, she can amuse " + space + ".",
        correct: ["herself"],
        incorrect: ["himself", "itself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I just taught to " + space + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "Thet don't know us. We never introduced" + space + ".",
        correct: ["ourselves"],
        incorrect: ["ourself", "yourselves"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How do you turn this off? It turns " + space + " off.",
        correct: ["itself"],
        incorrect: ["herself", "himself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I cut " + space + " while shaving.",
        correct: ["myself"],
        incorrect: ["itself", "himself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "The members argued amongst " + space + " for an hour.",
        correct: ["themselves"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "We often ask " + space + " why we left " + capital.places.Manchester + ".",
        correct: ["ourselves"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He treated " + space + " to the cake.",
        correct: ["himself"],
        incorrect: ["herself", "itself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He " + space + " treated me to the cake.",
        correct: ["himself"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I thaught " + space + " " + capital.nationalityNoun.English + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }
] as BoardFaces


export {
title,
lessons,
}