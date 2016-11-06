/// <reference path="../../typings/tsd.d.ts" />
import {LessonsCatalog} from '../services/LessonsCatalog';
import Promise = require('bluebird');
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
import verbEndings = require('./verb/endings/verbEndings');
import speech_one = require('./words/speach/speech_one');


function getLessons(lessonsCatalog: LessonsCatalog) {
    return new Promise<LessonsCatalog>((resolve, reject) => {


        //TODO offer some for free and some when registered, and rest when subscribed
        lessonsCatalog.add(true, 'A___0', verbEndings);
        lessonsCatalog.add(true, 'A___1', speech_one);

        lessonsCatalog.add(true, 'PR__2', prefixes_one);
        lessonsCatalog.add(true, 'PR__3', prefixes_two);

        lessonsCatalog.add(true, 'SP__1', spellingVerbsIngOne);
        lessonsCatalog.add(true, 'SP__2', spellingVerbsIngTwo);
        lessonsCatalog.add(true, 'SP__3', spellingVerbsIngThree);

        lessonsCatalog.add(true, 'AN__1', an_a_shortOne);
        lessonsCatalog.add(true, 'AN__2', an_a_shortTwo);
        lessonsCatalog.add(true, 'AN__3', an_a_shortThree);
        lessonsCatalog.add(true, 'AN__4', an_a_shortFour);

        lessonsCatalog.add(true, 'CL_01', clockFourWords);
        lessonsCatalog.add(true, 'CL_02', clockDraw);
        lessonsCatalog.add(true, 'CL_03', clock);

        lessonsCatalog.add(true, 'AN__01', animals);

        lessonsCatalog.add(true, 'PT__01', presentTenseOneToThree);
        lessonsCatalog.add(true, 'PT__02', presentTenseOneToThreePartTwo);
        lessonsCatalog.add(true, 'PT__03', presentTenseRadio);
        lessonsCatalog.add(true, 'PT__04', presentTenseMatch);

        lessonsCatalog.add(true, 'PCT_01', presentContinuousTenseOneToThree);
        lessonsCatalog.add(true, 'PCT_02', presentContinuousTenseOneToThreePartTwo);
        lessonsCatalog.add(true, 'PCT_03', presentContinuousTenseRadio);

        lessonsCatalog.add(true, 'PPT_01', presentPerfectTenseOneToThree);
        lessonsCatalog.add(true, 'PPT_02', presentPerfectTenseOneToThreePartTwo);
        lessonsCatalog.add(true, 'PPT_03', presentPerfectTenseRadio);

        lessonsCatalog.add(true, 'PPCT_1', presentPerfectContinuousTenseOneToThree);
        lessonsCatalog.add(true, 'PPCT_2', presentPerfectContinuousTenseOneToThreePartTwo);
        lessonsCatalog.add(true, 'PPCT_3', presentPerfectContinuousTenseRadio);

        lessonsCatalog.add(true, 'L___1', location);

        lessonsCatalog.add(true, 'EINE1', eitherNeither);
        lessonsCatalog.add(true, 'IV__1', irregularVerbs);
        lessonsCatalog.add(true, 'IV__2', irregularVerbsOneTwoThree);

        lessonsCatalog.add(true, 'P_S_1', singularAndPlural);
        lessonsCatalog.add(true, 'FEW_1', fewLittle);
        lessonsCatalog.add(true, 'MUCH1', muchManyALot);
        lessonsCatalog.add(true, 'V___1', verbHave);
        lessonsCatalog.add(true, 'BE__1', toBeInPresentAndPast);
        lessonsCatalog.add(true, 'MINE1', mineYour);
        lessonsCatalog.add(true, 'MINE2', myselfYourself);

        lessonsCatalog.setActiveLesson('CL_03');

        return resolve(lessonsCatalog);
    });
}


export {
getLessons
}

