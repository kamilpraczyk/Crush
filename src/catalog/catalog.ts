
/// <reference path="../../typings/tsd.d.ts" />
import Promise = require("bluebird");
const url = "http://clingykoala.com/crush/app.php";

function HttpClient() {
    return {
        get: function (aUrl: string, aCallback: Function) {
            var anHttpRequest: any = null;

            if (window['XMLHttpRequest']) {
                // code for IE7+, Firefox, Chrome, Opera, Safari
                anHttpRequest = new XMLHttpRequest();
            } else {  // code for IE6, IE5
                anHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }

            anHttpRequest.onreadystatechange = function () {
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }

            anHttpRequest.open("GET", aUrl, true);
            anHttpRequest.send(null);
        }
    }
}


function addParam(url: string, param: string, value: string) {
    var a = document.createElement('a'), regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/gi;
    var match: any = null, str: any[] = []; a.href = url;
    while (match = regex.exec(a.search))
        if (encodeURIComponent(param) != match[1])
            str.push(match[1] + (match[2] ? "=" + match[2] : ""));
    str.push(encodeURIComponent(param) + (value ? "=" + encodeURIComponent(value) : ""));
    a.search = str.join("&");
    return a.href;
}


function isPrime(login: string, password: string) {
    console.log('login', login);
    console.log('password', password);

    return new Promise(function (resolve, reject) {
        let newurl = addParam(url, "l", login);
        newurl = addParam(newurl, "p", password);

        HttpClient().get(newurl, function (response: string) {

            const data = JSON.parse(response);
            if (data.error) {
                console.error('Error: ' + data.error);
                return reject(data.error);
            }
            return resolve(data);
        });
    });
}


export = {
    isPrime
}