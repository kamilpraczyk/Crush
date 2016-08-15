"use strict";
/// <reference path="../../../typings/tsd.d.ts" />
var _ = require('underscore');
exports.space = '___';
exports.multi = '−';
exports.empty = '_';
exports.viewIds = {
    fourPictures: 'f',
    fourWords: 'w',
    oneTwoThree: 'o',
    radio: 'r',
    inradio: 'i',
    draw: 'd'
};
exports.displayIds = {
    digitalTime: 'e',
    analogTime: 'c',
    areRepeated: 'a',
    noSpace: 'n'
};
exports.icons = {
    draw: 'moon-quill',
    fourPictures: 'moon-images',
    fourWords: 'moon-table',
    radio: 'moon-insert-template',
    oneTwoThree: 'moon-bubble',
    inradio: 'moon-contrast'
};
exports.defaultUser = {
    name: 'kamil',
    email: 'kamil.praczyk1@gmail.com',
    password: 'kamil'
};
exports.isId = {
    isOneTwoThree: function (id) {
        return id.indexOf(exports.viewIds.oneTwoThree) !== -1;
    },
    isRadio: function (id) {
        return id.indexOf(exports.viewIds.radio) !== -1;
    },
    isInradio: function (id) {
        return id.indexOf(exports.viewIds.inradio) !== -1;
    },
    isDraw: function (id) {
        return id.indexOf(exports.viewIds.draw) !== -1;
    },
    isFourPictures: function (id) {
        return id.indexOf(exports.viewIds.fourPictures) !== -1;
    },
    isFourWords: function (id) {
        return id.indexOf(exports.viewIds.fourWords) !== -1;
    },
    isDigitalTime: function (id) {
        return id.indexOf(exports.displayIds.digitalTime) !== -1;
    },
    isAnalogTime: function (id) {
        return id.indexOf(exports.displayIds.analogTime) !== -1;
    },
    isNoSpace: function (id) {
        return id.indexOf(exports.displayIds.noSpace) !== -1;
    }
};
function id(a, b, c) {
    if (a === void 0) { a = []; }
    if (b === void 0) { b = []; }
    if (c === void 0) { c = []; }
    return _.uniqueId('_' + a.join('_') + b.join('_') + c.join('_'));
}
exports.id = id;
/* get rest props of simple object */
function getRest(group, exclude) {
    return _.chain(group).values().without(exclude).value();
}
exports.getRest = getRest;
var namesMale = ['Bob', 'Peter', 'Jason', 'John', 'Jack', 'Chris', 'Mike', 'Mark', 'Sam', 'Rob', 'Tom', 'Wilson', 'Thomas'];
var namesFemale = ['Jadie', 'Mary', 'Lisa', 'Maria', 'Suzan', 'Sara', 'Sally'];
function getNameMale() {
    return _.sample(namesMale, 1)[0];
}
exports.getNameMale = getNameMale;
function getNameFemale() {
    return _.sample(namesFemale, 1)[0];
}
exports.getNameFemale = getNameFemale;
//TODO names continue 's ect.
exports.capital = {
    exeptions: {
        I: 'I',
        Iam: "I'm",
        Ihave: "I've"
    },
    names: {
        Bob: 'Bob',
        Peter: 'Peter',
        Jason: 'Jason',
        Jadie: 'Jadie',
        John: 'John',
        Jack: 'Jack',
        Chris: 'Chris',
        Lisa: 'Lisa',
        Mike: 'Mike',
        Mary: 'Mary',
        Mark: 'Mark',
        Maria: 'Maria',
        Suzan: 'Suzan',
        Sara: 'Sara',
        Sally: 'Sally',
        Sam: 'Sam',
        Rob: 'Rob',
        Robs: "Rob's",
        Tom: 'Tom',
        Wilson: 'Wilson',
        Kates: "Kate's",
        Thomas: 'Thomas'
    },
    places: {
        Antartica: 'Antartica',
        Sun: 'Sun',
        Moon: 'Moon',
        Earth: 'Earth',
        Atlantic: ' Atlantic',
        Pacific: 'Pacific',
        Thames: 'Thames',
        McDonalds: "McDonald's",
        Barcelona: 'Barcelona',
        Manchester: 'Manchester',
        NewYork: 'New York',
        Madrid: 'Madrid',
        London: 'London',
        Himalayas: 'Himalayas',
        EnglishChannel: 'English Channel',
        Alps: 'Alps',
        Sahara: 'Sahara',
        SouthPole: 'South Pole' //the
    },
    streets: {
        ClarkAvenue: 'Clark Avenue',
        CravenDrive: 'Craven Drive',
        ParkLane: 'Park Lane',
        GeorgeStreet: 'George Street',
        ParkAvenue: 'Park Avenue',
        SydneyOperaHouse: 'Sydney Opera House',
        CentralPark: 'Central Park',
        EmpireStateBuilding: 'Empire State Building',
        WallStreet: 'Wall Street'
    },
    mounths: {
        January: 'January',
        February: 'February',
        March: 'March',
        April: 'April',
        May: 'May',
        June: 'June',
        July: 'July',
        August: 'August',
        September: 'September',
        October: 'October',
        November: 'November',
        December: 'December'
    },
    days: {
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
        Thursday: 'Thursday',
        Friday: 'Friday',
        Saturday: 'Saturday',
        Sunday: 'Sunday'
    },
    daysPlural: {
        Mondays: 'Mondays',
        Tuesdays: 'Tuesdays',
        Wednesdays: 'Wednesdays',
        Thursdays: 'Thursdays',
        Fridays: 'Fridays',
        Saturdays: 'Saturdays',
        Sundays: 'Sundays'
    },
    holidays: {
        Christmas: 'Christmas',
        Easter: 'Easter',
        NewYearsDay: "New Year's Day",
        ThanksgivingDay: "Thanksgiving Day"
    },
    books: {
        GameOfThrones: "'Game of Thrones'",
        TrueBlood: "'True Blood'"
    },
    countries: {
        Germany: 'Germany',
        Poland: 'Poland',
        America: 'America',
        England: 'England',
        Scotland: 'Scotland',
        China: 'China',
        Spain: 'Spain',
        Japan: 'Japan',
        UnitedKingdom: 'United Kingdom' //the
    },
    nationalityAdj: {
        English: 'English',
        Japanese: 'Japanese',
        French: 'French',
        Australian: 'Australian',
        German: 'German',
        Arabic: 'Arabic',
        Polish: 'Polish',
        Spanish: 'Spanish'
    },
    nationalityNoun: {
        English: 'English',
        Germans: 'Germans',
        French: 'French',
        Americans: 'Americans',
        Polish: 'Polish',
        Chinese: 'Chinese'
    },
    people: {
        Catholic: 'Catholic',
        Englishman: 'Englishman',
        Peruvian: 'Peruvian',
        Buddhist: 'Buddhist'
    },
    things: {
        TV: 'TV',
        Internet: 'Internet'
    },
    clock: {
        pm: 'p.m.',
        am: 'a.m.'
    },
    abbreviations: {
        UFO: 'UFO',
        FBI: 'FBI'
    }
};
//TODO - answers have different buttons from info and main button -name.
//TODO - make something with minimalized menu button - is on the way always
//TODO - IE11 grammar fix layout
//TODO - IE11 - fix number wrap
//TODO - user - pie chart with status who many done. (lessons finished - 10 / 201) (questions answered 110/1120) (progress : '10%') - if more in statisticks then better for user, motivation. 
// lessons 4 pictures with time clock?
// make lessons - tences vs each other
//make lessons - sentence to =>question sentence
/*
ACTIVE / PASSIVE
Once a week, Tom cleans the car. Active
Once a week, the car is cleaned by Tom. Passive

*/
/*
        VS
Present simple:	I work
Present continuous:	I am working
Present perfect:	I have worked
Present perfect continuous:	I have been working
*/
/* The present progressive tense
//http://www.grammar-quizzes.com/presten1.html
 */ 
