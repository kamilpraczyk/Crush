import { RawData } from '../../../types';
import { space, TypeId, id, capital } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = "Collective nouns";
const info = 'Choose the correct collective noun.'

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "A " + space + " of termites.",
        correct: ["colony"],
        incorrect: ["litter", "pair", "flock"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of people.",
        correct: ["crowd"],
        incorrect: ["flight", "herd", "fleet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of acrobats.",
        correct: ["troupe"],
        incorrect: ["herd", "gaggle", "album"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of bushes.",
        correct: ["hedge"],
        incorrect: ["herd", "crowd", "army"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of directors.",
        correct: ["board"],
        incorrect: ["pride", "litter", "bouquet"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of rubbish.",
        correct: ["pile"],
        incorrect: ["flock", "troupe", "pair"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of rain.",
        correct: ["shower"],
        incorrect: ["herd", "gaggle", "bunch"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of snow.",
        correct: ["fall"],
        incorrect: ["crowd", "litter", "army"],
    }, {
        id: id(common), title, explenation, info,
        name: "A " + space + " of events.",
        correct: ["series"],
        incorrect: ["colony", "army", "troupe"],
    }, {
        id: id(common), title, explenation, info,
        name: "An " + space + " of ants.",
        correct: ["army"],
        incorrect: ["litter", "album", "fall"],
    }
]

export {
    title,
    lessons,
}

