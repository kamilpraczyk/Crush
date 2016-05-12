/// <reference path="../../../typings/tsd.d.ts" />
import {BoardFaces} from '../interface';
import _ = require('underscore');
import {space, viewIds, id, getRest} from '../helper/constants';
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

const common = [viewIds.fourPictures];

export =[
    {
        id: id(common),
        name: 'Camel',
        correct: [a.camel],
        incorrect: getRest(a, a.camel)
    }, {
        id: id(common),
        name: 'Cat',
        correct: [a.cat],
        incorrect: getRest(a, a.cat)
    }, {
        id: id(common),
        name: "Cow",
        correct: [a.cow],
        incorrect: getRest(a, a.cow)
    }, {
        id: id(common),
        name: "Donky",
        correct: [a.donky],
        incorrect: getRest(a, a.donky)
    }, {
        id: id(common),
        name: "Lamb",
        correct: [a.lamb],
        incorrect: getRest(a, a.lamb)
    }, {
        id: id(common),
        name: "Lion",
        correct: [a.lion],
        incorrect: getRest(a, a.lion)
    }, {
        id: id(common),
        name: "Rat",
        correct: [a.rat],
        incorrect: getRest(a, a.rat)
    }, {
        id: id(common),
        name: "Rabbit",
        correct: [a.rabbit],
        incorrect: getRest(a, a.rabbit)
    }, {
        id: id(common),
        name: "Tiger",
        correct: [a.tiger],
        incorrect: getRest(a, a.tiger)
    }, {
        id: id(common),
        name: "Wolf",
        correct: [a.wolf],
        incorrect: getRest(a, a.wolf)
    }
] as BoardFaces
