/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace} from './interface';
import _ = require('underscore');

export const activeStartup = 'clockFourWords';


const icon_draw = 'moon-quill';
const icon_fourPictures = 'moon-images';
const icon_fourWords = 'moon-images';
const icon_radio = 'moon-insert-template';
const icon_oneTwoThree = 'moon-bubble';


export const lessons: LessonMapFace = {

    animals: {
        bought: true, active: false,
        icon: require('./animals/animals').icon,
        name: require('./animals/animals').title,
        lessons: require('./animals/animals').lessons
    },
    clockFourWords: {
        bought: true, active: false,
        icon: require('./extra/clock/clockFourWords').icon,
        name: require('./extra/clock/clockFourWords').title,
        lessons: require('./extra/clock/clockFourWords').lessons
    },
    clockDraw: {
        bought: true, active: false,
        icon: require('./extra/clock/clockDraw').icon,
        name: require('./extra/clock/clockDraw').title,
        lessons: require('./extra/clock/clockDraw').lessons
    },
    clock: {
        bought: true, active: false,
        icon: require('./extra/clock/clock').icon,
        name: require('./extra/clock/clock').title,
        lessons: require('./extra/clock/clock').lessons
    },
    presentTenseOneToThree: { //  Present Tense
        bought: true, active: false,
        icon: require('./tense/presentTense/presentTenseOneToThree').icon,
        name: require('./tense/presentTense/presentTenseOneToThree').title,
        lessons: require('./tense/presentTense/presentTenseOneToThree').lessons
    },
    presentTenseOneToThreePartTwo: {
        bought: true, active: false,
        icon: require('./tense/presentTense/presentTenseOneToThreePartTwo').icon,
        name: require('./tense/presentTense/presentTenseOneToThreePartTwo').title,
        lessons: require('./tense/presentTense/presentTenseOneToThreePartTwo').lessons
    },
    presentTenseRadio: {
        bought: true, active: false,
        icon: require('./tense/presentTense/presentTenseRadio').icon,
        name: require('./tense/presentTense/presentTenseRadio').title,
        lessons: require('./tense/presentTense/presentTenseRadio').lessons
    },
    presentTenseMatch: {
        bought: true, active: false,
        icon: require('./tense/presentTense/presentTenseMatch').icon,
        name: require('./tense/presentTense/presentTenseMatch').title,
        lessons: require('./tense/presentTense/presentTenseMatch').lessons
    },
    presentContinuousTenseOneToThree: {
        bought: true, active: false,
        icon: require('./tense/presentContinuousTense/presentContinuousTenseOneToThree').icon,
        name: require('./tense/presentContinuousTense/presentContinuousTenseOneToThree').title,
        lessons: require('./tense/presentContinuousTense/presentContinuousTenseOneToThree').lessons
    },
    presentContinuousTenseOneToThreePartTwo: {
        bought: true, active: false,
        icon: require('./tense/presentContinuousTense/presentContinuousTenseOneToThreePartTwo').icon,
        name: require('./tense/presentContinuousTense/presentContinuousTenseOneToThreePartTwo').title,
        lessons: require('./tense/presentContinuousTense/presentContinuousTenseOneToThreePartTwo').lessons
    },
    presentContinuousTenseRadio: {
        bought: true, active: false,
        icon: require('./tense/presentContinuousTense/presentContinuousTenseRadio').icon,
        name: require('./tense/presentContinuousTense/presentContinuousTenseRadio').title,
        lessons: require('./tense/presentContinuousTense/presentContinuousTenseRadio').lessons
    },
    presentPerfectTenseOneToThree: {
        bought: true, active: false,
        icon: require('./tense/presentPerfectTense/presentPerfectTenseOneToThree').icon,
        name: require('./tense/presentPerfectTense/presentPerfectTenseOneToThree').title,
        lessons: require('./tense/presentPerfectTense/presentPerfectTenseOneToThree').lessons
    },
    presentPerfectTenseOneToThreePartTwo: {
        bought: true, active: false,
        icon: require('./tense/presentPerfectTense/presentPerfectTenseOneToThreePartTwo').icon,
        name: require('./tense/presentPerfectTense/presentPerfectTenseOneToThreePartTwo').title,
        lessons: require('./tense/presentPerfectTense/presentPerfectTenseOneToThreePartTwo').lessons
    },
    presentPerfectTenseRadio: {
        bought: true, active: false,
        icon: require('./tense/presentPerfectTense/presentPerfectTenseRadio').icon,
        name: require('./tense/presentPerfectTense/presentPerfectTenseRadio').title,
        lessons: require('./tense/presentPerfectTense/presentPerfectTenseRadio').lessons
    },
    presentPerfectContinuousTenseOneToThree: {
        bought: true, active: false,
        icon: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThree').icon,
        name: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThree').title,
        lessons: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThree').lessons
    },
    presentPerfectContinuousTenseOneToThreePartTwo: {
        bought: true, active: false,
        icon: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThreePartTwo').icon,
        name: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThreePartTwo').title,
        lessons: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThreePartTwo').lessons
    },
    presentPerfectContinuousTenseRadio: {
        bought: true, active: false,
        icon: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseRadio').icon,
        name: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseRadio').title,
        lessons: require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseRadio').lessons
    },
    // end Present Tense 
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

