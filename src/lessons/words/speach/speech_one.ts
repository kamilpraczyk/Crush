/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, capital, displayIds, getNameFemale, getNameMale} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio, displayIds.noSpace];
const title = "Writing speech";
const info = 'Use the correct prefix.'

const lessons = [
    {
        id: id(common), title, explenation, info,
        name: '"Stop it!" ' + space + " " + getNameFemale() + ".",
        correct: ["shouted"],
        incorrect: ["said"],
    }, {
        id: id(common), title, explenation, info,
        name: '"I am going out," ' + space + " " + getNameMale() + ".",
        correct: ["said"],
        incorrect: ["asked"],
    }, {
        id: id(common), title, explenation, info,
        name: '"It is to my friend ' + getNameMale() + '," ' + space + " " + getNameFemale() + ".",
        correct: ["explained"],
        incorrect: ["requested"],
    }, {
        id: id(common), title, explenation, info,
        name: '"Where is my book?" ' + space + " " + getNameMale() + ".",
        correct: ["asked"],
        incorrect: ["arqued"],
    }, {
        id: id(common), title, explenation, info,
        name: '"Where are you going?" ' + space + " " + getNameMale() + ".",
        correct: ["asked"],
        incorrect: ["explained"],
    }, {
        id: id(common), title, explenation, info,
        name: '"I need to post a letter," ' + space + " " + getNameFemale() + ".",
        correct: ["replied"],
        incorrect: ["demanded"],
    }, {
        id: id(common), title, explenation, info,
        name: '"Could you post one for me?" ' + space + " " + getNameFemale() + ".",
        correct: ["asked"],
        incorrect: ["answered"],
    }, {
        id: id(common), title, explenation, info,
        name: '"Of course," ' + space + " " + getNameFemale() + ".",
        correct: ["answered"],
        incorrect: ["asked"],
    }, {
        id: id(common), title, explenation, info,
        name: '"It is raining, " ' + space + " " + getNameMale() + ".",
        correct: ["commented"],
        incorrect: ["queried"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameMale() + ' ' + space + ', "why can not I?"',
        correct: ["demanded"],
        incorrect: ["insisted"],
    }, {
        id: id(common), title, explenation, info,
        name: '"No it is not" ' + space + " " + getNameFemale() + ".",
        correct: ["argued"],
        incorrect: ["questioned"],
    }, {
        id: id(common), title, explenation, info,
        name: '"It is!" ' + space + " " + getNameMale() + " angrily.",
        correct: ["shouted"],
        incorrect: ["giggled"],
    }, {
        id: id(common), title, explenation, info,
        name: '"I am going anyway," ' + space + " " + getNameFemale() + ".",
        correct: ["insisted"],
        incorrect: ["asked"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameMale() + ' ' + space + ' "Because it is late."',
        correct: ["replied"],
        incorrect: ["arqued"],
    }, {
        id: id(common), title, explenation, info,
        name: '"I will be back home soon!" ' + getNameMale() + " " + space + ' to his mum.',
        correct: ["shouted"],
        incorrect: ["asked"],
    }, {
        id: id(common), title, explenation, info,
        name: 'Mum ' + space + ' quietly, "Please sit down."',
        correct: ["said"],
        incorrect: ["replied"],
    }, {
        id: id(common), title, explenation, info,
        name: '"Do not speak to me like that," she ' + space + '.',
        correct: ["said"],
        incorrect: ["questioned"],
    }, {
        id: id(common), title, explenation, info,
        name: '"Go home!" ' + space + ' ' + getNameMale() + '.',
        correct: ["Shouted"],
        incorrect: ["Insisted"],
    }, {
        id: id(common), title, explenation, info,
        name: 'She ' + space + ' "I will meet you tonight at seven."',
        correct: ["said"],
        incorrect: ["questioned"],
    }, {
        id: id(common), title, explenation, info,
        name: 'Did she ' + space + ' "May I go?"',
        correct: ["say"],
        incorrect: ["ask"],
    }
] as BoardFaces

export {
title,
lessons,
}


