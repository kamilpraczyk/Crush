import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/vegetables/';
const a = {
    broccoli: s + 'broccoli.png',
    cabbage: s + 'cabbage.png',
    carrot: s + 'carrot.png',
    cauliflower: s + 'cauliflower.png',
    corn: s + 'corn.png',
    cucumber: s + 'cucumber.png',
    eggplant: s + 'eggplant.png',
    garlic: s + 'garlic.png',
    ginger: s + 'ginger.png',
    onion: s + 'onion.png',
    pepper: s + 'pepper.png',
    potato: s + 'potato.png',
    pumpkin: s + 'pumpkin.png',
    salad: s + 'salad.png',
    tomato: s + 'tomato.png',
}
const title = 'Vegetables';
const info = 'Choose the correct vegetable.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Broccoli', correct: [a.broccoli], incorrect: getRest(a, [a.broccoli]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cabbage', correct: [a.cabbage], incorrect: getRest(a, [a.cabbage]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Carrot', correct: [a.carrot], incorrect: getRest(a, [a.carrot]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cauliflower', correct: [a.cauliflower], incorrect: getRest(a, [a.cauliflower]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Corn', correct: [a.corn], incorrect: getRest(a, [a.corn]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cucumber', correct: [a.cucumber], incorrect: getRest(a, [a.cucumber]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Eggplant', correct: [a.eggplant], incorrect: getRest(a, [a.eggplant]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Garlic', correct: [a.garlic], incorrect: getRest(a, [a.garlic]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Ginger', correct: [a.ginger], incorrect: getRest(a, [a.ginger]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Onion', correct: [a.onion], incorrect: getRest(a, [a.onion]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Pepper', correct: [a.pepper], incorrect: getRest(a, [a.pepper]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Potato', correct: [a.potato], incorrect: getRest(a, [a.potato]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Pumpkin', correct: [a.pumpkin], incorrect: getRest(a, [a.pumpkin]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Salad', correct: [a.salad], incorrect: getRest(a, [a.salad]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Tomato', correct: [a.tomato], incorrect: getRest(a, [a.tomato]),
    }
]


export {
    title,
    lessons
}