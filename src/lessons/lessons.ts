/// <reference path="../../typings/tsd.d.ts" />
import {LessonMapFace, LessonFace} from './interface';
import _ = require('underscore');

export const activeStartup = 'an_a_shortOne';

const icon_draw = 'moon-quill';
const icon_fourPictures = 'moon-images';
const icon_fourWords = 'moon-images';
const icon_radio = 'moon-insert-template';
const icon_oneTwoThree = 'moon-bubble';

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
export const lessons: LessonMapFace = {

    an_a_shortOne: { bought: true, active: false, icon: an_a_shortOne.icon, name: an_a_shortOne.title, lessons: an_a_shortOne.lessons },
    an_a_shortTwo: { bought: true, active: false, icon: an_a_shortTwo.icon, name: an_a_shortTwo.title, lessons: an_a_shortTwo.lessons },
    an_a_shortThree: { bought: true, active: false, icon: an_a_shortThree.icon, name: an_a_shortThree.title, lessons: an_a_shortThree.lessons },
    an_a_shortFour: { bought: true, active: false, icon: an_a_shortFour.icon, name: an_a_shortFour.title, lessons: an_a_shortFour.lessons },

    animals: { bought: true, active: false, icon: animals.icon, name: animals.title, lessons: animals.lessons },
    clockFourWords: { bought: true, active: false, icon: clockFourWords.icon, name: clockFourWords.title, lessons: clockFourWords.lessons },
    clockDraw: { bought: true, active: false, icon: clockDraw.icon, name: clockDraw.title, lessons: clockDraw.lessons },
    clock: { bought: true, active: false, icon: clock.icon, name: clock.title, lessons: clock.lessons },

    presentTenseOneToThree: { bought: true, active: false, icon: presentTenseOneToThree.icon, name: presentTenseOneToThree.title, lessons: presentTenseOneToThree.lessons },
    presentTenseOneToThreePartTwo: { bought: true, active: false, icon: presentTenseOneToThreePartTwo.icon, name: presentTenseOneToThreePartTwo.title, lessons: presentTenseOneToThreePartTwo.lessons },
    presentTenseRadio: { bought: true, active: false, icon: presentTenseRadio.icon, name: presentTenseRadio.title, lessons: presentTenseRadio.lessons },
    presentTenseMatch: { bought: true, active: false, icon: presentTenseMatch.icon, name: presentTenseMatch.title, lessons: presentTenseMatch.lessons },

    presentContinuousTenseOneToThree: { bought: true, active: false, icon: presentContinuousTenseOneToThree.icon, name: presentContinuousTenseOneToThree.title, lessons: presentContinuousTenseOneToThree.lessons },
    presentContinuousTenseOneToThreePartTwo: { bought: true, active: false, icon: presentContinuousTenseOneToThreePartTwo.icon, name: presentContinuousTenseOneToThreePartTwo.title, lessons: presentContinuousTenseOneToThreePartTwo.lessons },
    presentContinuousTenseRadio: { bought: true, active: false, icon: presentContinuousTenseRadio.icon, name: presentContinuousTenseRadio.title, lessons: presentContinuousTenseRadio.lessons },

    presentPerfectTenseOneToThree: { bought: true, active: false, icon: presentPerfectTenseOneToThree.icon, name: presentPerfectTenseOneToThree.title, lessons: presentPerfectTenseOneToThree.lessons },
    presentPerfectTenseOneToThreePartTwo: { bought: true, active: false, icon: presentPerfectTenseOneToThreePartTwo.icon, name: presentPerfectTenseOneToThreePartTwo.title, lessons: presentPerfectTenseOneToThreePartTwo.lessons },
    presentPerfectTenseRadio: { bought: true, active: false, icon: presentPerfectTenseRadio.icon, name: presentPerfectTenseRadio.title, lessons: presentPerfectTenseRadio.lessons },

    presentPerfectContinuousTenseOneToThree: { bought: true, active: false, icon: presentPerfectContinuousTenseOneToThree.icon, name: presentPerfectContinuousTenseOneToThree.title, lessons: presentPerfectContinuousTenseOneToThree.lessons },
    presentPerfectContinuousTenseOneToThreePartTwo: { bought: true, active: false, icon: presentPerfectContinuousTenseOneToThreePartTwo.icon, name: presentPerfectContinuousTenseOneToThreePartTwo.title, lessons: presentPerfectContinuousTenseOneToThreePartTwo.lessons },
    presentPerfectContinuousTenseRadio: { bought: true, active: false, icon: presentPerfectContinuousTenseRadio.icon, name: presentPerfectContinuousTenseRadio.title, lessons: presentPerfectContinuousTenseRadio.lessons },

    location: { bought: true, active: false, icon: location.icon, name: location.title, lessons: location.lessons },

    eitherNeither: { bought: true, active: false, icon: eitherNeither.icon, name: eitherNeither.title, lessons: eitherNeither.lessons },

    irregularVerbs: { bought: true, active: false, icon: irregularVerbs.icon, name: irregularVerbs.title, lessons: irregularVerbs.lessons },
    irregularVerbsOneTwoThree: { bought: true, active: false, icon: irregularVerbsOneTwoThree.icon, name: irregularVerbsOneTwoThree.title, lessons: irregularVerbsOneTwoThree.lessons },

    singularAndPlural: { bought: true, active: false, icon: singularAndPlural.icon, name: singularAndPlural.title, lessons: singularAndPlural.lessons },

    fewLittle: { bought: false, active: false, icon: fewLittle.icon, name: fewLittle.title, lessons: fewLittle.lessons },
    muchManyALot: { bought: false, active: false, icon: muchManyALot.icon, name: muchManyALot.title, lessons: muchManyALot.lessons },

    verbHave: { bought: false, active: false, icon: verbHave.icon, name: verbHave.title, lessons: verbHave.lessons },
    toBeInPresentAndPast: { bought: false, active: false, icon: toBeInPresentAndPast.icon, name: toBeInPresentAndPast.title, lessons: toBeInPresentAndPast.lessons },

    mineYour: { bought: false, active: false, icon: mineYour.icon, name: mineYour.title, lessons: mineYour.lessons },
    myselfYourself: { bought: false, active: false, icon: myselfYourself.icon, name: myselfYourself.title, lessons: myselfYourself.lessons }

};

