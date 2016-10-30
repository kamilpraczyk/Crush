/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');


export const space = '___';
export const multi = '−';
export const empty = '_';

export const viewIds = {
    fourPictures: 'f',
    fourWords: 'w',
    oneTwoThree: 'o',
    radio: 'r',
    inradio: 'i',
    draw: 'd',
}

export const displayIds = {
    digitalTime: 'e',
    analogTime: 'c',
    areRepeated: 'a',
    noSpace: 'n'
}

export const defaultUser = {
    name: 'kamil',
    email: 'kamil.praczyk1@gmail.com',
    password: 'kamil',//'abcd!'
}

export const isId = {
    isOneTwoThree(id: string) {
        return id.indexOf(viewIds.oneTwoThree) !== -1;
    },
    isRadio(id: string) {
        return id.indexOf(viewIds.radio) !== -1;
    },
    isInradio(id: string) {
        return id.indexOf(viewIds.inradio) !== -1;
    },
    isDraw(id: string) {
        return id.indexOf(viewIds.draw) !== -1;
    },
    isFourPictures(id: string) {
        return id.indexOf(viewIds.fourPictures) !== -1;
    },
    isFourWords(id: string) {
        return id.indexOf(viewIds.fourWords) !== -1;
    },
    isDigitalTime(id: string) {
        return id.indexOf(displayIds.digitalTime) !== -1;
    },
    isAnalogTime(id: string) {
        return id.indexOf(displayIds.analogTime) !== -1;
    },
    isNoSpace(id: string) {
        return id.indexOf(displayIds.noSpace) !== -1;
    }

}


export function id(a: string[] = [], b: string[] = [], c: string[] = []) {
    return _.uniqueId('_' + a.join('_') + b.join('_') + c.join('_'));
}

/* get rest props of simple object */
export function getRest(group: any, exclude: any): string[] {
    return _.chain(group).values().without(exclude).value();
}

const namesMale = ['Paul', 'Bob', 'Peter', 'Jason', 'John', 'Jack', 'Chris', 'Mike', 'Mark', 'Sam', 'Rob', 'Tom'];
const namesFemale = ['Jadie', 'Mary', 'Lisa', 'Maria', 'Suzan', 'Sara', 'Sally'];
const possessiveNamesMale = ["Rob's"];
const possessiveNamesFemale = ["Kate's"];

export function getNameMale() {
    return _.sample(namesMale, 1)[0] as string;
}
export function getNameFemale() {
    return _.sample(namesFemale, 1)[0] as string;
}
export function getPossessiveNameMale() {
    return _.sample(possessiveNamesMale, 1)[0] as string;
}
export function getPossessiveNameFemale() {
    return _.sample(possessiveNamesFemale, 1)[0] as string;
}
const surname = ['Wilson', 'Thomas'];
export function getSurname() {
    return _.sample(surname, 1)[0] as string;
}



let _names: any = [].concat(namesMale).concat(namesFemale).concat(possessiveNamesMale).concat(possessiveNamesFemale).concat(surname);
_names = _.object(_names, _names);

export const capital = {
    exeptions: {
        I: 'I',
        Iam: "I'm",
        Ihave: "I've"
    },
    //for tests
    names: _names,

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
        Manchester: 'Manchester',
        NewYork: 'New York',
        Madrid: 'Madrid',
        London: 'London',
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
//todo scroll is not working - same place.
//todo analog clock is to big!? -not working
//irregular verbs - two answers selected?!  - 'name' have to be in the middle button
// TODO would be nice if track bad answers or mark them to favourite and review later?
//TODO - answers have different buttons from info and main button -name.
//TODO - IE11 grammar fix layout
//TODO - IE11 - fix number wrap
//TODO - user - pie chart with status who many done. (lessons finished - 10 / 201) (questions answered 110/1120) (progress : '10%') - if more in statisticks then better for user, motivation. 
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