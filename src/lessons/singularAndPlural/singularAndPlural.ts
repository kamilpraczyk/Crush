/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFaces} from '../interface';
import {space, empty, viewIds, idsCss, id } from '../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio, idsCss.center];

export =[
    {
        id: id(common),
        name: space + " email address",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + " artists",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + " intelligent actor",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + " book",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + " private email",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + " cake",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + " coffee shop",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "cities",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "house",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "hospital",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "old book",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "interesting city",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "actor",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "tiger",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "egg",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "lemon",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "club",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "engineer",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "emails",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "lemons",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "houses",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "flower",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "cashpoints",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "flowers",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "airport",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "station",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "president",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "prime minister",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "friend",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "friends",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "letter",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "postcard",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + "coffees",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }
] as BoardFaces
