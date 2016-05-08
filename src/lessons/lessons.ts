/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace} from './interface';
import _ = require('underscore');

export const activeStartup = 'irregularVerbsOneTwoThree';


const icon_draw = 'moon-quill';
const icon_fourPictures = 'moon-images';
const icon_radio = 'moon-signup';
const icon_oneTwoThree = 'moon-newspaper';



export const lessons: LessonMapFace = {

    animals: {
        icon: icon_fourPictures,
        name: 'Animals', bought: true, active: false,
        lessons: require('./animals/animals')
    },
    eitherNeither: {
        icon: icon_radio,
        name: 'Either and Neither', bought: true, active: false,
        lessons: require('./words/eitherNeither/eitherNeither')
    },
    irregularVerbs: {
        icon: icon_draw,
        name: 'Irregular Verbs', bought: true, active: false,
        lessons: require('./irregular/verbs/irregularVerbs')
    },
    irregularVerbsOneTwoThree: {
        icon: icon_oneTwoThree,
        name: 'Irregular Verbs', bought: true, active: false, 
        lessons: require('./irregular/verbs/irregularVerbsOneTwoThree')
    },
    singularAndPlural: {
        icon: icon_radio,
        name: 'Singular and Plural', bought: true, active: false,
        lessons: require('./singularAndPlural/singularAndPlural')
    },
    quantifiersFewLittle: {
        icon: icon_radio,
        name: 'Quantifiers: few, little', bought: false, active: false,
        lessons: require('./quantifiers/fewLittle/fewLittle')
    },
    muchManyALot: {
        icon: icon_radio,
        name: 'Quantifiers: much, many, a lot', bought: false, active: false,
        lessons: require('./quantifiers/muchManyALot/muchManyALot')
    },
    verbHave: {
        icon: icon_radio,
        name: 'Verb: have, has', bought: false, active: false,
        lessons: require('./verb/have/verbHave')
    },
    toBeInPresentAndPast: {
        icon: icon_radio,
        name: 'Verb: "to be" in present and past', bought: false, active: false,
        lessons: require('./verb/toBeInPresentAndPast/toBeInPresentAndPast')
    },
    possessivePronounsMineYour: {
        icon: icon_radio,
        name: 'Possessive Pronouns: mine, yours, hers...', bought: false, active: false,
        lessons: require('./pronouns/possesive/mineYour')
    },
    reflexivePronounsMyself: {
        icon: icon_radio,
        name: 'Reflexive Pronouns: myself, yourself, herself...', bought: false, active: false,
        lessons: require('./pronouns/reflexive/myselfYourself')
    }

};

