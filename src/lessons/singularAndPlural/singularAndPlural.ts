/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../types';
import {space, empty, viewIds, id, icons } from '../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Singular and Plural';

const lessons = [
    {
        id: id(common), title: title,
        name: space + " email address",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " artists",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " intelligent actor",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " book",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " private email",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " cake",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " coffee shop",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " cities",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " house",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " hospital",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " old book",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " interesting city",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " actor",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " tiger",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " egg",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " lemon",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " club",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " engineer",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " emails",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " lemons",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " houses",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " flower",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " cashpoints",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " flowers",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " airport",
        correct: ["an"],
        incorrect: [empty, "a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " station",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " president",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " prime minister",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " friend",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " friends",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " letter",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " postcard",
        correct: ["a"],
        incorrect: [empty, "an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " coffees",
        correct: [empty],
        incorrect: ["a", "an"],
        explenation: explenation
    }
] as BoardFaces

export {
title,
lessons,
}
