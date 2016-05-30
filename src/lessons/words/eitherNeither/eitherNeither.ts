/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, multi, viewIds, id, icons, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Either and Neither';
const icon = icons.radio;

const lessons = [
    {
        id: id(common), title: title,
        name: "In this game, you " + space + " win " + space + " lose. It depends on you.",
        correct: ["either " + multi + " or"],
        incorrect: ["neither " + multi + " nor"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: space + " " + capital.names.Bob +" " + space + " " + capital.names.Sara + " will help you with your work. They are both busy at the moment.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I don't speak " + capital.nationalityAdj.German + ". You don't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "She didn't like " + space + " of them.",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "Doesn't he like " + space + " of them?",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "Neither... " + space,
        correct: ["...nor"],
        incorrect: ["...or"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "Either... " + space,
        correct: ["...or"],
        incorrect: ["...nor"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "We " + space + " a negative verb with 'neither'.",
        correct: ["don't use"],
        incorrect: ["use"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "We use a negative verb with " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "He isn't ready to go. We aren't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I cannot understand " + capital.nationalityAdj.English + ". " + space + ".",
        correct: ["I can't either"],
        incorrect: ["Neither I"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I would like a glass of water. " + space + ".",
        correct: ["So would I"],
        incorrect: ["So either I"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I'm not happy. " + space + ".",
        correct: ["Neither am I"],
        incorrect: ["so either I"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I don't drink alcohol. " + space + ".",
        correct: ["Neither do I"],
        incorrect: ["So do I"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I have never won anything. " + space + ".",
        correct: ["Neither have I"],
        incorrect: ["I didn't either"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "I hate driving. " + space + ".",
        correct: ["so do I"],
        incorrect: ["neither I"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "No one knows that lyrics. " + space + " my brother " + space + " my mother.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
        explenation: explenation
    }


] as BoardFaces

export {
title,
lessons,
icon
}


