/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];

export =[
    {
        id: id(common),
        name: "Jack, you should not blame " + space + " for the accident.",
        correct: ["yourself"],
        incorrect: ["herself", "yourselves"],
        explenation: explenation
    }, {
        id: id(common),
        name: "Don't worry about her, she can amuse " + space + ".",
        correct: ["herself"],
        incorrect: ["himself", "itself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I just taught to " + space + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "Thet don't know us. We never introduced" + space + ".",
        correct: ["ourselves"],
        incorrect: ["ourself", "yourselves"],
        explenation: explenation
    }, {
        id: id(common),
        name: "How do you turn this off? It turns " + space + " off.",
        correct: ["itself"],
        incorrect: ["herself", "himself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I cut " + space + " while shaving.",
        correct: ["myself"],
        incorrect: ["itself", "himself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "The members argued amongst " + space + " for an hour.",
        correct: ["themselves"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "We often ask " + space + " why we left Manchester.",
        correct: ["ourselves"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "He treated " + space + " to the cake.",
        correct: ["himself"],
        incorrect: ["herself", "itself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "He " + space + " treated me to the cake.",
        correct: ["himself"],
        incorrect: ["myself", "itself"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I thaught " + space + " English.",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
        explenation: explenation
    }
] as BoardFaces
