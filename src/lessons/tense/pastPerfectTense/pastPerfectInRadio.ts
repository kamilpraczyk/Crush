import { RawData } from '../../../types';
import { TypeId, id, space, multi, capital, getNameFemale, empty } from '../../helper/constants';
import explenation = require('./explenation');
import _ = require('underscore');

const separator = " ";
const postfix = ".";
const common = [TypeId.radio];
const title = "Past Perfect Tense";
const info = 'Build the correct sentence in Past Perfect Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "When I woke up this morning, my wife " + space + " already eaten breakfast.",
        correct: ["had"],
        incorrect: ["have"]
    }, {
        id: id(common), title, explenation, info,
        name: space + " traveled to " + _.sample([5, 6, 7, 8, 9, 10]) + " different countries by the time I was 20 years old.",
        correct: ["I had"],
        incorrect: ["I have"]
    }, {
        id: id(common), title, explenation, info,
        name: "When I opened the cupboard, I discovered that someone " + space + " all the cookies.",
        correct: ["had eaten"],
        incorrect: ["has eaten"]
    }, {
        id: id(common), title, explenation, info,
        name: "By the end of the night, " + getNameFemale() + " " + space + " with everyone at the party.",
        correct: ["had talked"],
        incorrect: ["has talked"]
    }, {
        id: id(common), title, explenation, info,
        name: space + " " + capital.nationalityAdj.Japanese + " food until my trip to " + capital.cities.Tokyo + " last week.",
        correct: ["I'd never had"],
        incorrect: ["I've never had"]
    }, {
        id: id(common), title, explenation, info,
        name: "If only I had " + space + " more food.I'm hungry now.",
        correct: ["taken"],
        incorrect: ["take"]
    }, {
        id: id(common), title, explenation, info,
        name: "Had they " + space + "?",
        correct: ["decided"],
        incorrect: ["decide"]
    }, {
        id: id(common), title, explenation, info,
        name: "Before I went to the park, I " + space + " my dinner.",
        correct: ["had eaten"],
        incorrect: ["had eat"]
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " my work last month.",
        correct: ["had finished"],
        incorrect: ["had finish"]
    }, {
        id: id(common), title, explenation, info,
        name: "He " + space + " slept today.",
        correct: ["had not"],
        incorrect: ["had had not"]
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: "I was not hungry. I " + space + " just " + space + ".",
        correct: ["had " + multi + " eaten"],
        incorrect: ["had " + multi + " eat"]
    }, {
        id: id(common), title, explenation, info,
        name: "He had " + space + ".",
        correct: ["slept"],
        incorrect: ["sleep"]
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: "They " + space + " hungry. They had " + space + " for " + _.sample([2, 3, 4, 5, 6, 7, 8]) + " hours.",
        correct: ["were " + multi + " not eaten"],
        incorrect: ["were " + multi + " not ate"]
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: getNameFemale() + " " + space + " that she had " + space + " the window because of the rain.",
        correct: ["explained " + multi + " closed"],
        incorrect: ["explain " + multi + " closed"]
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: "He told me he " + space + " his homework, but he " + space + " to finish it on the train.",
        correct: ["hadn't done " + multi + " was hoping"],
        incorrect: ["hadn't done " + multi + " had hoping"]
    }, {
        id: id(common), title, explenation, info,
        name: " It " + space + " rained heavily last month.",
        correct: ["had not"],
        incorrect: ["not"]
    }, {
        id: id(common), title, explenation, info,
        name: "I had " + space + " the bike.",
        correct: ["ridden"],
        incorrect: ["ride"]
    }, {
        id: id(common), title, explenation, info,
        name: "He had " + space + " football.",
        correct: ["played"],
        incorrect: ["play"]
    }, {
        id: id(common), title, explenation, info,
        name: "She " + space + " us that the train had left.",
        correct: ["told"],
        incorrect: ["tell "]
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: " The film " + space + " not started before we " + space + " the cinema.",
        correct: ["had " + multi + " reached"],
        incorrect: [empty + " " + multi + " reached"]
    }
]

export {
    title,
    lessons,
}



