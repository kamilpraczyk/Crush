import { RawData } from '../../../types';
import _ = require('underscore');
import { space, TypeId, id, getRest } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.fourPictures];
const s = 'img/nature/';
const a = {
    bush: s + 'bush.png',
    cactus: s + 'cactus.png',
    cloud: s + 'cloud.png',
    drops: s + 'drops.png',
    fire: s + 'fire.png',
    flame: s + 'flame.png',
    grass: s + 'grass.png',
    ice: s + 'ice.png',
    icicles: s + 'icicles.png',
    leaves: s + 'leaves.png',
    light: s + 'light.png',
    mushroom: s + 'mushroom.png',
    palm_tree: s + 'palm_tree.png',
    pine_cone: s + 'pine_cone.png',
    rain: s + 'rain.png',
    rainbow: s + 'rainbow.png',
    seashell: s + 'seashell.png',
    smoke: s + 'smoke.png',
    snowflakes: s + 'snowflakes.png',
    stones: s + 'stones.png',
    sun: s + 'sun.png',
    tree: s + 'tree.png',
    water: s + 'water.png',
}
const title = 'Nature';
const info = 'Choose the correct picture.'

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: 'Bush', correct: [a.bush], incorrect: getRest(a, [a.bush])
    }, {
        id: id(common), title, info, explenation,
        name: 'Cactus', correct: [a.cactus], incorrect: getRest(a, [a.cactus])
    }, {
        id: id(common), title, info, explenation,
        name: 'Cloud', correct: [a.cloud], incorrect: getRest(a, [a.cloud, a.smoke])
    }, {
        id: id(common), title, info, explenation,
        name: 'Drops', correct: [a.drops], incorrect: getRest(a, [a.drops])
    }, {
        id: id(common), title, info, explenation,
        name: 'Fire', correct: [a.fire], incorrect: getRest(a, [a.fire, a.flame])
    }, {
        id: id(common), title, info, explenation,
        name: 'Flame', correct: [a.flame], incorrect: getRest(a, [a.flame, a.fire])
    }, {
        id: id(common), title, info, explenation,
        name: 'Grass', correct: [a.grass], incorrect: getRest(a, [a.grass])
    }, {
        id: id(common), title, info, explenation,
        name: 'Ice', correct: [a.ice], incorrect: getRest(a, [a.ice])
    }, {
        id: id(common), title, info, explenation,
        name: 'Icicles', correct: [a.icicles], incorrect: getRest(a, [a.icicles])
    }, {
        id: id(common), title, info, explenation,
        name: 'Leaves', correct: [a.leaves], incorrect: getRest(a, [a.leaves])
    }, {
        id: id(common), title, info, explenation,
        name: 'Light', correct: [a.light], incorrect: getRest(a, [a.light, a.sun])
    }, {
        id: id(common), title, info, explenation,
        name: 'Mushroom', correct: [a.mushroom], incorrect: getRest(a, [a.mushroom])
    }, {
        id: id(common), title, info, explenation,
        name: 'Palm tree', correct: [a.palm_tree], incorrect: getRest(a, [a.palm_tree])
    }, {
        id: id(common), title, info, explenation,
        name: 'Pine cone', correct: [a.pine_cone], incorrect: getRest(a, [a.pine_cone])
    }, {
        id: id(common), title, info, explenation,
        name: 'Rain', correct: [a.rain], incorrect: getRest(a, [a.rain])
    }, {
        id: id(common), title, info, explenation,
        name: 'Rainbow', correct: [a.rainbow], incorrect: getRest(a, [a.rainbow])
    }, {
        id: id(common), title, info, explenation,
        name: 'Seashell', correct: [a.seashell], incorrect: getRest(a, [a.seashell])
    }, {
        id: id(common), title, info, explenation,
        name: 'Smoke', correct: [a.smoke], incorrect: getRest(a, [a.smoke, a.cloud])
    }, {
        id: id(common), title, info, explenation,
        name: 'Snowflakes', correct: [a.snowflakes], incorrect: getRest(a, [a.snowflakes])
    }, {
        id: id(common), title, info, explenation,
        name: 'Stones', correct: [a.stones], incorrect: getRest(a, [a.stones])
    }, {
        id: id(common), title, info, explenation,
        name: 'Sun', correct: [a.sun], incorrect: getRest(a, [a.sun, a.light])
    }, {
        id: id(common), title, info, explenation,
        name: 'Tree', correct: [a.tree], incorrect: getRest(a, [a.tree])
    }, {
        id: id(common), title, info, explenation,
        name: 'Water', correct: [a.water], incorrect: getRest(a, [a.water, a.drops])
    }
]

export {
    title,
    lessons
}