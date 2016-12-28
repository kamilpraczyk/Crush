import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/technic/';
const a = {
    axe: s + 'axe.png',
    barbwire: s + 'barbwire.png',
    chain: s + 'chain.png',
    chainsaw: s + 'chainsaw.png',
    fan: s + 'fan.png',
    fire_hydrant: s + 'fire_hydrant.png',
    hammer: s + 'hammer.png',
    hand_saw: s + 'hand_saw.png',
    ladder: s + 'ladder.png',
    magnet: s + 'magnet.png',
    magnifier: s + 'magnifier.png',
    nails: s + 'nails.png',
    padlock: s + 'padlock.png',
    paint_brush: s + 'paint_brush.png',
    plier: s + 'plier.png',
    rope: s + 'rope.png',
    scissors: s + 'scissors.png',
    screw: s + 'screw.png',
    screwdriver: s + 'screwdriver.png',
    shovel: s + 'shovel.png',
    spanner: s + 'spanner.png',
}
const title = 'Technic';
const info = 'Choose the correct picture.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Axe', correct: [a.axe], incorrect: getRest(a, [a.axe]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Barbwire', correct: [a.barbwire], incorrect: getRest(a, [a.barbwire]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Chain', correct: [a.chain], incorrect: getRest(a, [a.chain]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Chainsaw', correct: [a.chainsaw], incorrect: getRest(a, [a.chainsaw, a.hand_saw]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Fan', correct: [a.fan], incorrect: getRest(a, [a.fan]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Fire hydrant', correct: [a.fire_hydrant], incorrect: getRest(a, [a.fire_hydrant]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Hammer', correct: [a.hammer], incorrect: getRest(a, [a.hammer]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Hand saw', correct: [a.hand_saw], incorrect: getRest(a, [a.hand_saw, a.chainsaw]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Ladder', correct: [a.ladder], incorrect: getRest(a, [a.ladder]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Magnet', correct: [a.magnet], incorrect: getRest(a, [a.magnet]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Magnifier', correct: [a.magnifier], incorrect: getRest(a, [a.magnifier]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Nails', correct: [a.nails], incorrect: getRest(a, [a.nails]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Padlock', correct: [a.padlock], incorrect: getRest(a, [a.padlock]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Paint brush', correct: [a.paint_brush], incorrect: getRest(a, [a.paint_brush]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Plier', correct: [a.plier], incorrect: getRest(a, [a.plier]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Rope', correct: [a.rope], incorrect: getRest(a, [a.rope]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Scissors', correct: [a.scissors], incorrect: getRest(a, [a.scissors]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Screw', correct: [a.screw], incorrect: getRest(a, [a.screw]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Screwdriver', correct: [a.screwdriver], incorrect: getRest(a, [a.screwdriver]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Shovel', correct: [a.shovel], incorrect: getRest(a, [a.shovel]),
    }, {
        id: id(common), title, info, explenation,
        name: 'Spanner', correct: [a.spanner], incorrect: getRest(a, [a.spanner]),
    }
]

export {
    title,
    lessons
}