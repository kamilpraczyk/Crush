import Promise = require("bluebird");
import {TimeOutError, InvalidServerDataError, ServerRequestError}  from '../types';

const timeMs = 20 * 1000;

function addUrlGetParam(url: string, param: string, value: string) {
    var a = document.createElement('a'), regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/gi;
    var match: any = null, str: any[] = []; a.href = url;
    while (match = regex.exec(a.search))
        if (encodeURIComponent(param) != match[1])
            str.push(match[1] + (match[2] ? "=" + match[2] : ""));
    str.push(encodeURIComponent(param) + (value ? "=" + encodeURIComponent(value) : ""));
    a.search = str.join("&");
    return a.href;
}

function getHttpRequest() {
    if (window['XMLHttpRequest']) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    } else {  // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function HttpClientGET(aUrl: string) {
    return new Promise((resolve, reject) => {

        const anHttpRequest = getHttpRequest();
        const time = setTimeout(function () {
            return reject(new TimeOutError());
        }, timeMs);
        anHttpRequest.onreadystatechange = () => {
            if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200) {
                clearTimeout(time);
                try {
                    const data = JSON.parse(anHttpRequest.responseText);
                    return resolve(data);
                } catch (e) {
                    return reject(new InvalidServerDataError());
                }
            }
        }
        try {
            anHttpRequest.open("GET", aUrl, true);
            anHttpRequest.send();
        } catch (e) {
            return reject(new ServerRequestError());
        }
        return null;
    });
}

function HttpClientPOST(aUrl: string, data: string | FormData) {
    return new Promise((resolve, reject) => {

        const anHttpRequest = getHttpRequest();
        const time = setTimeout(function () {
            return reject(new TimeOutError());
        }, timeMs);
        anHttpRequest.onreadystatechange = () => {
            if (anHttpRequest.readyState === 4 && anHttpRequest.status === 200) {
                clearTimeout(time);
                try {
                    const data = JSON.parse(anHttpRequest.responseText);
                    return resolve(data);
                } catch (e) {
                    return reject(new InvalidServerDataError());
                }
            }
        }
        try {
            anHttpRequest.open("POST", aUrl, true);
            anHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            anHttpRequest.send(data);
        } catch (e) {
            return reject(new ServerRequestError());
        }
        return null;
    });
}

export {
HttpClientPOST,
HttpClientGET,
addUrlGetParam
}