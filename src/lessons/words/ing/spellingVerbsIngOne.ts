/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Spellings verbs -ing';
const info = 'Find the correct form.'

const lessons = [
    {
        id: id(common), title, explenation, info,
        name: "hope",
        correct: ["hoping"],
        incorrect: ["hopeing", "hopping"],
    }, {
        id: id(common), title, explenation, info,
        name: "bake",
        correct: ["baking"],
        incorrect: ["bakeing", "bakking"],
    }, {
        id: id(common), title, explenation, info,
        name: "clap",
        correct: ["clapping"],
        incorrect: ["claping", "clapeing"],
    }, {
        id: id(common), title, explenation, info,
        name: "win",
        correct: ["winning"],
        incorrect: ["wining", "wineing"],
    }, {
        id: id(common), title, explenation, info,
        name: "spin",
        correct: ["spinning"],
        incorrect: ["spining", "spineing"],
    }, {
        id: id(common), title, explenation, info,
        name: "fit",
        correct: ["fitting"],
        incorrect: ["fiteing", "fiting"],
    }, {
        id: id(common), title, explenation, info,
        name: "slip",
        correct: ["slipping"],
        incorrect: ["slipeing", "sliping"],
    }, {
        id: id(common), title, explenation, info,
        name: "swim",
        correct: ["swimming"],
        incorrect: ["swiming", "swimmming"],
    }, {
        id: id(common), title, explenation, info,
        name: "make",
        correct: ["making"],
        incorrect: ["makeing", "makking"],
    }, {
        id: id(common), title, explenation, info,
        name: "shut",
        correct: ["shutting"],
        incorrect: ["shuting", "shuteing"],
    }, {
        id: id(common), title, explenation, info,
        name: "lose",
        correct: ["losing"],
        incorrect: ["lossing", "loseing"],
    }, {
        id: id(common), title, explenation, info,
        name: "file",
        correct: ["filing"],
        incorrect: ["filling", "fileing"],
    }, {
        id: id(common), title, explenation, info,
        name: "paste",
        correct: ["pasting"],
        incorrect: ["pasteing", "pastting"],
    }, {
        id: id(common), title, explenation, info,
        name: "hope",
        correct: ["hoping"],
        incorrect: ["hopeing", "hopping"],
    }, {
        id: id(common), title, explenation, info,
        name: "die",
        correct: ["dying"],
        incorrect: ["dieing", "diying"],
    }, {
        id: id(common), title, explenation, info,
        name: "chat",
        correct: ["chatting"],
        incorrect: ["chating", "chateing"],
    }, {
        id: id(common), title, explenation, info,
        name: "tie",
        correct: ["tying"],
        incorrect: ["tieing", "tiing"],
    }, {
        id: id(common), title, explenation, info,
        name: "confer",
        correct: ["conferring"],
        incorrect: ["confering", "confeying"],
    }, {
        id: id(common), title, explenation, info,
        name: "suffer",
        correct: ["suffering"],
        incorrect: ["sufferring", "sufferying"],
    }, {
        id: id(common), title, explenation, info,
        name: "spray",
        correct: ["spraying"],
        incorrect: ["spraing", "sprayying"],
    }
] as BoardFaces

export {
title,
lessons,
}


