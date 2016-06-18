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
    howManyDaysLeft,
    checkEmail
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


/*checkEmail - This is the correct RFC822 version.*/
function checkEmail(emailAddress: string) {
  var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
  var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
  var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
  var sQuotedPair = '\\x5c[\\x00-\\x7f]';
  var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
  var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
  var sDomain_ref = sAtom;
  var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
  var sWord = '(' + sAtom + '|' + sQuotedString + ')';
  var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
  var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
  var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
  var sValidEmail = '^' + sAddrSpec + '$'; // as whole string

  var reValidEmail = new RegExp(sValidEmail);

  return reValidEmail.test(emailAddress);
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
