import { RawData } from '../../../types';
import { space, TypeId, id, capital } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = "Collective nouns";
const info = 'Choose the correct collective noun.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "A " + space + " of swans.",
        correct: ["herd"],
        incorrect: ["album", "stack", "swarm"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of coyotes.",
        correct: ["pack"],
        incorrect: ["fleet", "herd", "school"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of fish.",
        correct: ["school"],
        incorrect: ["fleet", "herd", "flock"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of sharks.",
        correct: ["school"],
        incorrect: ["pack", "staff", "squad"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of elephants.",
        correct: ["herd"],
        incorrect: ["deck", "pride", "gaggle", "pack"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of tourists.",
        correct: ["flock"],
        incorrect: ["crew", "pride", "pile"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of cars.",
        correct: ["fleet"],
        incorrect: ["class", "litter", "pile"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of wolves.",
        correct: ["pack"],
        incorrect: ["flock", "school", "cloud"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of rabbits.",
        correct: ["colony"],
        incorrect: ["gaggle", "crowd", "album"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of geese.",
        correct: ["gaggle"],
        incorrect: ["herd", "pride", "staff"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of onlookers.",
        correct: ["crowd"],
        incorrect: ["litter", "stack", "pack"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of sheep.",
        correct: ["flock"],
        incorrect: ["deck", "pride", "stack"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of lions.",
        correct: ["pride"],
        incorrect: ["herd", "flight", "swarm"],
    }, {
        id: id(common), title, explenation, info,
        name: "An " + space + " of ants.",
        correct: ["army"],
        incorrect: ["litter", "album", "fall"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of rats.",
        correct: ["colony"],
        incorrect: ["litter", "galaxy", "hedge"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of flowers.",
        correct: ["bunch"],
        incorrect: ["pack", "herd", "school"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of puppies.",
        correct: ["litter"],
        incorrect: ["herd", "flock", "crew"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of islands.",
        correct: ["group"],
        incorrect: ["army", "litter", "staff"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of performers.",
        correct: ["troupe"],
        incorrect: ["flock", "album", "choir"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of grapes.",
        correct: ["bunch"],
        incorrect: ["galaxy", "hedge", "herd"],
    }
]

export {
    title,
    lessons,
}

