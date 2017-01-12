import {RawData} from '../../../types';
import {space, TypeId, id, capital, getNameMale } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.oneTwoThree];
const title = "Simple Present Tense";
const info = 'Build the correct sentence in Simple Present Tense.';

const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Where", "does", "he", "work", "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "do not", "go", "fishing", "at weekends"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Do", "I", "go", "fishing", "at weekends?"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Does", "he ever", "put milk", "in his tea", "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["My", "father", "plays", "the", "violin"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Do", "we go", "to", "the cinema", "on " + capital.daysPlural.Fridays + "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["A rabbit", "does", "not have", "two", "legs"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["How", "many legs", "does", "a spider", "have?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", capital.places.Earth, "goes", "round", "the " + capital.places.Sun],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The " + capital.places.Sun, "does", "not", "go round", "the " + capital.places.Earth],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["Does", "the " + capital.places.Moon, "go", "round", "the " + capital.places.Earth + "?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The", "course", "does", "not start", "in " + capital.mounths.June],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The train", "leaves", "at half", "past", "six"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["I", "like", "chocolate"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["Water", "is", "liquid", "at room", "temperature"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [getNameMale() + " takes", "the ball,", "then he", "throws", "and scores two points"],
    }, {
        id: id(common), title, explenation, info,
        name: separator, postfix: "",
        correct: ["What", "time", "does", "the train", "leave?"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The train", "gets", "in", "at 4 o'clock"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: ["The oceans", "are", "deep", "and cold"],
    }, {
        id: id(common), title, explenation, info, postfix,
        name: separator,
        correct: [capital.places.Antarctica, "is", "covered", "with", "ice"],
    },

] 

export {
title,
lessons,
}


