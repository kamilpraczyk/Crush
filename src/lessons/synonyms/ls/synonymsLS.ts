/// <reference path="../../../../typings/tsd.d.ts" />
import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.multiRadio];
const title = 'Synonyms L-S';
const info = 'Find 3 synonymms for a word:';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "Love",
        correct: ["Like", "Admire", "Fancy"],
        incorrect: ["", "", "", "", ""] //TODO
    }, {
        id: id(common), title, info, explenation,
        name: "Make",
        correct: ["Create", "Design", "Manufacture"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Mark",
        correct: ["Label", "Tag", "Price"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Mischievous",
        correct: ["Naughty", "Roguish", "Prankish"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Move",
        correct: ["Go", "Crawl", "Hurry"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Moody",
        correct: ["Changeable", "Touchy", "Short-tempered"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Neat",
        correct: ["Clean", "Tidy", "Well-organized"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "New",
        correct: ["Fresh", "Recent", "Modern"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Old",
        correct: ["Ancient", "Aged", "Obsolete"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Part",
        correct: ["Portion", "Piece", "Share"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Place",
        correct: ["Area", "Location", "Space"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Plan",
        correct: ["Procedure", "Map", "Scheme"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Popular",
        correct: ["Well-liked", "Approved", "Accepted"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Put",
        correct: ["Place", "Set", "Attach"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Quiet",
        correct: ["Silent", "Mute", "Peaceful"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Right",
        correct: ["Suitable", "Proper", "Good"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Run",
        correct: ["Race", "Hurry", "Dash"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Say/Tell",
        correct: ["Inform", "Notify", "Advise"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Scared",
        correct: ["Afraid", "Terrified", "Skittish"],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Show",
        correct: ["Display", "Exhibit", "Reveal"],
        incorrect: ["", "", "", "", ""]
    }
]

export {
    title,
    lessons,
}
