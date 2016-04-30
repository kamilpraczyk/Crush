/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, ids, id } from '../../helper/constants';
import explenation = require('./explenation');

export =[
    {
        id: id([ids.center]),
        name: "Not many cars",
        correct: ["a few cars"],
        incorrect: ["a little cars"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not much water",
        correct: ["a little water"],
        incorrect: ["a few water"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not much time",
        correct: ["a little time"],
        incorrect: ["a few time"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not much tea",
        correct: ["a little tea"],
        incorrect: ["a few tea"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not much milk",
        correct: ["a little milk"],
        incorrect: ["a few milk"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not many men",
        correct: ["a few men"],
        incorrect: ["a little men"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not many people",
        correct: ["a few people"],
        incorrect: ["a little people"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not many women",
        correct: ["a few women"],
        incorrect: ["a little women"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not much coffee",
        correct: ["a little coffee"],
        incorrect: ["a few coffee"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not many children",
        correct: ["a few children"],
        incorrect: ["a little children"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not much salt",
        correct: ["a little salt"],
        incorrect: ["a few salt"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "Not much money",
        correct: ["a little money"],
        incorrect: ["a few money"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "He has " + space + " plans",
        correct: ["a few"],
        incorrect: ["a little"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "I bought " + space + " newspapers",
        correct: ["a few"],
        incorrect: ["a little"],
        explenation: explenation
    },
    {
        id: id([ids.center]),
        name: "There is only " + space + " food in the refrigerator",
        correct: ["a little"],
        incorrect: ["a few"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I have got " + space + " friends",
        correct: ["a few"],
        incorrect: ["a little"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I have " + space + " flowers in my garden",
        correct: ["a few"],
        incorrect: ["a little"],
        explenation: explenation
    }
] as BoardFaces
