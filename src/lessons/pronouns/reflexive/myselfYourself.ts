/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, ids, id } from '../../helper/constants';
import explenation = require('./explenation');

export =[
    {
        id: id([ids.center]),
        name: "Jack, you should not blame " + space + " for the accident.",
        correct: ["yourself"],
        incorrect: ["herself", "yourselves"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Don't worry about her, she can amuse " + space + ".",
        correct: ["herself"],
        incorrect: ["himself", "itself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I just taught to " + space + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Thet don't know us. We never introduced" + space + ".",
        correct: ["ourselves"],
        incorrect: ["ourself", "yourselves"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "How do you turn this off? It turns " + space + " off.",
        correct: ["itself"],
        incorrect: ["herself", "himself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I cut " + space + " while shaving.",
        correct: ["myself"],
        incorrect: ["itself", "himself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "The members argued amongst " + space + " for an hour.",
        correct: ["themselves"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "We often ask " + space + " why we left Manchester.",
        correct: ["ourselves"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "He treated " + space + " to the cake.",
        correct: ["himself"],
        incorrect: ["herself", "itself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "He " + space + " treated me to the cake.",
        correct: ["himself"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I thaught " + space + " English.",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }
] as BoardFaces
