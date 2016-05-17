/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace} from './interface';
import _ = require('underscore');

export const activeStartup = 'presentTenseOneToThree';


const icon_draw = 'moon-quill';
const icon_fourPictures = 'moon-images';
const icon_radio = 'moon-insert-template';
const icon_oneTwoThree = 'moon-bubble';


export const lessons: LessonMapFace = {

    animals: {
        bought: true, active: false,
        icon: require('./animals/animals').icon,
        name: require('./animals/animals').title,
        lessons: require('./animals/animals').lessons
    },
    presentTenseOneToThree: {
        bought: true, active: false,
        icon: require('./tense/presentTense/presentTenseOneToThree').icon,
        name: require('./tense/presentTense/presentTenseOneToThree').title,
        lessons: require('./tense/presentTense/presentTenseOneToThree').lessons
    },
    location: {
        bought: true, active: false,
        icon: require('./extra/location/location').icon,
        name: require('./extra/location/location').title,
        lessons: require('./extra/location/location').lessons
    },
    eitherNeither: {
        bought: true, active: false,
        icon: require('./words/eitherNeither/eitherNeither').icon,
        name: require('./words/eitherNeither/eitherNeither').title,
        lessons: require('./words/eitherNeither/eitherNeither').lessons
    },
    irregularVerbs: {
        bought: true, active: false,
        icon: require('./irregular/verbs/irregularVerbs').icon,
        name: require('./irregular/verbs/irregularVerbs').title,
        lessons: require('./irregular/verbs/irregularVerbs').lessons
    },
    irregularVerbsOneTwoThree: {
        bought: true, active: false,
        icon: require('./irregular/verbs/irregularVerbsOneTwoThree').icon,
        name: require('./irregular/verbs/irregularVerbsOneTwoThree').title,
        lessons: require('./irregular/verbs/irregularVerbsOneTwoThree').lessons
    },
    singularAndPlural: {
        bought: true, active: false,
        icon: require('./singularAndPlural/singularAndPlural').icon,
        name: require('./singularAndPlural/singularAndPlural').title,
        lessons: require('./singularAndPlural/singularAndPlural').lessons
    },
    quantifiersFewLittle: {
        bought: false, active: false,
        icon: require('./quantifiers/fewLittle/fewLittle').icon,
        name: require('./quantifiers/fewLittle/fewLittle').title,
        lessons: require('./quantifiers/fewLittle/fewLittle').lessons
    },
    muchManyALot: {
        bought: false, active: false,
        icon: require('./quantifiers/muchManyALot/muchManyALot').icon,
        name: require('./quantifiers/muchManyALot/muchManyALot').title,
        lessons: require('./quantifiers/muchManyALot/muchManyALot').lessons
    },
    verbHave: {
        bought: false, active: false,
        icon: require('./verb/have/verbHave').icon,
        name: require('./verb/have/verbHave').title,
        lessons: require('./verb/have/verbHave').lessons
    },
    toBeInPresentAndPast: {
        bought: false, active: false,
        icon: require('./verb/toBeInPresentAndPast/toBeInPresentAndPast').icon,
        name: require('./verb/toBeInPresentAndPast/toBeInPresentAndPast').title,
        lessons: require('./verb/toBeInPresentAndPast/toBeInPresentAndPast').lessons
    },
    possessivePronounsMineYour: {
        bought: false, active: false,
        icon: require('./pronouns/possesive/mineYour').icon,
        name: require('./pronouns/possesive/mineYour').title,
        lessons: require('./pronouns/possesive/mineYour').lessons
    },
    reflexivePronounsMyself: {
        bought: false, active: false,
        icon: require('./pronouns/reflexive/myselfYourself').icon,
        name: require('./pronouns/reflexive/myselfYourself').title,
        lessons: require('./pronouns/reflexive/myselfYourself').lessons
    }

};

