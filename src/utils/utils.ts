/// <reference path="../../typings/tsd.d.ts" />
import _ = require("underscore");
import voice = require("./voice");
import keys = require("./keys/keys");

export = {
    union,
    union3,
    first,
    voice,
    round10,
    keys
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
