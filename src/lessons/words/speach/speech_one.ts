/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital, displayIds, getNameFemale, getNameMale} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio, displayIds.noSpace];
const title = "Writing speech";
const placeholder: string = null;

const lessons = [
    {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Stop it!" ' + space + " " + getNameFemale() + ".",
        correct: ["shouted"],
        incorrect: ["said"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"I am going out," ' + space + " " + getNameMale() + ".",
        correct: ["said"],
        incorrect: ["asked"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"It is to my friend ' + getNameMale() + '," ' + space + " " + getNameFemale() + ".",
        correct: ["explained"],
        incorrect: ["requested"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Where is my book?" ' + space + " " + getNameMale() + ".",
        correct: ["asked"],
        incorrect: ["arqued"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Where are you going?" ' + space + " " + getNameMale() + ".",
        correct: ["asked"],
        incorrect: ["explained"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"I need to post a letter," ' + space + " " + getNameFemale() + ".",
        correct: ["replied"],
        incorrect: ["demanded"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Could you post one for me?" ' + space + " " + getNameFemale() + ".",
        correct: ["asked"],
        incorrect: ["answered"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Of course," ' + space + " " + getNameFemale() + ".",
        correct: ["answered"],
        incorrect: ["asked"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"It is raining, " ' + space + " " + getNameMale() + ".",
        correct: ["commented"],
        incorrect: ["queried"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: getNameMale() + ' ' + space + ', "why can not I?"',
        correct: ["demanded"],
        incorrect: ["insisted"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"No it is not" ' + space + " " + getNameFemale() + ".",
        correct: ["argued"],
        incorrect: ["questioned"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"It is!" ' + space + " " + getNameMale() + " angrily.",
        correct: ["shouted"],
        incorrect: ["giggled"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"I am going anyway," ' + space + " " + getNameFemale() + ".",
        correct: ["insisted"],
        incorrect: ["asked"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: getNameMale() + ' ' + space + ' "Because it is late."',
        correct: ["replied"],
        incorrect: ["arqued"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"I will be back home soon!" ' + getNameMale() + " " + space + ' to his mum.',
        correct: ["shouted"],
        incorrect: ["asked"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: 'Mum ' + space + ' quietly, "Please sit down."',
        correct: ["said"],
        incorrect: ["replied"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Do not speak to me like that," she ' + space + '.',
        correct: ["said"],
        incorrect: ["questioned"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Go home!" ' + space + ' ' + getNameMale() + '.',
        correct: ["Shouted"],
        incorrect: ["Insisted"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: 'She  ' + space + ' "I will meet you tonight at seven."',
        correct: ["said"],
        incorrect: ["questioned"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: 'Did she  ' + space + ' "May I go?"',
        correct: ["say"],
        incorrect: ["ask"],
        explenation: explenation
    }
] as BoardFaces

export {
title,
lessons,
}


