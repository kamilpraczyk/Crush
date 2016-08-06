
/// <reference path="../../typings/tsd.d.ts" />
import Promise = require("bluebird");
import utils = require('../utils/utils');
import {HttpClientGET, HttpClientPOST, addUrlGetParam} from './httpClient';
import {getUrl, source} from './source';
import _ = require('underscore');


function serverIsPrime(login: string, password: string) {
    let newurl = getUrl(source.isPrime);
    newurl = addUrlGetParam(newurl, "l", login);
    newurl = addUrlGetParam(newurl, "p", password);
    return HttpClientGET(newurl);
}

function emailGreeting(o: { login: string, password: string, retypePassword: string, name: string }) {
    let newurl = getUrl(source.emailGreeting);
    newurl = addUrlGetParam(newurl, "l", o.login);
    newurl = addUrlGetParam(newurl, "p", o.password);
    newurl = addUrlGetParam(newurl, "n", o.name);
    return HttpClientGET(newurl);
}

function serverUpdateValidTo(login: string, valid_to: string) {
    if (!utils.isValidISODate(valid_to)) {
        return Promise.reject(new Error('Date not valid' + valid_to));
    }
    const newurl = getUrl(source.updateValidation);
    const data = "l=" + login + "&d=" + valid_to;
    return HttpClientPOST(newurl, data);
}

function serverRegister(login: string, password: string, name: string) {
    const newurl = getUrl(source.register);
    const data = "l=" + login + "&p=" + password + "&n=" + name;
    return HttpClientPOST(newurl, data);
}

function updateLastLogin(login: string) {
    const newurl = getUrl(source.updateLastLogin);
    const data = "l=" + login + "&d=" + utils.getToDayISOdate();
    return HttpClientPOST(newurl, data);
}


function updateStatus(o: { login: string, value: string, name: string }) {
    let newurl = getUrl(source.updateStatus);
    const data = "l=" + o.login + "&v=" + o.value + "&n=" + o.name;
    return HttpClientPOST(newurl, data);
}

function readStatus(o: { login: string }) {
    let newurl = getUrl(source.readStatus);
    newurl = addUrlGetParam(newurl, "l", o.login);
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