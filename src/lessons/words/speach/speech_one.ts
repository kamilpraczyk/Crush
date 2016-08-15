/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital, displayIds} from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.radio, displayIds.noSpace];
const title = "Writing speech";
const placeholder:string = null;

const lessons = [
    { //TODO check this if is right, many mistakes in sentences
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Stop it!" ' + space + " " + capital.names.Bob + ".",
        correct: ["shouted"],
        incorrect: ["said"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Where is my book?" ' + space + " " + capital.names.Bob + ".",
        correct: ["asked"],
        incorrect: ["arqued"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"I am going out," ' + space + " " + capital.names.Bob + ".",
        correct: ["said"],
        incorrect: ["asked"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Where are you going?" ' + space + " " + capital.names.Bob + ".",//TODO change to other names
        correct: ["asked"],
        incorrect: ["explained"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"I need to post a letter," ' + space + " " + capital.names.Bob + ".",
        correct: ["replied"],
        incorrect: ["demanded"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Could you post one for me?" ' + space + " " + capital.names.Bob + ".",
        correct: ["asked"],
        incorrect: ["answered"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"Of course," ' + space + " " + capital.names.Bob + ".",
        correct: ["answered"],
        incorrect: ["asked"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"It is to my friend Asher," ' + space + " " + capital.names.Bob + ".",
        correct: ["explained"],
        incorrect: ["requested"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"It is raining, " ' + space + " " + capital.names.Bob + ".",
        correct: ["commented"],
        incorrect: ["queried"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"No it is not" ' + space + " " + capital.names.Bob + ".",
        correct: ["argued"],
        incorrect: ["questioned"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"It is!" ' + space + " " + capital.names.Bob + " angrily.",
        correct: ["shouted"],
        incorrect: ["giggled"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: '"I am going anyway," ' + space + " " + capital.names.Bob + ".",
        correct: ["insisted"],
        incorrect: ["asked"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: capital.names.Bob + ' ' + space + ', "why can not I?',
        correct: ["demanded"],
        incorrect: ["insisted"],
        explenation: explenation
    }, {
        id: id(common), title: title,
        placeholder: placeholder,
        name: capital.names.Bob + ' ' + space + ' "Because it is late."',
        correct: ["replied"],
        incorrect: ["arqued"],
        explenation: explenation
    },
] as BoardFaces

export {
title,
lessons,
}


