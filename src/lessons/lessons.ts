/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace, BoardFaces} from './interface';
import _ = require('underscore');

export const activeStartup = 'prefixes_one';

import animals = require('./animals/animals');
import clockFourWords = require('./extra/clock/clockFourWords');
import clockDraw = require('./extra/clock/clockDraw');
import clock = require('./extra/clock/clock');
import presentTenseOneToThree = require('./tense/presentTense/presentTenseOneToThree');
import presentTenseOneToThreePartTwo = require('./tense/presentTense/presentTenseOneToThreePartTwo');
import presentTenseRadio = require('./tense/presentTense/presentTenseRadio');
import presentTenseMatch = require('./tense/presentTense/presentTenseMatch');
import presentContinuousTenseOneToThree = require('./tense/presentContinuousTense/presentContinuousTenseOneToThree');
import presentContinuousTenseOneToThreePartTwo = require('./tense/presentContinuousTense/presentContinuousTenseOneToThreePartTwo');
import presentContinuousTenseRadio = require('./tense/presentContinuousTense/presentContinuousTenseRadio');
import presentPerfectTenseOneToThree = require('./tense/presentPerfectTense/presentPerfectTenseOneToThree');
import presentPerfectTenseOneToThreePartTwo = require('./tense/presentPerfectTense/presentPerfectTenseOneToThreePartTwo');
import presentPerfectTenseRadio = require('./tense/presentPerfectTense/presentPerfectTenseRadio');
import presentPerfectContinuousTenseOneToThree = require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThree');
import presentPerfectContinuousTenseOneToThreePartTwo = require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThreePartTwo');
import presentPerfectContinuousTenseRadio = require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseRadio');
import location = require('./extra/location/location');
import eitherNeither = require('./words/eitherNeither/eitherNeither');
import an_a_shortOne = require('./words/an_a/an_a_shortOne');
import an_a_shortTwo = require('./words/an_a/an_a_shortTwo');
import an_a_shortThree = require('./words/an_a/an_a_shortThree');
import an_a_shortFour = require('./words/an_a/an_a_shortFour');
import irregularVerbs = require('./irregular/verbs/irregularVerbs');
import irregularVerbsOneTwoThree = require('./irregular/verbs/irregularVerbsOneTwoThree');
import singularAndPlural = require('./singularAndPlural/singularAndPlural');
import fewLittle = require('./quantifiers/fewLittle/fewLittle');
import muchManyALot = require('./quantifiers/muchManyALot/muchManyALot');
import verbHave = require('./verb/have/verbHave');
import toBeInPresentAndPast = require('./verb/toBeInPresentAndPast/toBeInPresentAndPast');
import mineYour = require('./pronouns/possesive/mineYour');
import myselfYourself = require('./pronouns/reflexive/myselfYourself');
import spellingVerbsIngOne = require('./words/ing/spellingVerbsIngOne');
import spellingVerbsIngTwo = require('./words/ing/spellingVerbsIngTwo');
import spellingVerbsIngThree = require('./words/ing/spellingVerbsIngThree');
import prefixes_one = require('./words/prefixes/prefixes_one');
import prefixes_two = require('./words/prefixes/prefixes_two');

//TODO offer some for free and some when registered, and rest when subscribed
export const lessons: LessonMapFace = {
 
    prefixes_one: w(true, prefixes_one),
    prefixes_two: w(true, prefixes_two),

   spellingVerbsIngOne: w(true, spellingVerbsIngOne),
    spellingVerbsIngTwo: w(true, spellingVerbsIngTwo),
    spellingVerbsIngThree: w(true, spellingVerbsIngThree),

    an_a_shortOne: w(true, an_a_shortOne),
    an_a_shortTwo: w(true, an_a_shortTwo),
    an_a_shortThree: w(true, an_a_shortThree),
    an_a_shortFour: w(true, an_a_shortFour),

    animals: w(true, animals),
    clockFourWords: w(true, clockFourWords),
    clockDraw: w(true, clockDraw),
    clock: w(true, clock),

    presentTenseOneToThree: w(true, presentTenseOneToThree),
    presentTenseOneToThreePartTwo: w(true, presentTenseOneToThreePartTwo),
    presentTenseRadio: w(true, presentTenseRadio),
    presentTenseMatch: w(true, presentTenseMatch),

    presentContinuousTenseOneToThree: w(true, presentContinuousTenseOneToThree),
    presentContinuousTenseOneToThreePartTwo: w(true, presentContinuousTenseOneToThreePartTwo),
    presentContinuousTenseRadio: w(true, presentContinuousTenseRadio),

    presentPerfectTenseOneToThree: w(true, presentPerfectTenseOneToThree),
    presentPerfectTenseOneToThreePartTwo: w(true, presentPerfectTenseOneToThreePartTwo),
    presentPerfectTenseRadio: w(true, presentPerfectTenseRadio),

    presentPerfectContinuousTenseOneToThree: w(true, presentPerfectContinuousTenseOneToThree),
    presentPerfectContinuousTenseOneToThreePartTwo: w(true, presentPerfectContinuousTenseOneToThreePartTwo),
    presentPerfectContinuousTenseRadio: w(true, presentPerfectContinuousTenseRadio),

    location: w(true, location),

    eitherNeither: w(true, eitherNeither),

    irregularVerbs: w(true, irregularVerbs),
    irregularVerbsOneTwoThree: w(true, irregularVerbsOneTwoThree),

    singularAndPlural: w(true, singularAndPlural),

    fewLittle: w(true, fewLittle),
    muchManyALot: w(true, muchManyALot),

    verbHave: w(true, verbHave),
    toBeInPresentAndPast: w(true, toBeInPresentAndPast),

    mineYour: w(true, mineYour),
    myselfYourself: w(true, myselfYourself),

};

function w(free: boolean, data: { title: string, lessons: BoardFaces }) {
    const l: LessonFace = {
        free: free,
        active: false,
        name: data.title,
        lessons: data.lessons
    };
    return l;
}

