/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons, multi, capital } from '../../helper/constants';
import explenation = require('./explenation');

const common = [viewIds.radio];
const placeholder = "Simple Present Tense";
const title = "Simple Present Tense";

//continue with next http://www.grammar-quizzes.com/prest-diagnostic.html
const lessons = [
    {
        id: id(common), title: title,
        name: "The " + capital.places.Earth + " " + space + " 360º every day. The " + capital.places.Moon + " " + space + " the " + capital.places.Earth + ".",
        correct: ["turns " + multi + " orbits"],
        incorrect: ["orbits " + multi + " turns"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "The oceans " + space + " deep and cold. The oceans " + space + " in circular currents.",
        correct: ["are " + multi + " move"],
        incorrect: ["move " + multi + " are"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: capital.places.Antartica + " " + space + " covered with ice. The " + capital.places.SouthPole + " " + space + " strong winds.",
        correct: ["is " + multi + " has"],
        incorrect: ["has " + multi + " is"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Plants " + space + " in soil. Plants " + space + " us oxygen.",
        correct: ["grow " + multi + " give"],
        incorrect: ["give " + multi + " grow"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Wind " + space + " across the land. Wind " + space + " from differences in air pressure.",
        correct: ["blows " + multi + " comes"],
        incorrect: ["comes " + multi + " blows"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "People " + space + " on earth's resources. People " + space + " for good health.",
        correct: ["depend " + multi + " exercise"],
        incorrect: ["exercise " + multi + " depend"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Time " + space + " quickly. Daylight savings time " + space + " in spring.",
        correct: ["passes " + multi + " begins"],
        incorrect: ["begins " + multi + " passes"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Rain " + space + " water to life. Rain " + space + " in the winter.",
        correct: ["gives " + multi + " falls"],
        incorrect: ["falls " + multi + " gives"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "The land " + space + " on plates. Earthquakes " + space + " often.",
        correct: ["moves " + multi + " occur"],
        incorrect: ["occur " + multi + " moves"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: "Water " + space + " at zero degrees. Water " + space + " at 100 degrees.",
        correct: ["freezes " + multi + " boils"],
        incorrect: ["boils " + multi + " freezes"],
        explenation: explenation,
        placeholder: placeholder
    }

] as BoardFaces

export {
title,
lessons,
}


