/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id, capital, getNameFemale } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
import _ = require("underscore");
const title = 'Location';
const info = 'Choose the right answer.';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: capital.places.Barcelona + " is " + space + " of " + capital.countries.Spain + ".",
        correct: ["in the east"],
        incorrect: ["the bottom", "across", "on top", "above"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The divers found a shipwreck " + space + " of the sea.",
        correct: ["at the bottom"],
        incorrect: ["in the centre", "across", "down"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The house stood at " + space + " the green hill.",
        correct: ["the top of"],
        incorrect: ["there", "above", "up", "opposite", "away"],
    },
    {
        id: id(common), title, info, explenation,
        name: "We spent all morning " + space + ", picking mushrooms in the woods.",
        correct: ["outdoors"],
        incorrect: ["opposite", "at the front of", "nowhere", "beyond"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The ship sank " + _.sample([2, 200, 165, 202, 3, 18, 22, 55, 700]) + " miles " + space + " the shore.",
        correct: ["off"],
        incorrect: ["below", "away", "outdoors", "local", "western", "northern", "worldwide"],
    },
    {
        id: id(common), title, info, explenation,
        name: "We stayed " + space + " because it was raining all day.",
        correct: ["indoors"],
        incorrect: ["north", "ahead of", "outdoors", "local", "western", "eastern"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The library is right there, " + space + " the street.",
        correct: ["across"],
        incorrect: ["south", "away", "below", "rear of"],
    },
    {
        id: id(common), title, info, explenation,
        name: "There is a narrow alley at " + space + " to the main street.",
        correct: ["an angle"],
        incorrect: ["parallel to", "perpendicular to", "in front of"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The tower stands " + space + " of the city.",
        correct: ["in the centre"],
        incorrect: ["from", "in here", "up"],
    },
    {
        id: id(common), title, info, explenation,
        name: "You can find this brand only in that store and " + space + " else.",
        correct: ["nowhere"],
        incorrect: ["everywhere", "there", "here"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The dog sat " + space + " " + getNameFemale() + ".",
        correct: ["beside"],
        incorrect: ["from", "off", "northern", "there"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The fish swims " + space + " the surface of the water.",
        correct: ["below"],
        incorrect: ["above", "in", "down", "worldwide"],
    },
    {
        id: id(common), title, info, explenation,
        name: "The baby is " + space + " the blanket.",
        correct: ["under"],
        incorrect: ["off", "nowhere", "there", "up"],
    },
    {
        id: id(common), title, info, explenation,
        name: "He is sitting " + space + " the computer.",
        correct: ["in front of"],
        incorrect: ["in the centre", "outdoors", "indoors", "down", "up"],
    },
    {
        id: id(common), title, info, explenation,
        name: "My keys are " + space + " my bag.",
        correct: ["in"],
        incorrect: ["in the centre", "widespread", "indoors", "nationwide"],
    },
    {
        id: id(common), title, info, explenation,
        name: "Write your name " + space + " the line.",
        correct: ["below"],
        incorrect: ["from", "south", "away", "in "],
    },
    {
        id: id(common), title, info, explenation,
        name: "There is a large garden at the " + space + " the property.",
        correct: ["back of"],
        incorrect: ["behind", "beyond", "below", "opposite"],
    }
] 


export {
title,
lessons,
}
