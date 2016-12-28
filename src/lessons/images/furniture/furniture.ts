import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/furniture/';
const a = {
    armchair: s + 'armchair.png',
    bed: s + 'bed.png',
    chair: s + 'chair.png',
    closet: s + 'closet.png',
    cupboard: s + 'cupboard.png',
    door: s + 'door.png',
    mirror: s + 'mirror.png',
    office_chair: s + 'office_chair.png',
    pillow: s + 'pillow.png',
    sofa: s + 'sofa.png',
    stool: s + 'stool.png',
    table: s + 'table.png',
    toilet: s + 'toilet.png', //todo this is fixture not furniture
    window: s + 'window.png',

    //todo desk
}
const title = 'Furniture';
const info = 'Choose the correct furniture.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Armchair', correct: [a.armchair], incorrect: getRest(a, [a.armchair]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Bed', correct: [a.bed], incorrect: getRest(a, [a.bed]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Chair', correct: [a.chair], incorrect: getRest(a, [a.chair]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Cupboard', correct: [a.cupboard], incorrect: getRest(a, [a.cupboard, a.closet]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Closet', correct: [a.closet], incorrect: getRest(a, [a.closet, a.cupboard]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Door', correct: [a.door], incorrect: getRest(a, [a.door]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Mirror', correct: [a.mirror], incorrect: getRest(a, [a.mirror]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Office chair', correct: [a.office_chair], incorrect: getRest(a, [a.office_chair]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Pillow', correct: [a.pillow], incorrect: getRest(a, [a.pillow]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Sofa', correct: [a.sofa], incorrect: getRest(a, [a.sofa]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Stool', correct: [a.stool], incorrect: getRest(a, [a.stool]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Table', correct: [a.table], incorrect: getRest(a, [a.table]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Toilet', correct: [a.toilet], incorrect: getRest(a, [a.toilet]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Window', correct: [a.window], incorrect: getRest(a, [a.window]),
    }
]


export {
    title,
    lessons
}