var _ = require("underscore");
var voice = require("./voice");
var keys = require("./keys/keys");
function tryToSetLowercaseFirstLetter(s, sentenceWords) {
    console.log('s', s);
    var sentenceWord = _.first(sentenceWords);
    var words = s.split(' ');
    var word = _.first(words);
    if (sentenceWord === word) {
        switch (word) {
            case "I":
            case "I'm":
            case "English":
                return s;
        }
        return lowercaseFirstLetter(s);
    }
    return s;
}
function lowercaseFirstLetter(s) {
    return s.charAt(0).toLowerCase() + s.slice(1);
}
function replaceAll(str, search, replacement) {
    return str.replace(new RegExp(search, 'g'), replacement);
}
;
function decimalAdjust(type, value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
function round10(value, exp) {
    return decimalAdjust('round', value, exp);
}
;
function first(obj) {
    for (var a in obj)
        return a;
}
function union(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
function union3(first, second, third) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    for (var id in third) {
        if (!result.hasOwnProperty(id)) {
            result[id] = third[id];
        }
    }
    return result;
}
module.exports = {
    union: union,
    union3: union3,
    first: first,
    voice: voice,
    round10: round10,
    keys: keys,
    replaceAll: replaceAll,
    tryToSetLowercaseFirstLetter: tryToSetLowercaseFirstLetter
};
