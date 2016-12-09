/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id, capital, getNameMale} from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.inradio];
const title = "'An' or 'a'?";
const info = 'Choose the correct answer.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: getNameMale() + " gave me " + space + " apple.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " table is big.",
        correct: ["A"],
        incorrect: ["An"],
    }, {
        id: id(common), title, explenation, info,
        name: "She gave me " + space + " kiss.",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "I can see " + space + " herd of elephants.",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "I'd like " + space + " orange.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: "Would you like " + space + " drink?",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "I'm getting " + space + " cat next week.",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "There's " + space + " insect in my hair!",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: "Would you like " + space + " cup of tea?",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "I'm putting together " + space + " album of photos for my nana.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: "I'm making " + space + " cheese sandwich.",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "I need " + space + " x-ray because I hurt my leg.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: "I'm moving to " + space + " house in the city center this summer.",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "I would like to be " + space + " actress.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " " + capital.abbreviations.UFO + " is unidentified flying object.",
        correct: ["A"],
        incorrect: ["An"],
    }, {
        id: id(common), title, explenation, info,
        name: "That has " + space + " unknown answer.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: "I'll be ready in " + space + " hour.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: "I saw " + space + " elephant.",
        correct: ["an"],
        incorrect: ["a"],
    }, {
        id: id(common), title, explenation, info,
        name: "I saw " + space + " pink elephant.",
        correct: ["a"],
        incorrect: ["an"],
    }, {
        id: id(common), title, explenation, info,
        name: "I was born in " + space + " town.",
        correct: ["a"],
        incorrect: ["an"],
    }
] 

export {
title,
lessons,
}


