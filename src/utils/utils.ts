/// <reference path="../../typings/tsd.d.ts" />
import _ = require("underscore");
import voice = require("./voice");
import keys = require("./keys/keys");
import { capital } from '../lessons/helper/constants';
import Promise = require("bluebird");
import md5 = require('./md5')



const clone = <T>(orig: T): T => {
    return orig; //TODO test
    if (typeof orig === 'undefined') return orig;
    if (orig === null) return null;
    return JSON.parse(JSON.stringify(orig));
};


function delay(time?: number) {
    return new Promise((resolve) => {
        return resolve(null);
    }).delay(time || 2000);
}


function removeInvalidChars(s: string) {
    if (s)
        return s.replace(/[/|;"']/g, "");
    return s;
}

function isValidISODate(date: string) {
    return /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(date);
}


var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function howManyDaysLeft(date: string) {
    // Discard the time and time-zone information.
    if (date) {
        var a = new Date();
        var b = new Date(date);
        var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }
    return 0;
}


function getISOdate(date?: Date) {
    date = date || new Date();
    return date.toISOString().substring(0, 10);
};

function getToDayISOdate() {
    return getISOdate();
}

function getNextYearISOdate() {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 1);
    return getISOdate(d);
}
function getNextMonthISOdate() {
    const d = new Date();
    d.setMonth(d.getMonth() + 1);
    return getISOdate(d);
}

const SECOND_IN_MILLIS = 1000;
const MINUTE_IN_MILLIS = SECOND_IN_MILLIS * 60;
const HOUR_IN_MILLIS = MINUTE_IN_MILLIS * 60;
const DAY_IN_MILLIS = HOUR_IN_MILLIS * 24;

function getNext7DaysISOdate() {
    const d = new Date();
    const date = new Date(d.getTime() + (8 * DAY_IN_MILLIS)); //8 to make 7 days
    return getISOdate(date);
}

function getHumanizedDate(s: string) {
    if (s && s.length === 10) {
        const dArr = s.split("-");
        return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
    }
    return s;
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
function upercaseFirstLetter(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
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


function toPercent(numb: number, length: number) {
    return (numb * 100) / length;
}

function toPercentHumanize(numb: number, length: number) {
    return toPercent(numb, length).toFixed(2) + '%';
}


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




function _getBrowser(): Browser {
    function get_browser_version() {
        /*version will be cut to full number no float*/
        var ua = navigator.userAgent, tem: any = null, M: any = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: (tem[1] || '') };
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR\/(\d+)/)
            if (tem != null) { return { name: 'Opera', version: tem[1] }; }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
        return {
            name: M[0],
            version: M[1]
        };
    }

    var isOpera = !!(<any>window).opera || navigator.userAgent.indexOf(' OPR/') >= 0;  // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof (<any>window).InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call((<any>window).HTMLElement).indexOf('Constructor') > 0;  // At least Safari 3+: "[object HTMLElementConstructor]"
    // For the purposes of this code Electron is Chrome. See platform.js for more details. 
    var isChrome = !!(<any>window).chrome && !isOpera || navigator.userAgent.indexOf('Electron') >= 0;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!(<any>document).documentMode;  // At least IE6 
    var isEdge = !isIE && !!(<any>window).StyleMedia;  //  Edge 20+

    var version = get_browser_version().version;

    return {
        isOpera,
        isFirefox,
        isSafari,
        isChrome,
        isIE,
        isEdge,

        version: parseInt(version, 10)
    }
}
interface Browser {
    isOpera: boolean,
    isFirefox: boolean,
    isSafari: boolean,
    isChrome: boolean,
    isIE: boolean,
    isEdge: boolean,
    version: number
}
let browser: Browser = null;

function getBrowser() {
    if (!browser)
        browser = _getBrowser();
    return browser;
}

function isBrowserSupported(): boolean {

    const b = getBrowser();
    /*var output = 'Detecting browsers:<hr>';
    output += 'isFirefox: ' + b.isFirefox + '<br>';
    output += 'isChrome: ' + b.isChrome + '<br>';
    output += 'isSafari: ' + b.isSafari + '<br>';
    output += 'isOpera: ' + b.isOpera + '<br>';
    output += 'isIE: ' + b.isIE + '<br>';
    output += 'isIE Edge: ' + b.isEdge + '<br>';
    output += ' version : ' + b.version + '<br>';
    document.body.innerHTML = output;*/
    /*Support veriosns from Dec 2015 */
    if ((b.isChrome && b.version >= 47) ||
        (b.isFirefox && b.version >= 43) ||
        //(b.isSafari && b.version >= 9) ||
        // (b.isIE && b.version >= 11) ||
        // (b.isEdge && b.version >= 25) ||
        (b.isOpera && b.version >= 34)) {
        return true;
    }
    return false;
}


export {
    union,
    union3,
    clone,
    first,
    toPercentHumanize,
    toPercent,
    voice,
    round10,
    keys,
    replaceAll,
    tryToSetLowercaseFirstLetter,
    upercaseFirstLetter,
    howManyDaysLeft,
    checkEmail,
    isValidISODate,
    removeInvalidChars,
    getHumanizedDate,
    getToDayISOdate,
    getNextYearISOdate,
    getNextMonthISOdate,
    getNext7DaysISOdate,
    isBrowserSupported,
    delay, //delay promise
    md5,
    getBrowser
};



