/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons, capital, getNameMale} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.inradio];
const title = "'An' or 'a'?";

const lessons = [
    {
        id: id(common), title: title,
        name: getNameMale() + " gave me " + space + " apple.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " table is big.",
        correct: ["A"],
        incorrect: ["An"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She gave me " + space + " kiss.",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I can see " + space + " herd of elephants.",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I'd like " + space + " orange.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "Would you like " + space + " drink?",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I'm getting " + space + " cat next week.",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "There's " + space + " insect in my hair!",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "Would you like " + space + " cup of tea?",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I'm putting together " + space + " album of photos for my nana.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I'm making " + space + " cheese sandwich.",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I need " + space + " x-ray because I hurt my leg.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I'm moving to " + space + " house in the city center this summer.",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I would like to be " + space + " actress.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " " + capital.abbreviations.UFO + " is unidentified flying object.",
        correct: ["A"],
        incorrect: ["An"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "That has " + space + " unknown answer.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I'll be ready in " + space + " hour.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I saw " + space + " elephant.",
        correct: ["an"],
        incorrect: ["a"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I saw " + space + " pink elephant.",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I was born in " + space + " town.",
        correct: ["a"],
        incorrect: ["an"],
        explenation: explenation
    }

] as BoardFaces

export {
title,
lessons,
}


