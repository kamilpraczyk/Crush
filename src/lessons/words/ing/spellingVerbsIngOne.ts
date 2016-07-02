/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
const title = 'Spellings verbs -ing';
const icon = icons.radio;

const lessons = [
    {
        id: id(common), title: title,
        name: "hope",
        correct: ["hoping"],
        incorrect: ["hopeing", "hopping"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "bake",
        correct: ["baking"],
        incorrect: ["bakeing", "bakking"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "clap",
        correct: ["clapping"],
        incorrect: ["claping", "clapeing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "win",
        correct: ["winning"],
        incorrect: ["wining", "wineing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "spin",
        correct: ["spinning"],
        incorrect: ["spining", "spineing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "fit",
        correct: ["fitting"],
        incorrect: ["fiteing", "fiting"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "slip",
        correct: ["slipping"],
        incorrect: ["slipeing", "sliping"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "swim",
        correct: ["swimming"],
        incorrect: ["swiming", "swimmming"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "make",
        correct: ["making"],
        incorrect: ["makeing", "makking"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "shut",
        correct: ["shutting"],
        incorrect: ["shuting", "shuteing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "lose",
        correct: ["losing"],
        incorrect: ["lossing", "loseing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "file",
        correct: ["filing"],
        incorrect: ["filling", "fileing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "paste",
        correct: ["pasting"],
        incorrect: ["pasteing", "pastting"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hope",
        correct: ["hoping"],
        incorrect: ["hopeing", "hopping"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "die",
        correct: ["dying"],
        incorrect: ["dieing", "diying"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "chat",
        correct: ["chatting"],
        incorrect: ["chating", "chateing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "tie",
        correct: ["tying"],
        incorrect: ["tieing", "tiing"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "confer",
        correct: ["conferring"],
        incorrect: ["confering", "confeying"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "suffer",
        correct: ["suffering"],
        incorrect: ["sufferring", "sufferying"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        name: "spray",
        correct: ["spraying"],
        incorrect: ["spraing", "sprayying"],
        explenation: explenation
    },

] as BoardFaces

export {
title,
lessons,
icon
}


