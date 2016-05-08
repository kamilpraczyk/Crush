/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, multi, viewIds, idsCss, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio, idsCss.center];

export =[
    {
        id: id(common),
        name: "In this game, you " + space + " win " + space + " lose. It depends on you.",
        correct: ["either " + multi + " or"],
        incorrect: ["neither " + multi + " nor"],
        explenation: explenation
    }, {
        id: id(common),
        name: space + " Bob " + space + " Sara will help you with your work. They are both busy at the moment.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I don't speak German. You don't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common),
        name: "She didn't like " + space + " of them.",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common),
        name: "Doesn't he like " + space + " of them?",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common),
        name: "Neither..." + space + "",
        correct: ["...nor"],
        incorrect: ["...or"],
        explenation: explenation
    }, {
        id: id(common),
        name: "Either..." + space + "",
        correct: ["...or"],
        incorrect: ["...nor"],
        explenation: explenation
    }, {
        id: id(common),
        name: "We " + space + " a negative verb with 'neither'.",
        correct: ["don't use"],
        incorrect: ["use"],
        explenation: explenation
    }, {
        id: id(common),
        name: "We use a negative verb with " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common),
        name: "He isn't ready to go. We aren't " + space + ".",
        correct: ["either"],
        incorrect: ["neither"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I cannot understand English. " + space + ".",
        correct: ["I can't either"],
        incorrect: ["Neither I"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I would like a glass of water. " + space + ".",
        correct: ["So would I"],
        incorrect: ["So either I"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I'm not happy. " + space + ".",
        correct: ["Neither am I"],
        incorrect: ["so either I"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I don't drink alcohol. " + space + ".",
        correct: ["Neither do I"],
        incorrect: ["So do I"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I have never won anything. " + space + ".",
        correct: ["Neither have I"],
        incorrect: ["I didn't either"],
        explenation: explenation
    }, {
        id: id(common),
        name: "I hate driving. " + space + ".",
        correct: ["so do I"],
        incorrect: ["neither I"],
        explenation: explenation
    }, {
        id: id(common),
        name: "No one knows that lyrics. " + space + " my brother " + space + " my mother.",
        correct: ["Neither " + multi + " nor"],
        incorrect: ["Either " + multi + " or"],
        explenation: explenation
    }





] as BoardFaces


