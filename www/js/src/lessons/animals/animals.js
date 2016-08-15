"use strict";
var constants_1 = require('../helper/constants');
var explenation = require('./explenation');
var s = 'img/animals/';
var a = {
    camel: s + 'camel.png',
    cat: s + 'cat.png',
    cow: s + 'cow.png',
    donky: s + 'donky.png',
    lamb: s + 'lamb.png',
    lion: s + 'lion.png',
    rat: s + 'rat.png',
    rabbit: s + 'rabbit.png',
    tiger: s + 'tiger.png',
    wolf: s + 'wolf.png'
};
var title = 'Animals';
exports.title = title;
var common = [constants_1.viewIds.fourPictures];
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: 'Camel',
        correct: [a.camel],
        incorrect: constants_1.getRest(a, a.camel),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: 'Cat',
        correct: [a.cat],
        incorrect: constants_1.getRest(a, a.cat),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Cow",
        correct: [a.cow],
        incorrect: constants_1.getRest(a, a.cow),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Donky",
        correct: [a.donky],
        incorrect: constants_1.getRest(a, a.donky),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Lamb",
        correct: [a.lamb],
        incorrect: constants_1.getRest(a, a.lamb),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Lion",
        correct: [a.lion],
        incorrect: constants_1.getRest(a, a.lion),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Rat",
        correct: [a.rat],
        incorrect: constants_1.getRest(a, a.rat),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Rabbit",
        correct: [a.rabbit],
        incorrect: constants_1.getRest(a, a.rabbit),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Tiger",
        correct: [a.tiger],
        incorrect: constants_1.getRest(a, a.tiger),
        explenation: explenation
    }, {
        id: constants_1.id(common), title: title,
        name: "Wolf",
        correct: [a.wolf],
        incorrect: constants_1.getRest(a, a.wolf),
        explenation: explenation
    }
];
exports.lessons = lessons;
