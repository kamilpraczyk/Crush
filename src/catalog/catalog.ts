
/// <reference path="../../typings/tsd.d.ts" />
import Promise = require("bluebird");
import utils = require('../utils/utils');
import {HttpClientGET, HttpClientPOST, addUrlGetParam} from './httpClient';
import {getUrl, source} from './source';
import _ = require('underscore');
import dictionary = require('../utils/dictionary');

interface ServerIsPrime {
    isPrime: string,
    user: {
        email: string,
        name: string,
        valid_to: string,
        active: string,
        last_login: string
    }
}

function serverIsPrime(login: string, password: string): Promise<ServerIsPrime> {

    let newurl = getUrl(source.isPrime);
    newurl = addUrlGetParam(newurl, "l", login);
    newurl = addUrlGetParam(newurl, "p", password);

    return HttpClientGET(newurl).then((data: ServerIsPrime) => {

        console.info('<- serverIsPrime = ', data);

        if (!data || !data.user || !data.user.name) {
            throw new Error(dictionary.ERROR_LOGIN_INVALID);
        }

        return data;
    });
}


function emailGreeting(o: { email: string, password: string, retypePassword: string, name: string }) {
    let newurl = getUrl(source.emailGreeting);
    newurl = addUrlGetParam(newurl, "l", o.email);
    newurl = addUrlGetParam(newurl, "p", o.password);
    newurl = addUrlGetParam(newurl, "n", o.name);
    return HttpClientGET(newurl);
}

function serverUpdateValidTo(email: string, valid_to: string) {
    if (!utils.isValidISODate(valid_to)) {
        return Promise.reject(new Error('Date not valid' + valid_to));
    }
    const newurl = getUrl(source.updateValidation);
    const data = "l=" + email + "&d=" + valid_to;
    return HttpClientPOST(newurl, data);
}

function serverRegister(email: string, password: string, name: string) {
    const newurl = getUrl(source.register);
    const data = "l=" + email + "&p=" + password + "&n=" + name;
    return HttpClientPOST(newurl, data);
}

function updateLastLogin(email: string) {
    const newurl = getUrl(source.updateLastLogin);
    const data = "l=" + email + "&d=" + utils.getToDayISOdate();
    return HttpClientPOST(newurl, data);
}


function updateStatus(o: { email: string, value: string, name: string }) {
    let newurl = getUrl(source.updateStatus);
    const data = "l=" + o.email + "&v=" + o.value + "&n=" + o.name;
    return HttpClientPOST(newurl, data);
}

function readStatus(o: { email: string }): Promise<{ state?: { name: string, value: string }[] }> {
    let newurl = getUrl(source.readStatus);
    newurl = addUrlGetParam(newurl, "l", o.email);
    return HttpClientGET(newurl);
}

export {
serverIsPrime,
serverUpdateValidTo,
serverRegister,
emailGreeting,
updateLastLogin,
updateStatus,
readStatus,
}