/// <reference path="../../../../typings/tsd.d.ts" />
import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.multiRadio];
const title = 'Synonyms L-S';
const info = 'Find two synonymms for a word:';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "Love",
        correct: ["Like", "Admire", ""],
        incorrect: ["", "", "", "", ""] //TODO
    }, {
        id: id(common), title, info, explenation,
        name: "Make",
        correct: ["Create", "Design", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Mark",
        correct: ["Label", "Tag", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Mischievous",
        correct: ["Naughty", "Roguish", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Move",
        correct: ["Go", "Crawl", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Moody",
        correct: ["Changeable", "Touchy", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Neat",
        correct: ["Clean", "Tidy", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "New",
        correct: ["Fresh", "Recent", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Old",
        correct: ["Ancient", "Aged", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Part",
        correct: ["Portion", "Piece", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Place",
        correct: ["Area", "Location", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Plan",
        correct: ["Procedure", "Map", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Popular",
        correct: ["Well-liked", "Approved", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Put",
        correct: ["Place", "Set", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Quiet",
        correct: ["Silent", "Mute", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Right",
        correct: ["Suitable", "Proper", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Run",
        correct: ["Race", "Hurry", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Say/Tell",
        correct: ["Inform", "Notify", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Scared",
        correct: ["Afraid", "Terrified", ""],
        incorrect: ["", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Show",
        correct: ["Display", "Exhibit", ""],
        incorrect: ["", "", "", "", ""]
    }
] 

export {
    title,
    lessons,
}
