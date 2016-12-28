import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/fruits/';
const a = {
    apple: s + 'apple.png',
    apricot: s + 'apricot.png',
    avocado: s + 'avocado.png',
    banana: s + 'banana.png',
    cherry: s + 'cherry.png',
    coconut: s + 'coconut.png',
    dates: s + 'dates.png',
    grapes: s + 'grapes.png',
    grapefruit: s + 'grapefruit.png',
    kiwi: s + 'kiwi.png',
    lemon: s + 'lemon.png',
    mango: s + 'mango.png',
    melon: s + 'melon.png',
    orange: s + 'orange.png',
    olives: s + 'olives.png',
    peach: s + 'peach.png',
    pear: s + 'pear.png',
    persimmon: s + 'persimmon.png',
    pineapple: s + 'pineapple.png',
    plum: s + 'plum.png',
    pomegranate: s + 'pomegranate.png',
    raspberry: s + 'raspberry.png',
    strawberry: s + 'strawberry.png',
    watermelon: s + 'watermelon.png',
}

const title = 'Fruits';
const info = 'Choose the correct fruit.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Apple', correct: [a.apple], incorrect: getRest(a, [a.apple]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Apricot', correct: [a.apricot], incorrect: getRest(a, [a.apricot, a.peach]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Avocado', correct: [a.avocado], incorrect: getRest(a, [a.avocado]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Banana', correct: [a.banana], incorrect: getRest(a, [a.banana]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cherry', correct: [a.cherry], incorrect: getRest(a, [a.cherry]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Coconut', correct: [a.coconut], incorrect: getRest(a, [a.coconut]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Dates', correct: [a.dates], incorrect: getRest(a, [a.dates]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Grapes', correct: [a.grapes], incorrect: getRest(a, [a.grapes]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Grapefruit', correct: [a.grapefruit], incorrect: getRest(a, [a.grapefruit]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Kiwi', correct: [a.kiwi], incorrect: getRest(a, [a.kiwi]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Lemon', correct: [a.lemon], incorrect: getRest(a, [a.lemon]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Mango', correct: [a.mango], incorrect: getRest(a, [a.mango]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Melon', correct: [a.melon], incorrect: getRest(a, [a.melon]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Orange', correct: [a.orange], incorrect: getRest(a, [a.orange]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Olives', correct: [a.olives], incorrect: getRest(a, [a.olives]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Peach', correct: [a.peach], incorrect: getRest(a, [a.peach, a.apricot]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Pear', correct: [a.pear], incorrect: getRest(a, [a.pear]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Persimmon', correct: [a.persimmon], incorrect: getRest(a, [a.persimmon]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Pineapple', correct: [a.pineapple], incorrect: getRest(a, [a.pineapple]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Plum', correct: [a.plum], incorrect: getRest(a, [a.plum]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Pomegranate', correct: [a.pomegranate], incorrect: getRest(a, [a.pomegranate]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Raspberry', correct: [a.raspberry], incorrect: getRest(a, [a.raspberry]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Strawberry', correct: [a.strawberry], incorrect: getRest(a, [a.strawberry]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Watermelon', correct: [a.watermelon], incorrect: getRest(a, [a.watermelon]),
    }
]


export {
    title,
    lessons
}