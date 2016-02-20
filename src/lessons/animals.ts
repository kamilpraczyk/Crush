/// <reference path="../../typings/tsd.d.ts" />
import {BoardFaces} from '../stores/lesson/interface';
import _ = require('underscore');
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

function getRest(group: any, exclude: any): string[] {
    return _.chain(group).values().without(exclude).value();
}

export =[
    {
        id: 'camel',
        name: 'Camel',
        correct: [a.camel],
        incorrect: getRest(a, a.camel)
    }, {
        id: 'cat',
        name: 'Cat',
        correct: [a.cat],
        incorrect: getRest(a, a.cat)
    }, {
        id: 'cow',
        name: "Cow",
        correct: [a.cow],
        incorrect: getRest(a, a.cow)
    }, {
        id: 'donky',
        name: "Donky",
        correct: [a.donky],
        incorrect: getRest(a, a.donky)
    }, {
        id: 'lamb',
        name: "Lamb",
        correct: [a.lamb],
        incorrect: getRest(a, a.lamb)
    }, {
        id: 'lion',
        name: "Lion",
        correct: [a.lion],
        incorrect: getRest(a, a.lion)
    }, {
        id: 'rat',
        name: "Rat",
        correct: [a.rat],
        incorrect: getRest(a, a.rat)
    }, {
        id: 'rabbit',
        name: "Rabbit",
        correct: [a.rabbit],
        incorrect: getRest(a, a.rabbit)
    }, {
        id: 'tiger',
        name: "Tiger",
        correct: [a.tiger],
        incorrect: getRest(a, a.tiger)
    }, {
        id: 'wolf',
        name: "Wolf",
        correct: [a.wolf],
        incorrect: getRest(a, a.wolf)
    }
] as BoardFaces
