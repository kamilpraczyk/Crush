
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import utils = require('../../../../../utils/utils');
import Promise = require("bluebird");

interface Props {
    name: string,
    email: string,
    password: string,
    retypePassword: string
}


function isPasswordMatched(p: Props) {
    return new Promise<void>((resolve, reject) => {
        if (p.password === p.retypePassword) {
            return resolve(null);
        }
        return reject(new Error(dictionary.ERROR_REGISTERING_NO_MATCH_PASSWORDS));
    });
}

function isNameEntered(p: Props) {
    return new Promise<void>((resolve, reject) => {
        if (p.name) {
            return resolve(null);
        }
        return reject(new Error(dictionary.ERROR_REGISTERING_NO_NAME));
    });
}

function isPasswordEntered(p: Props) {
    return new Promise<void>((resolve, reject) => {
        if (p.password) {
            return resolve(null);
        }
        return reject(new Error(dictionary.ERROR_REGISTERING_NO_PASSWORD));
    });
}

function isRetypedPasswordEntered(p: Props) {
    return new Promise<void>((resolve, reject) => {
        if (p.retypePassword) {
            return resolve(null);
        }
        return reject(new Error(dictionary.ERROR_REGISTERING_NO_RETYPED_PASSWORD));
    });
}

function isEmailEntered(p: Props) {
    return new Promise<void>((resolve, reject) => {
        if (p.email) {
            return resolve(null);
        }
        return reject(new Error(dictionary.ERROR_REGISTERING_NO_EMAIL));
    });
}

function isValidEmail(p: Props) {
    return new Promise<void>((resolve, reject) => {
        if (utils.checkEmail(p.email)) {
            return resolve(null);
        }
        return reject(new Error(dictionary.ERROR_REGISTERING_INVALID_EMAIL));
    });
}

function isValidPassword(p: Props) {
    return new Promise<void>((resolve, reject) => {
        if (p.password.length >= 5) {
            return resolve(null);
        }
        return reject(new Error(dictionary.ERROR_REGISTERING_PASSWORD_TO_SHORT));
    });
}

function validate(props: Props) {
    return isNameEntered(props)
        .then(() => isEmailEntered(props))
        .then(() => isValidEmail(props))
        .then(() => isPasswordEntered(props))
        .then(() => isValidPassword(props))
        .then(() => isRetypedPasswordEntered(props))
        .then(() => isPasswordMatched(props));
}

export {
validate
}