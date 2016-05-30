/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio];
import _ = require("underscore");
const title = 'Location';
const icon = icons.radio;

const lessons = [
    {
        id: id(common), title: title,
        name: capital.places.Barcelona + " is " + space + " of " + capital.countries.Spain + ".",
        correct: ["in the east"],
        incorrect: ["the bottom", "across", "on top", "above"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The divers found a shipwreck " + space + " of the sea.",
        correct: ["at the bottom"],
        incorrect: ["in the centre", "across", "down"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The house stood at " + space + " the green hill.",
        correct: ["the top of"],
        incorrect: ["there", "above", "up", "opposite", "away"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "We spent all morning " + space + ", picking mushrooms in the woods.",
        correct: ["outdoors"],
        incorrect: ["opposite", "at the front of", "nowhere", "beyond"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The ship sank " + _.sample([2, 200, 165, 202, 3, 18, 22, 55, 700]) + " miles " + space + " the shore.",
        correct: ["off"],
        incorrect: ["below", "away", "outdoors", "local", "western", "northern", "worldwide"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "We stayed " + space + " because it was raining all day.",
        correct: ["indoors"],
        incorrect: ["north", "ahead of", "outdoors", "local", "western", "eastern"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The library is right there, " + space + " the street.",
        correct: ["across"],
        incorrect: ["south", "away", "below", "rear of"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "There is a narrow alley at " + space + " to the main street.",
        correct: ["an angle"],
        incorrect: ["parallel to", "perpendicular to", "in front of"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The tower stands " + space + " of the city.",
        correct: ["in the centre"],
        incorrect: ["from", "in here", "up"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "You can find this brand only in that store and " + space + " else.",
        correct: ["nowhere"],
        incorrect: ["everywhere", "there", "here"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The dog sat " + space + " " + capital.names.Suzan + ".",
        correct: ["beside"],
        incorrect: ["from", "off", "northern", "there"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The fish swims " + space + " the surface of the water.",
        correct: ["below"],
        incorrect: ["above", "in", "down", "worldwide"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "The baby is " + space + " the blanket.",
        correct: ["under"],
        incorrect: ["off", "nowhere", "there", "up"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "He is sitting " + space + " the computer.",
        correct: ["in front of"],
        incorrect: ["in the centre", "outdoors", "indoors", "down", "up"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "My keys are " + space + " my bag.",
        correct: ["in"],
        incorrect: ["in the centre", "widespread", "indoors", "nationwide"],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "Write your name " + space + " the line.",
        correct: ["below"],
        incorrect: ["from", "south", "away", "in "],
        explenation: explenation
    },
    {
        id: id(common), title: title,
        name: "There is a large garden at the " + space + " the property.",
        correct: ["back of"],
        incorrect: ["behind", "beyond", "below", "opposite"],
        explenation: explenation
    },


] as BoardFaces


export {
title,
lessons,
icon
}
