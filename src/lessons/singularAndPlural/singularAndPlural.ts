import {RawData} from '../../types';
import {space, empty, TypeId, id } from '../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = 'Singular and Plural';
const info = 'Choose the correct answer.';

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: space + " email address",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " artists",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " intelligent actor",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " book",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " private email",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " cake",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " coffee shop",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " cities",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " house",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " hospital",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " old book",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " interesting city",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " actor",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " tiger",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " egg",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " lemon",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " club",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " engineer",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " emails",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " lemons",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " houses",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " flower",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " cash points",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " flowers",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " airport",
        correct: ["an"],
        incorrect: [empty, "a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " station",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " president",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " prime minister",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " friend",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " friends",
        correct: [empty],
        incorrect: ["a", "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " letter",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " postcard",
        correct: ["a"],
        incorrect: [empty, "an"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " coffees",
        correct: [empty],
        incorrect: ["a", "an"],
    }
] 

export {
title,
lessons,
}
