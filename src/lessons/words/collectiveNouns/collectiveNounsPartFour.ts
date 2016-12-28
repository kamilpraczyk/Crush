import { RawData } from '../../../types';
import { space, TypeId, id, capital } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = "Collective nouns";
const info = 'Choose the correct collective noun.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "A " + space + " of people.",
        correct: ["group"],
        incorrect: ["litter", "choir", "hedge"],
    }, {
        id: id(common), title, explenation, info,
        name: "An " + space + " of photographs.",
        correct: ["album"],
        incorrect: ["colony", "gaggle", "crowd"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of rice.",
        correct: ["bowl"],
        incorrect: ["herd", "crowd", "bunch"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of ships.",
        correct: ["fleet"],
        incorrect: ["crew", "swarm", "pack"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of penguins.",
        correct: ["colony"],
        incorrect: ["pride", "pile", "herd"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of wasps.",
        correct: ["colony"],
        incorrect: ["gaggle", "crowd", "herd"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of women.",
        correct: ["gaggle"],
        incorrect: ["swarm", "pride", "pair"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of spectators.",
        correct: ["crowd"],
        incorrect: ["swarm", "herd", "flock"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of things.",
        correct: ["bunch"],
        incorrect: ["pack", "school", "fleet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of camels.",
        correct: ["flock"],
        incorrect: ["deck", "crowd", "basket"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of flies.",
        correct: ["swarm"],
        incorrect: ["flock", "fleet", "litter"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of butterflies.",
        correct: ["swarm"],
        incorrect: ["litter", "bunch", "bowl"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of dragons.",
        correct: ["flight"],
        incorrect: ["library", "galaxy", "troupe"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of shoes.",
        correct: ["pair"],
        incorrect: ["colony", "crowd", "troupe"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of stars.",
        correct: ["galaxy"],
        incorrect: ["herd", "flock", "staff"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of lorries.",
        correct: ["fleet"],
        incorrect: ["pride", "colony", "school"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of flowers.",
        correct: ["bouquet"],
        incorrect: ["flock", "gaggle", "troupe"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of fruit.",
        correct: ["basket"],
        incorrect: ["colony", "troupe", "album"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of ostriches.",
        correct: ["pride"],
        incorrect: ["crowd", "gaggle", "swarm"],
    }, {
        id: id(common), title, explenation, info,
        name: "An " + space + " of soldiers.",
        correct: ["army"],
        incorrect: ["troupe", "pile", "bowl"],
    },
]

export {
    title,
    lessons,
}

