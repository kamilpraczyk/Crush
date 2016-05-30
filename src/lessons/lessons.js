exports.activeStartup = 'clockFourWords';
var icon_draw = 'moon-quill';
var icon_fourPictures = 'moon-images';
var icon_fourWords = 'moon-images';
var icon_radio = 'moon-insert-template';
var icon_oneTwoThree = 'moon-bubble';
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
var irregularVerbs = require('./irregular/verbs/irregularVerbs');
var irregularVerbsOneTwoThree = require('./irregular/verbs/irregularVerbsOneTwoThree');
var singularAndPlural = require('./singularAndPlural/singularAndPlural');
var fewLittle = require('./quantifiers/fewLittle/fewLittle');
var muchManyALot = require('./quantifiers/muchManyALot/muchManyALot');
var verbHave = require('./verb/have/verbHave');
var toBeInPresentAndPast = require('./verb/toBeInPresentAndPast/toBeInPresentAndPast');
var mineYour = require('./pronouns/possesive/mineYour');
var myselfYourself = require('./pronouns/reflexive/myselfYourself');
exports.lessons = {
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
