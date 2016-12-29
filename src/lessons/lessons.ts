/// <reference path="../../typings/tsd.d.ts" />
import { LessonsCatalog } from '../services/LessonsCatalog';
import { FreeType } from '../types';
import Promise = require('bluebird');
import config = require('../generated-config');

import animals = require('./images/animals/animals');
import fruts = require('./images/fruts/fruts');
import vegetables = require('./images/vegetables/vegetables');
import furniture = require('./images/furniture/furniture');
import insects = require('./images/insects/insects');
import clothing = require('./images/clothing/clothing');
import tableware = require('./images/tableware/tableware');
import technic = require('./images/technic/technic');
import nature = require('./images/nature/nature');

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
import collectiveNouns = require('./words/collectiveNouns/collectiveNouns');
import collectiveNounsPartTwo = require('./words/collectiveNouns/collectiveNounsPartTwo');
import collectiveNounsPartThree = require('./words/collectiveNouns/collectiveNounsPartThree');
import collectiveNounsPartFour = require('./words/collectiveNouns/collectiveNounsPartFour');
import collectiveNounsPartFive = require('./words/collectiveNouns/collectiveNounsPartFive');
import verbEndings = require('./verb/endings/verbEndings');
import speech_one = require('./words/speach/speech_one');
import simpleFutureOneToThree = require('./tense/simpleFuture/simpleFutureOneToThree');
import simpleFutureOneToThreePartTwo = require('./tense/simpleFuture/simpleFutureOneToThreePartTwo');
import simpleFutureOneToThreePartThree = require('./tense/simpleFuture/simpleFutureOneToThreePartThree');
import simpleFutureOneToThreePartFour = require('./tense/simpleFuture/simpleFutureOneToThreePartFour');
import simpleFutureRadio = require('./tense/simpleFuture/simpleFutureRadio');
import beGoingToOneToThree = require('./tense/beGoingTo/beGoingToOneToThree');
import beGoingToOneToThreePartTwo = require('./tense/beGoingTo/beGoingToOneToThreePartTwo');
import pastPerfectOneToThree = require('./tense/pastPerfectTense/pastPerfectOneToThree');
import pastPerfectOneToThreePartTwo = require('./tense/pastPerfectTense/pastPerfectOneToThreePartTwo');
import pastPerfectInRadio = require('./tense/pastPerfectTense/pastPerfectInRadio');
import pastPerfectInRadioPartTwo = require('./tense/pastPerfectTense/pastPerfectInRadioPartTwo');

import occupation = require('./pictures/occupation/occupation');

import synonymsAD = require('./synonyms/ad/synonymsAD');
import synonymsDF = require('./synonyms/df/synonymsDF');
import synonymsGL = require('./synonyms/gl/synonymsGL');
import synonymsLS = require('./synonyms/ls/synonymsLS');
import synonymsSW = require('./synonyms/sw/synonymsSW');

function getLessons(lessonsCatalog: LessonsCatalog) {
    return new Promise<LessonsCatalog>((resolve) => {


        //TODO offer some for free and some when registered, and rest when subscribed
        lessonsCatalog.add(FreeType.alwaysFree_____, 'A___0', verbEndings);
        lessonsCatalog.add(FreeType.alwaysFree_____, 'A___1', speech_one);

        lessonsCatalog.add(FreeType.alwaysFree_____, 'PR__2', prefixes_one);
        lessonsCatalog.add(FreeType.alwaysFree_____, 'PR__3', prefixes_two);

        lessonsCatalog.add(FreeType.alwaysFree_____, 'SP__1', spellingVerbsIngOne);
        lessonsCatalog.add(FreeType.alwaysFree_____, 'SP__2', spellingVerbsIngTwo);
        lessonsCatalog.add(FreeType.alwaysFree_____, 'SP__3', spellingVerbsIngThree);

        lessonsCatalog.add(FreeType.whenPrime______, 'AN__1', an_a_shortOne);
        lessonsCatalog.add(FreeType.whenPrime______, 'AN__2', an_a_shortTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'AN__3', an_a_shortThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'AN__4', an_a_shortFour);

        lessonsCatalog.add(FreeType.alwaysFree_____, 'CL_01', clockFourWords);
        lessonsCatalog.add(FreeType.alwaysFree_____, 'CL_02', clockDraw);
        lessonsCatalog.add(FreeType.alwaysFree_____, 'CL_03', clock);

        lessonsCatalog.add(FreeType.alwaysFree_____, 'PC_AN1', animals);
        lessonsCatalog.add(FreeType.alwaysFree_____, 'PC_OC1', occupation);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_FR1', fruts);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_VE1', vegetables);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_FU1', furniture);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_IN1', insects);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_CL1', clothing);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_TA1', tableware);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_TE1', technic);
        lessonsCatalog.add(FreeType.inProgressBlock, 'PC_NA1', nature);


        lessonsCatalog.add(FreeType.whenPrime______, 'PT__01', presentTenseOneToThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'PT__02', presentTenseOneToThreePartTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'PT__03', presentTenseRadio);
        lessonsCatalog.add(FreeType.whenPrime______, 'PT__04', presentTenseMatch);

        lessonsCatalog.add(FreeType.whenPrime______, 'PCT_01', presentContinuousTenseOneToThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'PCT_02', presentContinuousTenseOneToThreePartTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'PCT_03', presentContinuousTenseRadio);

        lessonsCatalog.add(FreeType.whenPrime______, 'PPT_01', presentPerfectTenseOneToThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'PPT_02', presentPerfectTenseOneToThreePartTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'PPT_03', presentPerfectTenseRadio);

        lessonsCatalog.add(FreeType.whenPrime______, 'PPCT_1', presentPerfectContinuousTenseOneToThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'PPCT_2', presentPerfectContinuousTenseOneToThreePartTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'PPCT_3', presentPerfectContinuousTenseRadio);

        lessonsCatalog.add(FreeType.whenPrime______, 'SFT_1', simpleFutureOneToThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'SFT_2', simpleFutureOneToThreePartTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'SFT_3', simpleFutureOneToThreePartThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'SFT_4', simpleFutureOneToThreePartFour);
        lessonsCatalog.add(FreeType.inProgressBlock, 'SFT1R', simpleFutureRadio); //TODO still making

        lessonsCatalog.add(FreeType.whenPrime______, 'PAST1', pastPerfectOneToThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'PAST2', pastPerfectOneToThreePartTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'PAT_1', pastPerfectInRadio);
        // lessonsCatalog.add(FreeType.inProgressBlock, 'PAT_2', pastPerfectInRadioPartTwo);


        lessonsCatalog.add(FreeType.whenPrime______, 'BGT_1', beGoingToOneToThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'BGT_2', beGoingToOneToThreePartTwo);

        lessonsCatalog.add(FreeType.whenPrime______, 'L___1', location);

        lessonsCatalog.add(FreeType.whenPrime______, 'EINE1', eitherNeither);
        lessonsCatalog.add(FreeType.whenPrime______, 'IV__1', irregularVerbs);
        lessonsCatalog.add(FreeType.whenPrime______, 'IV__2', irregularVerbsOneTwoThree);

        lessonsCatalog.add(FreeType.whenPrime______, 'P_S_1', singularAndPlural);
        lessonsCatalog.add(FreeType.whenPrime______, 'FEW_1', fewLittle);
        lessonsCatalog.add(FreeType.whenPrime______, 'MUCH1', muchManyALot);
        lessonsCatalog.add(FreeType.whenPrime______, 'V___1', verbHave);
        lessonsCatalog.add(FreeType.whenPrime______, 'BE__1', toBeInPresentAndPast);
        lessonsCatalog.add(FreeType.whenPrime______, 'MINE1', mineYour);
        lessonsCatalog.add(FreeType.whenPrime______, 'MINE2', myselfYourself);

        lessonsCatalog.add(FreeType.alwaysFree_____, 'SY_AD', synonymsAD);
        lessonsCatalog.add(FreeType.whenPrime______, 'SY_DF', synonymsDF);
        lessonsCatalog.add(FreeType.whenPrime______, 'SY_GL', synonymsGL);
        lessonsCatalog.add(FreeType.whenPrime______, 'SY_LS', synonymsLS);
        lessonsCatalog.add(FreeType.whenPrime______, 'SY_SW', synonymsSW);

        lessonsCatalog.add(FreeType.alwaysFree_____, 'COL_1', collectiveNouns);
        lessonsCatalog.add(FreeType.whenPrime______, 'COL_2', collectiveNounsPartTwo);
        lessonsCatalog.add(FreeType.whenPrime______, 'COL_3', collectiveNounsPartThree);
        lessonsCatalog.add(FreeType.whenPrime______, 'COL_4', collectiveNounsPartFour);
        lessonsCatalog.add(FreeType.whenPrime______, 'COL_5', collectiveNounsPartFive);

        const devKey = 'COL_1';
        lessonsCatalog.setActiveLesson(config.isProduction ? 'PC_AN1' : devKey);
        return resolve(lessonsCatalog);
    });
}


export {
    getLessons
}

