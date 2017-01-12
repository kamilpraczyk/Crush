import {RawData} from '../../../types';
import {space, TypeId, id, capital, getNameFemale, getNameMale, getSurname } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = "Verb: have, has";
const info = 'Choose the correct answer.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "Have you got a book? Yes, " + space + ".",
        correct: ["I have"],
        incorrect: ["I have not", "he has"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have you got any cash? No, " + space + ".",
        correct: ["I have not"],
        incorrect: ["I have", "she has not"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have you got a boyfriend? Yes, " + space + ".",
        correct: ["I have"],
        incorrect: ["I have not", "I haven't"],
    }, {
        id: id(common), title, explenation, info,
        name: "Has " + getSurname() + " got any money? No, " + space + ".",
        correct: ["he has not"],
        incorrect: ["he have", "he has"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have they got a new house? Yes, " + space + ".",
        correct: ["they have"],
        incorrect: ["they haven't", "they have not"],
    }, {
        id: id(common), title, explenation, info,
        name: "Has he got a job? No, " + space + ".",
        correct: ["he hasn't"],
        incorrect: ["he has", "she has not"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have you got " + space + " credit cards?",
        correct: ["any"],
        incorrect: ["one"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have you got " + space + " cash?",
        correct: ["any"],
        incorrect: ["one"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have you got any cash? Yes, I have " + space + ".",
        correct: ["some"],
        incorrect: ["one"],
    }, {
        id: id(common), title, explenation, info,
        name: "Has " + getNameFemale() + " got any books? Yes, she has " + space + ".",
        correct: ["some"],
        incorrect: ["one"],
    }, {
        id: id(common), title, explenation, info,
        name: "Has " + getNameMale() + " got a credit card? Yes, he has " + space + ".",
        correct: ["one"],
        incorrect: ["some"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have you got any insurance? Yes, we have " + space + ".",
        correct: ["some"],
        incorrect: ["one"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameMale() + " has " + space + " job.",
        correct: ["no"],
        incorrect: ["not"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameMale() + " has " + space + " money this month.",
        correct: ["no"],
        incorrect: ["not"],
    }, {
        id: id(common), title, explenation, info,
        name: "They have " + space + " time today.",
        correct: ["no"],
        incorrect: ["not"],
    }, {
        id: id(common), title, explenation, info,
        name: "I have " + space + " got any time today.",
        correct: ["not"],
        incorrect: ["no"],
    }, {
        id: id(common), title, explenation, info,
        name: "She has " + space + " got any friends there.",
        correct: ["not"],
        incorrect: ["no"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameMale() + " has " + space + " got a book",
        correct: ["not"],
        incorrect: ["no"],
    }, {
        id: id(common), title, explenation, info,
        name: "Have we got " + space + " batteries?",
        correct: ["any"],
        incorrect: ["some"],
    }

] 


export {
title,
lessons,
}