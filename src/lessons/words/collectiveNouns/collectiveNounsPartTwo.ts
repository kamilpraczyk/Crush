import { RawData } from '../../../types';
import { space, TypeId, id, capital } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = "Collective nouns";
const info = 'Choose the correct collective noun.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "A " + space + " of keys.",
        correct: ["bunch"],
        incorrect: ["flock", "school", "colony"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of piglets.",
        correct: ["litter"],
        incorrect: ["library", "school", "fleet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of horses.",
        correct: ["herd"],
        incorrect: ["school", "crowd", "gaggle"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of dogs.",
        correct: ["pack"],
        incorrect: ["flock", "colony", "fleet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of dolphins.",
        correct: ["school"],
        incorrect: ["pack", "herd", "litter"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of birds.",
        correct: ["flock"],
        incorrect: ["deck", "herd", "gaggle"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of books.",
        correct: ["library"],
        incorrect: ["colony", "gaggle", "crowd"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of employees.",
        correct: ["staff"],
        incorrect: ["pride", "litter", "album"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of cattle.",
        correct: ["herd"],
        incorrect: ["fleet", "pride", "swarm"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of dust.",
        correct: ["cloud"],
        incorrect: ["herd", "colony", "army"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of turkeys.",
        correct: ["flock"],
        incorrect: ["swarm", "herd", "army"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of ants.",
        correct: ["colony"],
        incorrect: ["pride", "pack", "choir"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of cubs.",
        correct: ["litter"],
        incorrect: ["flock", "herd", "school"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of ants.",
        correct: ["swarm"],
        incorrect: ["flock", "litter", "crew"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of insects.",
        correct: ["swarm"],
        incorrect: ["pack", "pride", "crew"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of stairs.",
        correct: ["flight"],
        incorrect: ["crowd", "pride", "herd"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of insects.",
        correct: ["flight"],
        incorrect: ["herd", "gaggle", "choir"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of artists.",
        correct: ["troupe"],
        incorrect: ["colony", "gaggle", "litter"],
    }, {
        id: id(common), title, explenation, info,
        name: "An " + space + " of stamps.",
        correct: ["album"],
        incorrect: ["flock", "pride", "litter"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of students.",
        correct: ["class"],
        incorrect: ["litter", "troupe", "bouquet"],
    }
]

export {
    title,
    lessons,
}

