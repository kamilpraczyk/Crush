/// <reference path="../../../../typings/tsd.d.ts" />
import { BoardFaces } from '../../../types';
import { viewIds, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.multiRadio];
const title = 'Synonyms G-L';
const info = 'Find two synonymms for a word:';

const lessons = [
    {
        id: id(common), title, info, explenation,
        name: "Get",
        correct: ["Acquire", "Obtain"],
        incorrect: ["", ""], //TODO
    }, {
        id: id(common), title, info, explenation,
        name: "Go",
        correct: ["Depart", "Disappear"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Good",
        correct: ["Excellent", "Wonderful"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Great",
        correct: ["Worthy", "Remarkable"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Gross",
        correct: ["Rude", "Improper"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Happy",
        correct: ["Pleased", "Contented"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Hate",
        correct: ["Dislike", "Disapprove"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Have",
        correct: ["Hold", "Own"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Help",
        correct: ["Aid", "Assist"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Hide",
        correct: ["Conceal", "Cover"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Hurry",
        correct: ["Rush", "Run"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Hurt",
        correct: ["Harm", "Damage"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Idea",
        correct: ["Concept", "Thought"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Important",
        correct: ["Vital", "Necessary"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Interesting",
        correct: ["Fascinating", "Engaging"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Keep",
        correct: ["Hold", "Retain"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Kill",
        correct: ["Execute", "Murder"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Lazy",
        correct: ["Indolent", "Sluggish"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Little",
        correct: ["Tiny", "Small"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Look",
        correct: ["Gaze", "See"],
        incorrect: ["", ""],
    }
] as BoardFaces

export {
    title,
    lessons,
}
