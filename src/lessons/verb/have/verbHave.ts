/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, ids, id } from '../../helper/constants';
import explenation = require('./explenation');

export =[
    {
        id: id([ids.center]),
        name: "Have you got a book? Yes, " + space + ".",
        correct: ["I have"],
        incorrect: ["I have not", "he has"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have you got any cash? No, " + space + ".",
        correct: ["I have not"],
        incorrect: ["I have", "she has not"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have you got a boyfriend? Yes, " + space + ".",
        correct: ["I have"],
        incorrect: ["I have not", "I haven't"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Has Wilson got any money? No, " + space + ".",
        correct: ["he has not"],
        incorrect: ["he have", "he has"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have they got a new house? Yes, " + space + ".",
        correct: ["they have"],
        incorrect: ["they haven't", "they have not"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Has he got a job? No, " + space + ".",
        correct: ["he hasn't"],
        incorrect: ["he has", "she has not"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have you got " + space + " credit cards?",
        correct: ["any"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have you got " + space + " cash?",
        correct: ["any"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have you got any cash? Yes, I have " + space + ".",
        correct: ["some"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Has Sally got any books? Yes, she has " + space + ".",
        correct: ["some"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Has Peter got a credit card? Yes, he has " + space + ".",
        correct: ["one"],
        incorrect: ["some"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have you got any insurance? Yes, we have " + space + ".",
        correct: ["some"],
        incorrect: ["one"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Sam has " + space + " job.",
        correct: ["no"],
        incorrect: ["not"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Rob has " + space + " money this month.",
        correct: ["no"],
        incorrect: ["not"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "They have " + space + " time today.",
        correct: ["no"],
        incorrect: ["not"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I have " + space + " got any time today.",
        correct: ["not"],
        incorrect: ["no"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "She has " + space + " got any friends there.",
        correct: ["not"],
        incorrect: ["no"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Tom has " + space + " got a book",
        correct: ["not"],
        incorrect: ["no"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Have we got " + space + " batteries?",
        correct: ["any"],
        incorrect: ["some"],
        explenation: explenation
    }

] as BoardFaces
