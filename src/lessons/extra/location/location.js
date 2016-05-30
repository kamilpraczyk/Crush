var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var _ = require("underscore");
var title = 'Location';
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.places.Barcelona + " is " + constants_1.space + " of " + constants_1.capital.countries.Spain + ".",
        correct: ["in the east"],
        incorrect: ["the bottom", "across", "on top", "above"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The divers found a shipwreck " + constants_1.space + " of the sea.",
        correct: ["at the bottom"],
        incorrect: ["in the centre", "across", "down"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The house stood at " + constants_1.space + " the green hill.",
        correct: ["the top of"],
        incorrect: ["there", "above", "up", "opposite", "away"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "We spent all morning " + constants_1.space + ", picking mushrooms in the woods.",
        correct: ["outdoors"],
        incorrect: ["opposite", "at the front of", "nowhere", "beyond"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The ship sank " + _.sample([2, 200, 165, 202, 3, 18, 22, 55, 700]) + " miles " + constants_1.space + " the shore.",
        correct: ["off"],
        incorrect: ["below", "away", "outdoors", "local", "western", "northern", "worldwide"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "We stayed " + constants_1.space + " because it was raining all day.",
        correct: ["indoors"],
        incorrect: ["north", "ahead of", "outdoors", "local", "western", "eastern"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The library is right there, " + constants_1.space + " the street.",
        correct: ["across"],
        incorrect: ["south", "away", "below", "rear of"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "There is a narrow alley at " + constants_1.space + " to the main street.",
        correct: ["an angle"],
        incorrect: ["parallel to", "perpendicular to", "in front of"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The tower stands " + constants_1.space + " of the city.",
        correct: ["in the centre"],
        incorrect: ["from", "in here", "up"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "You can find this brand only in that store and " + constants_1.space + " else.",
        correct: ["nowhere"],
        incorrect: ["everywhere", "there", "here"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The dog sat " + constants_1.space + " " + constants_1.capital.names.Suzan + ".",
        correct: ["beside"],
        incorrect: ["from", "off", "northern", "there"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The fish swims " + constants_1.space + " the surface of the water.",
        correct: ["below"],
        incorrect: ["above", "in", "down", "worldwide"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "The baby is " + constants_1.space + " the blanket.",
        correct: ["under"],
        incorrect: ["off", "nowhere", "there", "up"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "He is sitting " + constants_1.space + " the computer.",
        correct: ["in front of"],
        incorrect: ["in the centre", "outdoors", "indoors", "down", "up"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "My keys are " + constants_1.space + " my bag.",
        correct: ["in"],
        incorrect: ["in the centre", "widespread", "indoors", "nationwide"],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "Write your name " + constants_1.space + " the line.",
        correct: ["below"],
        incorrect: ["from", "south", "away", "in "],
        explenation: explenation
    },
    {
        id: constants_1.id(common), title: title,
        name: "There is a large garden at the " + constants_1.space + " the property.",
        correct: ["back of"],
        incorrect: ["behind", "beyond", "below", "opposite"],
        explenation: explenation
    },
];
exports.lessons = lessons;
