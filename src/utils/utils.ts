/// <reference path="../../typings/tsd.d.ts" />
import _ = require("underscore");
import voice = require("./voice");
import keys = require("./keys/keys");
import { capital } from '../lessons/helper/constants';

export = {
    union,
    union3,
    first,
    voice,
    round10,
    keys,
    replaceAll,
    tryToSetLowercaseFirstLetter,
    howManyDaysLeft
};

function howManyDaysLeft(date: string): number { //ISO 2016-12-30
    if (date) {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date();
        var secondDate = new Date(date);
        return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
    }
    return 0;
}

function tryToSetLowercaseFirstLetter(s: string, sentenceWords: string[]) {

    const sentenceWord = _.first(sentenceWords);

    const words = s.split(' ');
    const word = _.first(words);

    if (sentenceWord === word) {

        let allowLowercase = true;
        _.mapObject(capital, (category) => {
            _.mapObject(category, (capitalWord) => {
                if (capitalWord === word) {
                    allowLowercase = false;
                }
            });
        });
        if (!allowLowercase) {
            return s;
        }

        return lowercaseFirstLetter(s);
    }
    return s;
}

function lowercaseFirstLetter(s: string) {
    return s.charAt(0).toLowerCase() + s.slice(1);
}

function replaceAll(str: string, search: string, replacement: string) {
    return str.replace(new RegExp(search, 'g'), replacement);
};

function decimalAdjust(type: string, value: any, exp: any) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

function round10(value: number, exp: number) {
    return decimalAdjust('round', value, exp);
};



function first(obj: any) {
    for (var a in obj) return a;
}

function union<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}

function union3<T, U, X>(first: T, second: U, third: X): T & U & X {
    let result = <T & U & X>{};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }

    for (let id in third) {
        if (!result.hasOwnProperty(id)) {
            result[id] = third[id];
        }
    }
    return result;
}
