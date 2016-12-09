/// <reference path="../../../../typings/tsd.d.ts" />
import { RawData } from '../../../types';
import { space, multi, TypeId, id, capital, getNameFemale, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = 'Either and Neither';
const info = 'Find the correct form.'

const lessons: RawData[] = [
    {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: "In this game, you " + space + " win " + space + " lose. It depends on you.",
        correct: ["either " + multi + " or"],
        incorrect: ["neither " + multi + " nor"],
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: space + " " + getNameMale() + " " + space + " " + getNameFemale() + " will help you with your work. They are both busy at the moment.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
    }, {
        id: id(common), title, explenation, info,
        name: "I don't speak " + capital.nationalityAdj.German + ". You don't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
    }, {
        id: id(common), title, explenation, info,
        name: "She didn't like " + space + " of them.",
        correct: ["either"],
        incorrect: ["neither"],
    }, {
        id: id(common), title, explenation, info,
        name: "Doesn't he like " + space + " of them?",
        correct: ["either"],
        incorrect: ["neither"],
    }, {
        id: id(common), title, explenation, info,
        name: "Neither... " + space,
        correct: ["...nor"],
        incorrect: ["...or"],
    }, {
        id: id(common), title, explenation, info,
        name: "Either... " + space,
        correct: ["...or"],
        incorrect: ["...nor"],
    }, {
        id: id(common), title, explenation, info,
        name: "We " + space + " a negative verb with 'neither'.",
        correct: ["don't use"],
        incorrect: ["use"],
    }, {
        id: id(common), title, explenation, info,
        name: "We use a negative verb with " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
    }, {
        id: id(common), title, explenation, info,
        name: "He isn't ready to go. We aren't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
    }, {
        id: id(common), title, explenation, info,
        name: "I cannot understand " + capital.nationalityAdj.English + ". " + space + ".",
        correct: ["I can't either"],
        incorrect: ["Neither I"],
    }, {
        id: id(common), title, explenation, info,
        name: "I would like a glass of water. " + space + ".",
        correct: ["So would I"],
        incorrect: ["So either I"],
    }, {
        id: id(common), title, explenation, info,
        name: "I'm not happy. " + space + ".",
        correct: ["Neither am I"],
        incorrect: ["so either I"],
    }, {
        id: id(common), title, explenation, info,
        name: "I don't drink alcohol. " + space + ".",
        correct: ["Neither do I"],
        incorrect: ["So do I"],
    }, {
        id: id(common), title, explenation, info,
        name: "I have never won anything. " + space + ".",
        correct: ["Neither have I"],
        incorrect: ["I didn't either"],
    }, {
        id: id(common), title, explenation, info,
        name: "I hate driving. " + space + ".",
        correct: ["so do I"],
        incorrect: ["neither I"],
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: "No one knows that lyrics. " + space + " my brother " + space + " my mother.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
    }
]

export {
    title,
    lessons,
}


