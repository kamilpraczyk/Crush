import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/insects/';
const a = {
    bee: s + 'bee.png',
    beetle: s + 'beetle.png',
    butterfly: s + 'butterfly.png',
    cockroach: s + 'cockroach.png',
    fly: s + 'fly.png',
    ladybug: s + 'ladybug.png',
    mosquito: s + 'mosquito.png',
    scorpion: s + 'scorpion.png',
    spider: s + 'spider.png',
}
const title = 'Insects';
const info = 'Choose the correct insect.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Bee', correct: [a.bee], incorrect: getRest(a, [a.bee]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Beetle', correct: [a.beetle], incorrect: getRest(a, [a.beetle]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Butterfly', correct: [a.butterfly], incorrect: getRest(a, [a.butterfly]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cockroach', correct: [a.cockroach], incorrect: getRest(a, [a.cockroach]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Fly', correct: [a.fly], incorrect: getRest(a, [a.fly]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Ladybug', correct: [a.ladybug], incorrect: getRest(a, [a.ladybug]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Mosquito', correct: [a.mosquito], incorrect: getRest(a, [a.mosquito]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Scorpion', correct: [a.scorpion], incorrect: getRest(a, [a.scorpion]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Spider', correct: [a.spider], incorrect: getRest(a, [a.spider]),
    }
]

export {
    title,
    lessons
}