/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons, capital } from '../../helper/constants';
import explenation = require('./explenation');
const separator = " ";
const common = [viewIds.radio];
const placeholder = "Present Perfect Continuous Tense";
const title = "Present Perfect Continuous Tense";
const lessons = [
    {
        id: id(common), title: title,
        name: "She's " + space + " to her regularly for a couple of years.",
        correct: ["been writing"],
        incorrect: ["writing", "write"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I've " + space + " " + capital.nationalityAdj.Polish + " for 20 years and I still don't know very much.",
        correct: ["been learning"],
        incorrect: ["learning", "not been learning"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "You look tired. " + space + " been sleeping properly?",
        correct: ["Have you"],
        incorrect: ["Did you", "Were you"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I've been waiting for him for 30 minutes and he still " + space + ".",
        correct: ["hasn't arrived"],
        incorrect: ["didn't arrived", "had not arrived"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "You " + space + " good results over the last few months.",
        correct: ["have not been getting"],
        incorrect: ["have not getting", "You not getting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I've been " + space + " for over an hour. I'm still waiting now.",
        correct: ["waiting"],
        incorrect: ["wait", "waited"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I have no money left because I've been " + space + ".",
        correct: ["shopping"],
        incorrect: ["no shopping", "in shop"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "How long have you " + space + " " + capital.nationalityNoun.English + "?",
        correct: ["been learning"],
        incorrect: ["learning", "learn", "learned"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "I've " + space + " here for a month.",
        correct: ["been living"],
        incorrect: ["live", "living"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Look at her eyes! I'm sure she has " + space + ".",
        correct: ["been crying"],
        incorrect: ["crying", "cry"],
        explenation: explenation,
        placeholder: placeholder
    }
] as BoardFaces

export {
title,
lessons,
}


