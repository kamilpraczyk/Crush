
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

function serverUpdateValidTo(login: string, valid_to: string) {
    if (!utils.isValidISODate(valid_to)) {
        Promise.reject(new Error('Date not valid' + valid_to));
    }
    const newurl = getUrl(source.updateValidation);
    const data = "l=" + login + "&d=" + valid_to;
    return HttpClientPOST(newurl, data);
}

function serverRegister(login: string, password: string, name: string) {
    const newurl = getUrl(source.register);
    const data = "l=" + login + "&p=" + password + "&n=" + name;
    console.log('data',data);
    return HttpClientPOST(newurl, data);
}

//TODO no characters & ' "

export {
serverIsPrime,
serverUpdateValidTo,
serverRegister
}