import { RawData } from '../../../types';
import { space, TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.draw, TypeId.digitalTime];
import _ = require("underscore");
const title = 'What time is it?';
const info = 'Write the correct time.'
const isHelp = true;
const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation, isHelp,
        name: "It's quarter to two.",
        correct: ["01:45"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's twelve o'clock.",
        correct: ["12:00"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's twenty-five past ten.",
        correct: ["10:25"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's five past six.",
        correct: ["06:05"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's five to seven.",
        correct: ["06:55"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's ten past eight.",
        correct: ["08:10"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's half past eleven.",
        correct: ["11:30"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's twenty to two.",
        correct: ["01:40"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's twenty past nine.",
        correct: ["09:20"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's quarter past three.",
        correct: ["03:30"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's quarter past three.",
        correct: ["03:15"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's five to four.",
        correct: ["03:55"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's five past five.",
        correct: ["05:05"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's ten to ten.",
        correct: ["09:50"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's twenty to eight.",
        correct: ["07:40"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's three o'clock.",
        correct: ["01:00"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's five past three.",
        correct: ["03:05"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's half past five.",
        correct: ["05:30"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's twenty-five to ten.",
        correct: ["09:35"],
    }, {
        id: id(common), title, info, explenation, isHelp,
        name: "It's quarter to four.",
        correct: ["03:45"],
    }
] 


export {
    title,
    lessons,
}
