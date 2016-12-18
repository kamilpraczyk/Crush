import { RawData } from '../../../types';
import { TypeId, id, capital, getNameFemale, getMonth, getNameMale, getCountry, getPossessiveNameMale, getNationalityAdj } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require('underscore');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Past Perfect Tense";
const info = 'Build the correct sentence in Past Perfect Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Had " + getNameFemale(), "ever studied", getNationalityAdj(), "before she moved", "here?"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Had " + getNameMale(), "studied " + capital.nationalityAdj.English, "before he moved to", capital.countries.England + "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameFemale(), "had never been", "to an opera", "before last night"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They had never", "seen a camel", "before they moved to " + capital.places.Africa],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["They had had", "that washing machine", "for " + _.sample([2, 4, 5, 6, 7, 8, 9]) + " years", "before it broke down"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "was very", "tired", "because she had not", "slept well"],
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Had", "not", "you", "finished?"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The bus", "had just left", "when I arrived", "at the bus stop"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "had just left", "the office", "when the boss arrived"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "had gone out", "when I arrived", "in the office"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale(), "had written", "the letter", "before you came home"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameFemale(), "had", "written", "a letter", "to " + getNameFemale()]
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["Had you", "seen", "the film", "before?"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameFemale(), "said she", "had already", "seen", "this movie before"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The film", "had started", "before", "they arrived"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["On the 10th of " + getMonth() + ", I had", "worked here", "for three", "months"]
    }, {
        id: id(common), title, explenation, info, postfix: '',
        name: separator,
        correct: ["I wish", "I had not", "gone to bed", "so late!"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["He would", "have passed", "the exam", "if he had studied harder"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I wish", "I had taken", "more food, I'm", "hungry now"]
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["As soon as", "he had done", "his homework,", "he went to bed"]
    }
]

export {
    title,
    lessons,
}



