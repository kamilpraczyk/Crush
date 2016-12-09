/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = 'Quantifiers: much, many, a lot';
const info = 'Choose the correct answer.';

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "Not " + space + " doctors",
        correct: ["many"],
        incorrect: ["much",],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " houses",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " coffee",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " sugar",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " women",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " time",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " money",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " cities",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " times",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "Not " + space + " milk",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " money?",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " people?",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " milk?",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " work?",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " time?",
        correct: ["much",],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " children?",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " emails?",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " beer?",
        correct: ["much"],
        incorrect: ["many"],
    }, {
        id: id(common), title, explenation, info,
        name: "How " + space + " countries?",
        correct: ["many"],
        incorrect: ["much"],
    }, {
        id: id(common), title, explenation, info,
        name: "Such a lot of children",
        correct: ["so many children"],
        incorrect: ["so much children"],
    }, {
        id: id(common), title, explenation, info,
        name: "Such a lot of times",
        correct: ["so many times"],
        incorrect: ["so much times"],
    }, {
        id: id(common), title, explenation, info,
        name: "Such a lot of work",
        correct: ["so much work"],
        incorrect: ["so many work"],
    }, {
        id: id(common), title, explenation, info,
        name: "Such a lot of houses",
        correct: ["so many houses"],
        incorrect: ["so much houses"],
    }
] 


export {
title,
lessons,
}