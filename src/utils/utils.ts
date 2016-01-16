/// <reference path="../../typings/tsd.d.ts" />
import _ = require("underscore");

export = {
    union,
    union3
};

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
