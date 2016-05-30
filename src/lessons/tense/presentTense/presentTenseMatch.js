var constants_1 = require('../../helper/constants');
var explenation = require('./explenation');
var common = [constants_1.viewIds.radio];
var placeholder = "Simple Present Tense";
var title = "Simple Present Tense";
exports.title = title;
var icon = constants_1.icons.radio;
exports.icon = icon;
var lessons = [
    {
        id: constants_1.id(common), title: title,
        name: "The " + constants_1.capital.places.Earth + " " + constants_1.space + " 360º every day. The " + constants_1.capital.places.Moon + " " + constants_1.space + " the " + constants_1.capital.places.Earth + ".",
        correct: ["turns " + constants_1.multi + " orbits"],
        incorrect: ["orbits " + constants_1.multi + " turns"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "The oceans " + constants_1.space + " deep and cold. The oceans " + constants_1.space + " in circular currents.",
        correct: ["are " + constants_1.multi + " move"],
        incorrect: ["move " + constants_1.multi + " are"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: constants_1.capital.places.Antartica + " " + constants_1.space + " covered with ice. The " + constants_1.capital.places.SouthPole + " " + constants_1.space + " strong winds.",
        correct: ["is " + constants_1.multi + " has"],
        incorrect: ["has " + constants_1.multi + " is"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Plants " + constants_1.space + " in soil. Plants " + constants_1.space + " us oxygen.",
        correct: ["grow " + constants_1.multi + " give"],
        incorrect: ["give " + constants_1.multi + " grow"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Wind " + constants_1.space + " across the land. Wind " + constants_1.space + " from differences in air pressure.",
        correct: ["blows " + constants_1.multi + " comes"],
        incorrect: ["comes " + constants_1.multi + " blows"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "People " + constants_1.space + " on earth's resources. People " + constants_1.space + " for good health.",
        correct: ["depend " + constants_1.multi + " exercise"],
        incorrect: ["exercise " + constants_1.multi + " depend"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Time " + constants_1.space + " quickly. Daylight savings time " + constants_1.space + " in spring.",
        correct: ["passes " + constants_1.multi + " begins"],
        incorrect: ["begins " + constants_1.multi + " passes"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Rain " + constants_1.space + " water to life. Rain " + constants_1.space + " in the winter.",
        correct: ["gives " + constants_1.multi + " falls"],
        incorrect: ["falls " + constants_1.multi + " gives"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "The land " + constants_1.space + " on plates. Earthquakes " + constants_1.space + " often.",
        correct: ["moves " + constants_1.multi + " occur"],
        incorrect: ["occur " + constants_1.multi + " moves"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: constants_1.id(common), title: title,
        name: "Water " + constants_1.space + " at zero degrees. Water " + constants_1.space + " at 100 degrees.",
        correct: ["freezes " + constants_1.multi + " boils"],
        incorrect: ["boils " + constants_1.multi + " freezes"],
        explenation: explenation,
        placeholder: placeholder
    }
];
exports.lessons = lessons;
