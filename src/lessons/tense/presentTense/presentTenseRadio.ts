import { RawData } from '../../../types';
import { space, TypeId, id, multi, capital, getNationalityAdj } from '../../helper/constants';
import explenation = require('./explenation');

const common = [TypeId.radio];
const title = "Simple Present Tense";
const info = 'Build the correct sentence in Simple Present Tense.';
const lessons: RawData[] = [
    {
        id: id(common), title, explenation, info,
        name: "You " + space + " " + getNationalityAdj() + ".",
        correct: ["speak"],
        incorrect: ["speaks", "speaking"],
    }, {
        id: id(common), title, explenation, info,
        name: capital.places.NewYork + " " + space + " a small city.",
        correct: ["is", "is not"],
        incorrect: ["are", "are not"],
    }, {
        id: id(common), title, explenation, info,
        name: "You " + space + " " + getNationalityAdj() + ".",
        correct: ["do not speak"],
        incorrect: ["do not speaking", "does not speak"],
    }, {
        id: id(common), title, explenation, info,
        name: "Windows " + space + " of glass.",
        correct: ["are made"],
        incorrect: ["is made", "not made"],
    }, {
        id: id(common), title, explenation, info,
        name: "Chickens " + space + " milk.",
        correct: ["do not drink"],
        incorrect: ["do not drinks", "does not drink"],
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: "The bus does " + space + " at 10 " + capital.clock.am + ", it " + space + " at 10 " + capital.clock.pm,
        correct: ["not arrive " + multi + " arrives"],
        incorrect: ["not arrive " + multi + " arrive", "not arrives " + multi + " arrives", "not arrive " + multi + " does arrive"],
    }, {
        id: id(common, [TypeId.multiAnswer]), title, explenation, info,
        name: "When " + space + " class " + space + " tomorrow?",
        correct: ["does " + multi + " begin"],
        incorrect: ["do " + multi + " begin", "does " + multi + " begining"],
    }, {
        id: id(common), title, explenation, info,
        name: "He " + space + " not need help now.",
        correct: ["does"],
        incorrect: ["do", "is", "will"],
    }, {
        id: id(common), title, explenation, info,
        name: "I " + space + " here now.",
        correct: ["am"],
        incorrect: ["was", "are", "did"],
    }, {
        id: id(common), title, explenation, info,
        name: capital.places.Barcelona + " " + space + " in the " + capital.countries.UnitedKingdom + ".",
        correct: ["is not"],
        incorrect: ["does not", "do not", "are not"],
    }

]

export {
    title,
    lessons,
}


