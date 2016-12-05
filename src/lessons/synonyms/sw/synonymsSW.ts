/// <reference path="../../../../typings/tsd.d.ts" />
import { BoardFaces } from '../../../types';
import { viewIds, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.multiRadio];
const title = 'Synonyms S-W';
const info = 'Find two synonymms for a word:';

const lessons = [
    {
        id: id(common), title, info, explenation,
        name: "Slow",
        correct: ["Behind", "Unhurried"],
        incorrect: ["", ""], //TODO
    }, {
        id: id(common), title, info, explenation,
        name: "Stop",
        correct: ["End", "Finish"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Story",
        correct: ["Legend", "Tale"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Strange",
        correct: ["Odd", "Unusual"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Strong",
        correct: ["Powerful", "Intense"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Summit",
        correct: ["Peak", "Top"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Steady",
        correct: ["Constant", "Regular"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Sure",
        correct: ["Certain", "Positive"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Take",
        correct: ["Hold", "Capture"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Tell",
        correct: ["Disclose", "Reveal"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Terrible",
        correct: ["Awful", "Horrible"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Think",
        correct: ["Consider", "Assume"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Trouble",
        correct: ["Worry", "Distress"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "True",
        correct: ["Right", "Accurate"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Ugly",
        correct: ["Hideous", "Unpleasant"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Unhappy",
        correct: ["Miserable", "Unfortunate"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Uncertain",
        correct: ["Doubtful", "Questionable"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Use",
        correct: ["Spend", "Expend"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Weak",
        correct: ["Frail", "Fragile"],
        incorrect: ["", ""],
    }, {
        id: id(common), title, info, explenation,
        name: "Wrong",
        correct: ["Incorrect", "Mistaken"],
        incorrect: ["", ""],
    }
] as BoardFaces

export {
    title,
    lessons,
}
