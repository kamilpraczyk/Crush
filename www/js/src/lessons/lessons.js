"use strict";
var _ = require('underscore');
var animals = require('./animals/animals');
var clockFourWords = require('./extra/clock/clockFourWords');
var clockDraw = require('./extra/clock/clockDraw');
var clock = require('./extra/clock/clock');
var presentTenseOneToThree = require('./tense/presentTense/presentTenseOneToThree');
var presentTenseOneToThreePartTwo = require('./tense/presentTense/presentTenseOneToThreePartTwo');
var presentTenseRadio = require('./tense/presentTense/presentTenseRadio');
var presentTenseMatch = require('./tense/presentTense/presentTenseMatch');
var presentContinuousTenseOneToThree = require('./tense/presentContinuousTense/presentContinuousTenseOneToThree');
var presentContinuousTenseOneToThreePartTwo = require('./tense/presentContinuousTense/presentContinuousTenseOneToThreePartTwo');
var presentContinuousTenseRadio = require('./tense/presentContinuousTense/presentContinuousTenseRadio');
var presentPerfectTenseOneToThree = require('./tense/presentPerfectTense/presentPerfectTenseOneToThree');
var presentPerfectTenseOneToThreePartTwo = require('./tense/presentPerfectTense/presentPerfectTenseOneToThreePartTwo');
var presentPerfectTenseRadio = require('./tense/presentPerfectTense/presentPerfectTenseRadio');
var presentPerfectContinuousTenseOneToThree = require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThree');
var presentPerfectContinuousTenseOneToThreePartTwo = require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseOneToThreePartTwo');
var presentPerfectContinuousTenseRadio = require('./tense/presentPerfectContinuousTense/presentPerfectContinuousTenseRadio');
var location = require('./extra/location/location');
var eitherNeither = require('./words/eitherNeither/eitherNeither');
var an_a_shortOne = require('./words/an_a/an_a_shortOne');
var an_a_shortTwo = require('./words/an_a/an_a_shortTwo');
var an_a_shortThree = require('./words/an_a/an_a_shortThree');
var an_a_shortFour = require('./words/an_a/an_a_shortFour');
var irregularVerbs = require('./irregular/verbs/irregularVerbs');
var irregularVerbsOneTwoThree = require('./irregular/verbs/irregularVerbsOneTwoThree');
var singularAndPlural = require('./singularAndPlural/singularAndPlural');
var fewLittle = require('./quantifiers/fewLittle/fewLittle');
var muchManyALot = require('./quantifiers/muchManyALot/muchManyALot');
var verbHave = require('./verb/have/verbHave');
var toBeInPresentAndPast = require('./verb/toBeInPresentAndPast/toBeInPresentAndPast');
var mineYour = require('./pronouns/possesive/mineYour');
var myselfYourself = require('./pronouns/reflexive/myselfYourself');
var spellingVerbsIngOne = require('./words/ing/spellingVerbsIngOne');
var spellingVerbsIngTwo = require('./words/ing/spellingVerbsIngTwo');
var spellingVerbsIngThree = require('./words/ing/spellingVerbsIngThree');
var prefixes_one = require('./words/prefixes/prefixes_one');
var prefixes_two = require('./words/prefixes/prefixes_two');
//TODO offer some for free and some when registered, and rest when subscribed
var lessons = {
    //NOTE keep short uid - they are saved to database
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
    myselfYourself: w(true, myselfYourself)
};
_.mapObject(lessons, function (lesson, uid) {
    lesson.uid = uid;
});
function w(free, data) {
    var l = {
        free: free,
        active: false,
        name: data.title,
        lessons: data.lessons
    };
    return l;
}
module.exports = {
    lessons: lessons,
    activeStartup: 'animals'
};
