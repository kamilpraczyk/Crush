import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/tableware/';
const a = {
    cooking_pan: s + 'cooking_pan.png',
    cooking_pot: s + 'cooking_pot.png',
    corkscrew: s + 'corkscrew.png',
    cup: s + 'cup.png',
    fork: s + 'fork.png',
    frying_pan: s + 'frying_pan.png',
    glass: s + 'glass.png',
    kettle: s + 'kettle.png',
    knife: s + 'knife.png',
    mug: s + 'mug.png',
    plate: s + 'plate.png',
    salt_cellar: s + 'salt_cellar.png',
    serving_tray: s + 'serving_tray.png',
    spoon: s + 'spoon.png',
    wine_glass: s + 'wine_glass.png',

}
const title = 'Tableware';
const info = 'Choose the correct picture.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Cooking pan', correct: [a.cooking_pan], incorrect: getRest(a, [a.cooking_pan])
    }, {
        id: id(common), title, info, explenation,
        name: 'Cooking pot', correct: [a.cooking_pot], incorrect: getRest(a, [a.cooking_pot])
    }, {
        id: id(common), title, info, explenation,
        name: 'Corkscrew', correct: [a.corkscrew], incorrect: getRest(a, [a.corkscrew])
    }, {
        id: id(common), title, info, explenation,
        name: 'Cup', correct: [a.cup], incorrect: getRest(a, [a.cup, a.mug, a.glass])
    }, {
        id: id(common), title, info, explenation,
        name: 'Fork', correct: [a.fork], incorrect: getRest(a, [a.fork])
    }, {
        id: id(common), title, info, explenation,
        name: 'Frying pan', correct: [a.frying_pan], incorrect: getRest(a, [a.frying_pan])
    }, {
        id: id(common), title, info, explenation,
        name: 'Glass', correct: [a.glass], incorrect: getRest(a, [a.glass, a.wine_glass])
    }, {
        id: id(common), title, info, explenation,
        name: 'Kettle', correct: [a.kettle], incorrect: getRest(a, [a.kettle])
    }, {
        id: id(common), title, info, explenation,
        name: 'Knife', correct: [a.knife], incorrect: getRest(a, [a.knife])
    }, {
        id: id(common), title, info, explenation,
        name: 'Mug', correct: [a.mug], incorrect: getRest(a, [a.mug, a.cup, a.glass])
    }, {
        id: id(common), title, info, explenation,
        name: 'Plate', correct: [a.plate], incorrect: getRest(a, [a.plate])
    }, {
        id: id(common), title, info, explenation,
        name: 'Salt cellar', correct: [a.salt_cellar], incorrect: getRest(a, [a.salt_cellar])
    }, {
        id: id(common), title, info, explenation,
        name: 'Serving tray', correct: [a.serving_tray], incorrect: getRest(a, [a.serving_tray])
    }, {
        id: id(common), title, info, explenation,
        name: 'Spoon', correct: [a.spoon], incorrect: getRest(a, [a.spoon])
    }, {
        id: id(common), title, info, explenation,
        name: 'Wine glass', correct: [a.wine_glass], incorrect: getRest(a, [a.wine_glass, a.glass])
    }
]

export {
    title,
    lessons
}