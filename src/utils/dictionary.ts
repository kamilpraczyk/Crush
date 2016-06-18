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
    LOGEDIN_AS: (o: { name: string }) => {
        return replace('LOGEDIN_AS', o);
    },
    LOGIN_VALID: (o: { valid: number }) => {
        if (o.valid === 0) {
            return replace('LOGIN_EXPIRED', o);
        } else if (o.valid === 1) {
            return replace('LOGIN_VALID', o);
        } else if (o.valid > 1) {
            return replace('LOGIN_VALID_PLURAL', o);
        }
        return '';

    },
    LOG_OUT: wrap('LOG_OUT'),
    EXPIRED_TEXT: wrap('EXPIRED_TEXT'),

    GRATULATIONS_TITLE: wrap('GRATULATIONS_TITLE'),
    GRATULATIONS_TEXT: (o: { score: number }) => {
        return replace('GRATULATIONS_TEXT', o);
    },
    GRATULATIONS_BUTTON: wrap('GRATULATIONS_BUTTON'),
    DID_I_HELP_YOU_OUT: wrap('DID_I_HELP_YOU_OUT'),
    BUY_ME_A_BEER: wrap('BUY_ME_A_BEER'),


    REGISTERING_TITLE: wrap('REGISTERING_TITLE'),
    REGISTERING_NAME: wrap('REGISTERING_NAME'),
    REGISTERING_BUTTON_REGISTER: wrap('REGISTERING_BUTTON_REGISTER'),
    REGISTERING_PASSWORD: wrap('REGISTERING_PASSWORD'),
    REGISTERING_EMAIL: wrap('REGISTERING_EMAIL'),
    REGISTERING_RETYPE_PASSWORD: wrap('REGISTERING_RETYPE_PASSWORD'),
    REGISTERING_PROCESS : wrap('REGISTERING_PROCESS'),

    REGISTERING_ERROR_NO_NAME: wrap('REGISTERING_ERROR_NO_NAME'),
    REGISTERING_ERROR_NO_PASSWORD: wrap('REGISTERING_ERROR_NO_PASSWORD'),
    REGISTERING_ERROR_NO_RETYPED_PASSWORD: wrap('REGISTERING_ERROR_NO_RETYPED_PASSWORD'),
    REGISTERING_ERROR_NO_EMAIL: wrap('REGISTERING_ERROR_NO_EMAIL'),
    REGISTERING_ERROR_NO_MATCH_PASSWORDS: wrap('REGISTERING_ERROR_NO_MATCH_PASSWORDS'),
    REGISTERING_ERROR_INVALID_EMAIL: wrap('REGISTERING_ERROR_INVALID_EMAIL'),
    REGISTERING_ERROR_PASSWORD_TO_SHORT: wrap('REGISTERING_ERROR_PASSWORD_TO_SHORT')
};
export = data;

