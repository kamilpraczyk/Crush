/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFaces} from '../interface';
import _ = require('underscore');
import {space, viewIds, id, getRest, icons} from '../helper/constants';

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
const icon = icons.fourPictures;

const common = [viewIds.fourPictures];

const lessons = [
    {
        id: id(common), title: title,
        name: 'Camel',
        correct: [a.camel],
        incorrect: getRest(a, a.camel)
    }, {
        id: id(common), title: title,
        name: 'Cat',
        correct: [a.cat],
        incorrect: getRest(a, a.cat)
    }, {
        id: id(common), title: title,
        name: "Cow",
        correct: [a.cow],
        incorrect: getRest(a, a.cow)
    }, {
        id: id(common), title: title,
        name: "Donky",
        correct: [a.donky],
        incorrect: getRest(a, a.donky)
    }, {
        id: id(common), title: title,
        name: "Lamb",
        correct: [a.lamb],
        incorrect: getRest(a, a.lamb)
    }, {
        id: id(common), title: title,
        name: "Lion",
        correct: [a.lion],
        incorrect: getRest(a, a.lion)
    }, {
        id: id(common), title: title,
        name: "Rat",
        correct: [a.rat],
        incorrect: getRest(a, a.rat)
    }, {
        id: id(common), title: title,
        name: "Rabbit",
        correct: [a.rabbit],
        incorrect: getRest(a, a.rabbit)
    }, {
        id: id(common), title: title,
        name: "Tiger",
        correct: [a.tiger],
        incorrect: getRest(a, a.tiger)
    }, {
        id: id(common), title: title,
        name: "Wolf",
        correct: [a.wolf],
        incorrect: getRest(a, a.wolf)
    }
] as BoardFaces


export {
title,
lessons,
icon
}