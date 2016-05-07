/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace} from './interface';
import {ids} from '../stores/setting/interface';
import _ = require('underscore');

export const activeStartup = 'eitherNeither';


export const lessons: LessonMapFace = {

    animals: {
        settings: ids.qutro,
        name: 'Animals', bought: true, active: false,
        lessons: require('./animals/animals')
    },
    eitherNeither :{
        settings: ids.radio,
        name: 'Either and Neither', bought: true, active: false,
        lessons: require('./words/eitherNeither/eitherNeither')
    },   
    irregularVerbs: {
        settings: ids.draw,
        name: 'Irregular Verbs', bought: true, active: false, //TODO guess with is first
        lessons: require('./irregular/verbs/irregularVerbs')
    },
    singularAndPlural: {
        settings: ids.radio,
        name: 'Singular and Plural', bought: true, active: false,
        lessons: require('./singularAndPlural/singularAndPlural')
    },
    quantifiersFewLittle: {
        settings: ids.radio,
        name: 'Quantifiers: few, little', bought: false, active: false,
        lessons: require('./quantifiers/fewLittle/fewLittle')
    },
    muchManyALot: {
        settings: ids.radio,
        name: 'Quantifiers: much, many, a lot', bought: false, active: false,
        lessons: require('./quantifiers/muchManyALot/muchManyALot')
    },
    verbHave: {
        settings: ids.radio,
        name: 'Verb: have, has', bought: false, active: false,
        lessons: require('./verb/have/verbHave')
    },
    toBeInPresentAndPast: {
        settings: ids.radio,
        name: 'Verb: "to be" in present and past', bought: false, active: false,
        lessons: require('./verb/toBeInPresentAndPast/toBeInPresentAndPast')
    },
    possessivePronounsMineYour: {
        settings: ids.radio,
        name: 'Possessive Pronouns: mine, yours, hers...', bought: false, active: false,
        lessons: require('./pronouns/possesive/mineYour')
    },
    reflexivePronounsMyself: {
        settings: ids.radio,
        name: 'Reflexive Pronouns: myself, yourself, herself...', bought: false, active: false,
        lessons: require('./pronouns/reflexive/myselfYourself')
    }

};

