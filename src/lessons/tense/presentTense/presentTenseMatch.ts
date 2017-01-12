import { RawData } from '../../../types';
import { space, TypeId, id, multi, capital } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.radio, TypeId.multiAnswer];
const title = "Simple Present Tense";
const info = 'Build the correct sentence in Simple Present Tense.';

//continue with next http://www.grammar-quizzes.com/prest-diagnostic.html TODO
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "The " + capital.places.Earth + " " + space + " 360º every day. The " + capital.places.Moon + " " + space + " the " + capital.places.Earth + ".",
        correct: ["turns " + multi + " orbits"],
        incorrect: ["orbits " + multi + " turns"],
    }, {
        id: id(common), title, explenation, info,
        name: "The oceans " + space + " deep and cold. The oceans " + space + " in circular currents.",
        correct: ["are " + multi + " move"],
        incorrect: ["move " + multi + " are"],
    }, {
        id: id(common), title, explenation, info,
        name: capital.places.Antarctica + " " + space + " covered with ice. The " + capital.places.SouthPole + " " + space + " strong winds.",
        correct: ["is " + multi + " has"],
        incorrect: ["has " + multi + " is"],
    }, {
        id: id(common), title, explenation, info,
        name: "Plants " + space + " in soil. Plants " + space + " us oxygen.",
        correct: ["grow " + multi + " give"],
        incorrect: ["give " + multi + " grow"],
    }, {
        id: id(common), title, explenation, info,
        name: "Wind " + space + " across the land. Wind " + space + " from differences in air pressure.",
        correct: ["blows " + multi + " comes"],
        incorrect: ["comes " + multi + " blows"],
    }, {
        id: id(common), title, explenation, info,
        name: "People " + space + " on earth's resources. People " + space + " for good health.",
        correct: ["depend " + multi + " exercise"],
        incorrect: ["exercise " + multi + " depend"],
    }, {
        id: id(common), title, explenation, info,
        name: "Time " + space + " quickly. Daylight savings time " + space + " in spring.",
        correct: ["passes " + multi + " begins"],
        incorrect: ["begins " + multi + " passes"],
    }, {
        id: id(common), title, explenation, info,
        name: "Rain " + space + " water to life. Rain " + space + " in the winter.",
        correct: ["gives " + multi + " falls"],
        incorrect: ["falls " + multi + " gives"],
    }, {
        id: id(common), title, explenation, info,
        name: "The land " + space + " on plates. Earthquakes " + space + " often.",
        correct: ["moves " + multi + " occur"],
        incorrect: ["occur " + multi + " moves"],
    }, {
        id: id(common), title, explenation, info,
        name: "Water " + space + " at zero degrees. Water " + space + " at 100 degrees.",
        correct: ["freezes " + multi + " boils"],
        incorrect: ["boils " + multi + " freezes"],
    }
]

export {
    title,
    lessons,
}


