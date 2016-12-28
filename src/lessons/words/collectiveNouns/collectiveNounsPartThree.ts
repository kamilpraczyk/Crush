import { RawData } from '../../../types';
import { space, TypeId, id, capital } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = "Collective nouns";
const info = 'Choose the correct collective noun.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "A " + space + " of trees.",
        correct: ["forest"],
        incorrect: ["herd", "crowd", "litter"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of sailors.",
        correct: ["crew"],
        incorrect: ["colony", "gaggle", "troupe"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of soldiers.",
        correct: ["squad"],
        incorrect: ["herd", "pride", "album"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of goats.",
        correct: ["herd"],
        incorrect: ["army", "fleet", "swarm"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of cards.",
        correct: ["pack"],
        incorrect: ["library", "litter", "cloud"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of whales.",
        correct: ["school"],
        incorrect: ["gaggle", "herd", "flock"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of bananas.",
        correct: ["bunch"],
        incorrect: ["pack", "flock", "fleet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of bees.",
        correct: ["swarm"],
        incorrect: ["pack", "litter", "album"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of lies.",
        correct: ["pack"],
        incorrect: ["gaggle", "litter", "flight"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of rats.",
        correct: ["swarm"],
        incorrect: ["pride", "album", "bowl"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of swallows.",
        correct: ["flight"],
        incorrect: ["litter", "crew", "school"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of butterflies.",
        correct: ["flight"],
        incorrect: ["pack", "crew", "shower"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of dancers.",
        correct: ["group"],
        incorrect: ["gaggle", "choir", "staff"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of dancers.",
        correct: ["troupe"],
        incorrect: ["album", "basket", "staff"],
    }, {
        id: id(common), title, explenation, info,
        name: "An " + space + " of autographs.",
        correct: ["album"],
        incorrect: ["army", "troupe", "bouquet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of singers.",
        correct: ["choir"],
        incorrect: ["herd", "shower", "staff"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of donkeys.",
        correct: ["herd"],
        incorrect: ["colony", "pride", "bunch"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of wood.",
        correct: ["stack"],
        incorrect: ["flock", "colony", "bouquet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of idiots.",
        correct: ["bunch"],
        incorrect: ["school", "fleet", "litter"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of kittens.",
        correct: ["litter"],
        incorrect: ["flock", "crew", "galaxy"],
    }
]

export {
    title,
    lessons,
}

