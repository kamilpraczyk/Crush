/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, multi, ids, id } from '../../helper/constants';
import explenation = require('./explenation');

export =[
    {
        id: id([ids.center]),
        name: "In this game, you " + space + " win " + space + " lose. It depends on you.",
        correct: ["either " + multi + " or"],
        incorrect: ["neither " + multi + " nor"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: space + " Bob " + space + " Sara will help you with your work. They are both busy at the moment.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I don't speak German. You don't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "She didn't like " + space + " of them.",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Doesn't he like " + space + " of them?",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Neither..." + space + "",
        correct: ["...nor"],
        incorrect: ["...or"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Either..." + space + "",
        correct: ["...or"],
        incorrect: ["...nor"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "We " + space + " a negative verb with 'neither'.",
        correct: ["don't use"],
        incorrect: ["use"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "We use a negative verb with " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "He isn't ready to go. We aren't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I cannot understand English. " + space + ".",
        correct: ["I can't either"],
        incorrect: ["Neither I"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I would like a glass of water. " + space + ".",
        correct: ["So would I"],
        incorrect: ["So either I"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I'm not happy. " + space + ".",
        correct: ["Neither am I"],
        incorrect: ["so either I"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I don't drink alcohol. " + space + ".",
        correct: ["Neither do I"],
        incorrect: ["So do I"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I have never won anything. " + space + ".",
        correct: ["Neither have I"],
        incorrect: ["I didn't either"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I hate driving. " + space + ".",
        correct: ["so do I"],
        incorrect: ["neither I"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "No one knows that lyrics. " + space + " my brother " + space + " my mother.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
        explenation: explenation
    }





] as BoardFaces


