/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace} from './interface';
import _ = require('underscore');

export const activeStartup = 'toBeInPresentAndPast';

export const lessons: LessonMapFace = {

    animals: {
        name: 'Animals', bought: true, active: false,
        lessons: require('./animals/animals')
    },
    singularAndPlural: {
        name: 'Singular and Plural', bought: true, active: false,
        lessons: require('./singularAndPlural/singularAndPlural')
    },
    quantifiersFewLittle: {
        name: 'Quantifiers: few, little', bought: false, active: false,
        lessons: require('./quantifiers/fewLittle/fewLittle')
    },
    muchManyALot: {
        name: 'Quantifiers: much, many, a lot', bought: false, active: false,
        lessons: require('./quantifiers/muchManyALot/muchManyALot')
    },
    verbHave: {
        name: 'Verb: have, has', bought: false, active: false,
        lessons: require('./verb/have/verbHave')
    },
    toBeInPresentAndPast: {
        name: 'Verb: "to be" in present and past', bought: false, active: false,
        lessons: require('./verb/toBeInPresentAndPast/toBeInPresentAndPast')
    }

};

