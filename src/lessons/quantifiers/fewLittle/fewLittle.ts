/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id} from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = 'Quantifiers: few, little';
const info = 'Choose the correct answer.';

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "Not many cars",
        correct: ["a few cars"],
        incorrect: ["a little cars"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not much water",
        correct: ["a little water"],
        incorrect: ["a few water"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not much time",
        correct: ["a little time"],
        incorrect: ["a few time"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not much tea",
        correct: ["a little tea"],
        incorrect: ["a few tea"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not much milk",
        correct: ["a little milk"],
        incorrect: ["a few milk"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not many men",
        correct: ["a few men"],
        incorrect: ["a little men"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not many people",
        correct: ["a few people"],
        incorrect: ["a little people"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not many women",
        correct: ["a few women"],
        incorrect: ["a little women"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not much coffee",
        correct: ["a little coffee"],
        incorrect: ["a few coffee"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not many children",
        correct: ["a few children"],
        incorrect: ["a little children"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not much salt",
        correct: ["a little salt"],
        incorrect: ["a few salt"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not much money",
        correct: ["a little money"],
        incorrect: ["a few money"],
    }, {
        id: id(common), title, explenation, info,
        name: "He has " + space + " plans",
        correct: ["a few"],
        incorrect: ["a little"],
    }, {
        id: id(common), title, explenation, info,
        name: "I bought " + space + " newspapers",
        correct: ["a few"],
        incorrect: ["a little"],
    }, {
        id: id(common), title, explenation, info,
        name: "There is only " + space + " food in the refrigerator",
        correct: ["a little"],
        incorrect: ["a few"],
    }, {
        id: id(common), title, explenation, info,
        name: "I have got " + space + " friends",
        correct: ["a few"],
        incorrect: ["a little"],
    }, {
        id: id(common), title, explenation, info,
        name: "I have " + space + " flowers in my garden",
        correct: ["a few"],
        incorrect: ["a little"],
    }
] 


export {
title,
lessons,
}