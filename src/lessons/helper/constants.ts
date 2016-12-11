/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');
import { APIState } from '../../services';
export const space = '___';
export const multi = '−';
export const empty = '_';

export enum TypeId {
    fourPictures = 1,
    fourWords,
    oneTwoThree,
    radio,
    multiRadio,
    inradio,
    draw,

    digitalTime,
    analogTime,
    areRepeated, //correct or incorrect can be repeated
    noSpace,
    multiAnswer // contains correct or incorrect contains multi 
}

export function getDefaultUser(apiState: APIState) {
    return {
        name: apiState.isProduction ? '' : 'kamil',
        email: apiState.isProduction ? '' : 'kamil.praczyk1@gmail.com',
        password: apiState.isProduction ? '' : 'kamil'
    }
}

export const isId = {
    isOneTwoThree: (id: TypeId[]) => _.contains(id, TypeId.oneTwoThree),
    isRadio: (id: TypeId[]) => _.contains(id, TypeId.radio),
    isMultiRadio: (id: TypeId[]) => _.contains(id, TypeId.multiRadio),
    isInradio: (id: TypeId[]) => _.contains(id, TypeId.inradio),
    isDraw: (id: TypeId[]) => _.contains(id, TypeId.draw),
    isFourPictures: (id: TypeId[]) => _.contains(id, TypeId.fourPictures),
    isFourWords: (id: TypeId[]) => _.contains(id, TypeId.fourWords),
    isDigitalTime: (id: TypeId[]) => _.contains(id, TypeId.digitalTime),
    isAnalogTime: (id: TypeId[]) => _.contains(id, TypeId.analogTime),
    isNoSpace: (id: TypeId[]) => _.contains(id, TypeId.noSpace),
    isRepeated: (id: TypeId[]) => _.contains(id, TypeId.areRepeated),
    isMultiAnswer: (id: TypeId[]) => _.contains(id, TypeId.multiAnswer)
}


export function id(a: TypeId[] = [], b: TypeId[] = [], c: TypeId[] = []) {
    return a.concat(b).concat(c);
}

/* get rest props of simple object */
export function getRest(group: any, exclude: any[]): string[] {
    return _.chain(group).values().difference(exclude).value();
}

const namesMale = ['Tim', 'George', 'Paul', 'Bob', 'Peter', 'Jason', 'John', 'Jack', 'Chris', 'Mike', 'Mark', 'Sam', 'Rob', 'Tom'];
const namesFemale = ['Jane', 'Jadie', 'Mary', 'Lisa', 'Maria', 'Suzan', 'Sara', 'Sally'];
const possessiveNamesMale = ["Rob's", "John's", "Jack's"];
const possessiveNamesFemale = ["Kate's", "Mary's", "Jane's"];
const surname = ['Wilson', 'Thomas'];
const mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const countries = ['Germany', 'Poland', 'America', 'England', 'Scotland', 'China', 'Spain', 'India', 'Japan', 'the United Kingdom'];
const cities = ['Barcelona', 'Manchester', 'New York', 'Madrid', 'London',]
const nationalityAdj = ['English', 'Japanese', 'French', 'Australian', 'German', 'Arabic', 'Polish', 'Spanish'];

export function getNameMale() { return _.sample(namesMale, 1)[0] as string; }
export function getNameFemale() { return _.sample(namesFemale, 1)[0] as string; }
export function getPossessiveNameMale() { return _.sample(possessiveNamesMale, 1)[0] as string; }
export function getPossessiveNameFemale() { return _.sample(possessiveNamesFemale, 1)[0] as string; }
export function getSurname() { return _.sample(surname, 1)[0] as string; }
export function getMounth() { return _.sample(mounths, 1)[0] as string; }
export function getDay() { return _.sample(days, 1)[0] as string; }
export function getCity() { return _.sample(cities, 1)[0] as string; }
export function getNationalityAdj() { return _.sample(nationalityAdj, 1)[0] as string; }
export function getCountry(isCapitalLetter?: boolean) {
    const country = _.sample(countries, 1)[0] as string;
    return isCapitalLetter ? country.charAt(0).toUpperCase() + country.slice(1) : country;
}


let _names: any = [].concat(namesMale).concat(namesFemale).concat(possessiveNamesMale).concat(possessiveNamesFemale).concat(surname);


export const capital = {
    //for capital tests
    _names: _.object(_names, _names),
    _nationalityAdj: _.object(nationalityAdj, nationalityAdj),
    _countries: _.object(countries, countries),
    _cities: _.object(cities, cities),

    exeptions: {
        I: 'I',
        Iam: "I'm",
        Ihave: "I've"
    },

    nationalityAdj: {
        English: 'English',
        Japanese: 'Japanese',
    },

    places: {
        Antarctica: 'Antarctica',
        Sun: 'Sun',//the
        Moon: 'Moon',//the
        Earth: 'Earth',//the
        Atlantic: ' Atlantic',
        Pacific: 'Pacific',
        Thames: 'Thames',
        McDonalds: "McDonald's",
        Barcelona: 'Barcelona',
        NewYork: 'New York',
        Madrid: 'Madrid',
        Himalayas: 'Himalayas',
        EnglishChannel: 'English Channel',//the
        Alps: 'Alps',
        Sahara: 'Sahara',
        SouthPole: 'South Pole'//the
    },

    streets: {
        ClarkAvenue: 'Clark Avenue',
        CravenDrive: 'Craven Drive',
        ParkLane: 'Park Lane',
        GeorgeStreet: 'George Street',
        ParkAvenue: 'Park Avenue',
        SydneyOperaHouse: 'Sydney Opera House',
        CentralPark: 'Central Park',
        EmpireStateBuilding: 'Empire State Building',//the
        WallStreet: 'Wall Street',
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
        December: 'December',
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
        TrueBlood: "'True Blood'",
        //WarAndPeace: 'War and Peace',
        //TheMerchantOfVenice: 'The Merchant of Venice',
        //CrimeAndPunishment: 'Crime and Punishment',
        //SpiderManII: 'Spider Man II'
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
        UnitedKingdom: 'United Kingdom'//the
    },

    nationalityNoun: {
        English: 'English',//
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
        Internet: 'Internet',
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
//Safari not supported?
// implement search?
//irregular verbs - two answers selected?!  - 'name' have to be in the middle button
// TODO would be nice if track bad answers or mark them to favourite and review later?
//TODO - answers have different buttons from info and main button -name.
//TODO - IE11 grammar fix layout
//TODO - IE11 - fix number wrap 
//test - check if postfix is defined then last correct have no ?.!
// make lessons - tences vs each other
//make lessons - sentence to =>question sentence

//TODO test new error msg (constructor with message now)
//Todo log out clear status from lessons 
//TODO subscribe buttons too long not braking text - overflow

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


TODO
//https://learnenglish.britishcouncil.org/en/english-grammar/verbs/verbs-time-clauses-and-if-clauses
exp.push(tList({
    t: "We do not normally use will in clauses with <p>if</p> or with <p>time words</p>.",
    list: [
        { l: "I'll come home when I <s>will</s> finish work." },
        { l: "We won't be able to go out if it <s>will rain</s> rains." },
        { l: "It will be nice to see Chris when he <s>will get here</s> gets here." },
        { l: "You must stay home until your mother <s>will come</s> comes." },
    ]
}));

{ //verbs in time clauses and if clauses
        id: id(common,[TypeId.multiAnswer]), title, explenation, info,
        name: "When you " + space + " arrive tonight, we " + space + " go out for dinner.",
        correct: [empty + " " + multi + " will"],
        incorrect: ["will " + multi + " will"]
    }, //10



 */