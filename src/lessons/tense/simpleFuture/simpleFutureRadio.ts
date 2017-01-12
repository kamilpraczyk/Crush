import { RawData } from '../../../types';
import { space, TypeId, empty, id, capital, getNameMale, getNameFemale } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [TypeId.radio];
const title = "Simple Future Tense";
const info = 'Build the correct sentence in Simple Future Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "Everything " + space + " be fine.",//?!?!
        correct: ["will"],
        incorrect: ["shall", "won't"],
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " open the door. Someone is ringing the bell.",
        correct: ["will"],
        incorrect: [empty],
    }, {
        id: id(common), title, explenation, info,
        name: "He " + space + " be late again.",
        correct: ["will not"],
        incorrect: ["shall"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " you come to the dance with me?",
        correct: ["Will"],
        incorrect: ["Shall"],
    }, {
        id: id(common), title, explenation, info,
        name: "Why " + space + " you come early?",
        correct: ["will"],
        incorrect: ["do"],
    }, {
        id: id(common), title, explenation, info,
        name: getNameFemale() + " " + space + " help with the cooking.",
        correct: ["will"],
        incorrect: ["shall"],
    }, {
        id: id(common), title, explenation, info,
        name: "I expect " + getNameMale() + " " + space + " pass his exam.",
        correct: ["will"],
        incorrect: [empty],
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " help you.",
        correct: ["will"],
        incorrect: [empty],
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " be at a conference next month.",
        correct: ["shall"],
        incorrect: [empty],
    }, {
        id: id(common), title, explenation, info,
        name: getNameFemale() + " " + space + " not pass the exam.",
        correct: ["will"],
        incorrect: [empty, "shall"],
    }, {
        id: id(common), title, explenation, info,
        name: space + " we cook?",
        correct: ["Will"],
        incorrect: ["Shall"],
    }, {
        id: id(common), title, explenation, info,
        name: "The weather tomorrow " + space + " sunny and warm.",
        correct: ["will be"],
        incorrect: ["shall be"],
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " play football.",
        correct: ["shall"],
        incorrect: ["not"],
    }//13

] 
export {
    title,
    lessons
}

/*.//TODO
I hope you will come to my party

I will have a cup of tea, please

I will tell your parents what you did.
I will come to see you on Sunday.
I am sure you will enjoy the film.
Tom will visit his parents next week.
The phone is ringing. I will answer it.

I will help you with your homework.


 He will tell him when she calls.
 I will be in Athens tomorrow.*/

