/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../types';
import _ = require('underscore');
import {space, viewIds, id, getRest} from '../helper/constants';
import explenation = require('./explenation');

const common = [viewIds.fourPictures];
const s = 'img/animals/';
const a = {
    camel: s + 'camel.png',
    cat: s + 'cat.png',
    cow: s + 'cow.png',
    donky: s + 'donky.png',
    lamb: s + 'lamb.png',
    lion: s + 'lion.png',
    rat: s + 'rat.png',
    rabbit: s + 'rabbit.png',
    tiger: s + 'tiger.png',
    wolf: s + 'wolf.png',
}

const title = 'Animals';
const info = 'Choose the correct animal.'

const lessons = [
    {
        id: id(common), title, info, explenation,
        name: 'Camel',
        correct: [a.camel],
        incorrect: getRest(a, a.camel),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cat',
        correct: [a.cat],
        incorrect: getRest(a, a.cat),
    }, {
        id: id(common), title, info, explenation,
        name: "Cow",
        correct: [a.cow],
        incorrect: getRest(a, a.cow),
    }, {
        id: id(common), title, info, explenation,
        name: "Donkey",
        correct: [a.donky],
        incorrect: getRest(a, a.donky),
    }, {
        id: id(common), title, info, explenation,
        name: "Lamb",
        correct: [a.lamb],
        incorrect: getRest(a, a.lamb),
    }, {
        id: id(common), title, info, explenation,
        name: "Lion",
        correct: [a.lion],
        incorrect: getRest(a, a.lion),
    }, {
        id: id(common), title, info, explenation,
        name: "Rat",
        correct: [a.rat],
        incorrect: getRest(a, a.rat),
    }, {
        id: id(common), title, info, explenation,
        name: "Rabbit",
        correct: [a.rabbit],
        incorrect: getRest(a, a.rabbit),
    }, {
        id: id(common), title, info, explenation,
        name: "Tiger",
        correct: [a.tiger],
        incorrect: getRest(a, a.tiger),
    }, {
        id: id(common), title, info, explenation,
        name: "Wolf",
        correct: [a.wolf],
        incorrect: getRest(a, a.wolf),
    }
] as BoardFaces


export {
title,
lessons
}