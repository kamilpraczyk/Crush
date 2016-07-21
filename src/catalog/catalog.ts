
/// <reference path="../../typings/tsd.d.ts" />
import Promise = require("bluebird");
import utils = require('../utils/utils');
import {HttpClientGET, HttpClientPOST, addUrlGetParam} from './httpClient'
import {getUrl, source} from './source'


function serverIsPrime(login: string, password: string) {
    let newurl = getUrl(source.isPrime);
    newurl = addUrlGetParam(newurl, "l", login);
    newurl = addUrlGetParam(newurl, "p", password);
    return HttpClientGET(newurl);
}

function sendEmailVerification(login: string, passwordMD5: string, password: string, name: string) {
    let newurl = getUrl(source.emailVerification);
    newurl = addUrlGetParam(newurl, "l", login);
    newurl = addUrlGetParam(newurl, "p", password);
    newurl = addUrlGetParam(newurl, "n", name);

    let u = getUrl(source.emailClickConfirm);
    u = addUrlGetParam(u, "l", login);
    u = addUrlGetParam(u, "p", passwordMD5);

    newurl = addUrlGetParam(newurl, "u", u);

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


export {
serverIsPrime,
serverUpdateValidTo,
serverRegister,
sendEmailVerification,
updateLastLogin
}