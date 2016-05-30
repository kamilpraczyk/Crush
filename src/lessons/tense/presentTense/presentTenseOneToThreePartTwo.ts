/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Simple Present Tense";
const title = "Simple Present Tense";
const icon = icons.oneTwoThree;
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Where", "does", "he", "work", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "do not", "go", "fishing", "at weekends"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Do", "I", "go", "fishing", "at weekends?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "he ever", "put milk", "in his tea", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["My", "father", "plays", "the", "violin"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Do", "we go", "to", "the cinema", "on " + capital.daysPlural.Fridays + "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["A rabbit", "does", "not have", "two", "legs"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["How", "many legs", "does", "a spider", "have?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", capital.places.Earth, "goes", "round", "the " + capital.places.Sun],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The " + capital.places.Sun, "does", "not", "go round", "the " + capital.places.Earth],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Does", "the " + capital.places.Moon, "go", "round", "the " + capital.places.Earth + "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The", "course", "does", "not start", "in " + capital.mounths.June],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The train", "leaves", "at half", "past", "six"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "like", "chocolate"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Water", "is", "liquid", "at room", "temperature"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: [capital.names.Jason + " takes", "the ball,", "then he", "throws", "and scores two points"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["What", "time", "does", "the train", "leave?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The train", "gets", "in", "at 4 o'clock"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["The oceans", "are", "deep", "and cold"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: [capital.places.Antartica, "is", "covered", "with", "ice"],
        explenation: explenation,
        placeholder: placeholder
    },

] as BoardFaces

export {
title,
lessons,
icon
}


