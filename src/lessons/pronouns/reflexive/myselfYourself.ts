import { RawData } from '../../../types';
import { space, TypeId, id, capital, getNameMale, getCity } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = "Reflexive Pronouns: myself, yourself, herself...";
const info = 'Choose the correct answer.';

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: getNameMale() + ", you should not blame " + space + " for the accident.",
        correct: ["yourself"],
        incorrect: ["herself", "yourselves"],
    }, {
        id: id(common), title, explenation, info,
        name: "Don't worry about her, she can amuse " + space + ".",
        correct: ["herself"],
        incorrect: ["himself", "itself"],
    }, {
        id: id(common), title, explenation, info,
        name: "I just taught to " + space + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
    }, {
        id: id(common), title, explenation, info,
        name: "They don't know us. We never introduced" + space + ".",
        correct: ["ourselves"],
        incorrect: ["ourself", "yourselves"],
    }, {
        id: id(common), title, explenation, info,
        name: "How do you turn this off? It turns " + space + " off.",
        correct: ["itself"],
        incorrect: ["herself", "himself"],
    }, {
        id: id(common), title, explenation, info,
        name: "I cut " + space + " while shaving.",
        correct: ["myself"],
        incorrect: ["itself", "himself"],
    }, {
        id: id(common), title, explenation, info,
        name: "The members argued amongst " + space + " for an hour.",
        correct: ["themselves"],
        incorrect: ["ourselves", "itself"],
    }, {
        id: id(common), title, explenation, info,
        name: "We often ask " + space + " why we left " + getCity() + ".",
        correct: ["ourselves"],
        incorrect: ["myself", "itself"],
    }, {
        id: id(common), title, explenation, info,
        name: "He treated " + space + " to the cake.",
        correct: ["himself"],
        incorrect: ["herself", "itself"],
    }, {
        id: id(common), title, explenation, info,
        name: "He " + space + " treated me to the cake.",
        correct: ["himself"],
        incorrect: ["myself", "itself"],
    }, {
        id: id(common), title, explenation, info,
        name: "I thought " + space + " " + capital.nationalityNoun.English + ".",
        correct: ["myself"],
        incorrect: ["ourselves", "itself"],
    }
]


export {
    title,
    lessons,
}