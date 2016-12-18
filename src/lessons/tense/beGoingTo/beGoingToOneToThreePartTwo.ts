import { RawData } from '../../../types';
import { space, TypeId, id, capital, getNameFemale, getNameMale, getCountry, getPossessiveNameMale, getCity } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require('underscore');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Be going to";
const info = 'Build the correct sentence using "be going to" form.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I'm", "going to be", "an actor", "when I grow up"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You are", "going to be", "sick", "if you", "eat that"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We were", "going to buy", "a new car", "but then", "we changed our minds"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["We are not", "going to", "paint our bedroom", "tomorrow"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "is going", "to buy", "a new car"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["It was", "going to rain", "but suddenly", "the sun appeared"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I am", "going", "to go", "swimming"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["You were", "going to", "be my bridesmaid", "but then", "you slept with my fiancée"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["When", "are you", "going to go", "on holiday", "?"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Is she", "going to", "paint", "the house?"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["What time", "are we", "going to", "leave", "tomorrow?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "was going to college", "when his", "parents died", "in the plane crash"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "was", "going to", "call", "the doctor"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They have", "no economic", "advantage", "in going to war"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I was", "going to", "tell him", "but I forgot"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I am", "going to", "go", "and get some", "milk"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["It's 8.40!", "You're going to", "miss your bus!"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The Conservatives", "are going", "to win", "the election"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameFemale() + ' is', "going", "to the", "cinema", "tonight"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The sky", "is very black,", "it's", "going to snow"],
    }
]

export {
    title,
    lessons,
}



