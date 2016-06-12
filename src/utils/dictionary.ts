import utils = require('./utils');
import _ = require('underscore');
import english = require('./languages/english');
import polish = require('./languages/polish');

let dictionary = english;
//dictionary = polish;

const wrap = function (id: string) {
    if (dictionary[id]) {
        return function () {
            return dictionary[id];
        }
    } else {
        throw new Error('Not in dictionary id: ' + id);
    }
}

const replace = function (id: string, options: any) {
    let text = dictionary[id]
    _.map(options, (object: any, id: string) => {
        let key = '{' + id + '}';
        if (text.indexOf(key) !== -1) {
            text = text.replace(key, object)
        } else {
            throw new Error('Not in dictionary key: ' + key);
        }
    });
    return text;
}

const data = {
    GREET_LOGIN: wrap('GREET_LOGIN'),
    GREET_EMAIL: wrap('GREET_EMAIL'),
    GREET_PASSWORD: wrap('GREET_PASSWORD'),
    GREET_REGISTER: wrap('GREET_REGISTER'),
    GREET_HELLO: (o: { name: string }) => {
        return replace('GREET_HELLO', o);
    },
    GREET_LOGIN_INVALID: wrap('GREET_LOGIN_INVALID'),
    GREET_TITLE: wrap('GREET_TITLE'),
    GREET_START: wrap('GREET_START'),
    OK: wrap('OK'),
    SUBSCRIBE_TEXT: wrap('SUBSCRIBE_TEXT'),
    SUBSCRIBE_BUTTON: wrap('SUBSCRIBE_BUTTON'),

    GRATULATIONS_TITLE: wrap('GRATULATIONS_TITLE'),
    GRATULATIONS_TEXT: (o: { score: number }) => {
        return replace('GRATULATIONS_TEXT', o);
    },
    GRATULATIONS_BUTTON: wrap('GRATULATIONS_BUTTON'),
    DID_I_HELP_YOU_OUT: wrap('DID_I_HELP_YOU_OUT'),
    BUY_ME_A_BEER: wrap('BUY_ME_A_BEER'),
};
export = data;

