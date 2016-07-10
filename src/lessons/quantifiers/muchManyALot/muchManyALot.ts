/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Quantifiers: much, many, a lot';

const lessons = [
    {
        id: id(common), title: title,
        name: "not " + space + " doctors",
        correct: ["many"],
        incorrect: ["much",],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " houses",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " coffee",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " sugar",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " women",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " time",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " money",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " cities",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " times",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "not " + space + " milk",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " money?",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " people?",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " milk?",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " work?",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " time?",
        correct: ["much",],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " children?",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " emails?",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " beer?",
        correct: ["much"],
        incorrect: ["many"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "How " + space + " countries?",
        correct: ["many"],
        incorrect: ["much"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "such a lot of children",
        correct: ["so many children"],
        incorrect: ["so much children"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "such a lot of times",
        correct: ["so many times"],
        incorrect: ["so much times"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "such a lot of work",
        correct: ["so much work"],
        incorrect: ["so many work"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "such a lot of houses",
        correct: ["so many houses"],
        incorrect: ["so much houses"],
        explenation: explenation
    },
] as BoardFaces


export {
title,
lessons,
}