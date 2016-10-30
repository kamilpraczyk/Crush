/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital } from '../../helper/constants';
import explenation = require('./explenation');
const separator = " ";
const common = [viewIds.radio];
const title = "Present Perfect Continuous Tense";
const info = 'Build the correct sentence in Present Perfect Continuous Tense.';
const lessons = [
    {
        id: id(common), title, explenation, info,
        name: "She's " + space + " to her regularly for a couple of years.",
        correct: ["been writing"],
        incorrect: ["writing", "write"],
    }, {
        id: id(common), title, explenation, info,
        name: "I've " + space + " " + capital.nationalityAdj.Polish + " for 20 years and I still don't know very much.",
        correct: ["been learning"],
        incorrect: ["learning", "not been learning"],
    }, {
        id: id(common), title, explenation, info,
        name: "You look tired. " + space + " been sleeping properly?",
        correct: ["Have you"],
        incorrect: ["Did you", "Were you"],
    }, {
        id: id(common), title, explenation, info,
        name: "I've been waiting for him for 30 minutes and he still " + space + ".",
        correct: ["hasn't arrived"],
        incorrect: ["didn't arrived", "had not arrived"],
    }, {
        id: id(common), title, explenation, info,
        name: "You " + space + " good results over the last few months.",
        correct: ["have not been getting"],
        incorrect: ["have not getting", "You not getting"],
    }, {
        id: id(common), title, explenation, info,
        name: "I've been " + space + " for over an hour. I'm still waiting now.",
        correct: ["waiting"],
        incorrect: ["wait", "waited"],
    }, {
        id: id(common), title, explenation, info,
        name: "I have no money left because I've been " + space + ".",
        correct: ["shopping"],
        incorrect: ["no shopping", "in shop"],
    }, {
        id: id(common), title, explenation, info,
        name: "How long have you " + space + " " + capital.nationalityNoun.English + "?",
        correct: ["been learning"],
        incorrect: ["learning", "learn", "learned"],
    }, {
        id: id(common), title, explenation, info,
        name: "I've " + space + " here for a month.",
        correct: ["been living"],
        incorrect: ["live", "living"],
    }, {
        id: id(common), title, explenation, info,
        name: "Look at her eyes! I'm sure she has " + space + ".",
        correct: ["been crying"],
        incorrect: ["crying", "cry"],
    }
] as BoardFaces

export {
title,
lessons,
}


