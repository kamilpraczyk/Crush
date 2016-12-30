import Home = require("./home/Home");
import { init } from './services';
import { delay, isBrowserSupported } from './utils/utils';
import dictionary = require('./utils/dictionary');
import config = require('./generated-config');

function onLoaded() {
    document.getElementById('deviceready').setAttribute('style', 'display:none;');
}

function onError() {
    const parentElement = document.getElementById('deviceready');
    parentElement.querySelector('.listening').setAttribute('style', 'display:none;');
    parentElement.querySelector('.spinner').setAttribute('style', 'display:none;');
    parentElement.querySelector('.error').setAttribute('style', 'display:block;');
    (<any>parentElement.getElementsByClassName('error')[0]).innerHTML = dictionary.ERROR_API_CRUSH;
    parentElement.setAttribute('style', 'display:flex;');
}

function onNotSupported() {
    const parentElement = document.getElementById('deviceready');
    parentElement.querySelector('.listening').setAttribute('style', 'display:none;');
    parentElement.querySelector('.spinner').setAttribute('style', 'display:none;');
    parentElement.querySelector('.error').setAttribute('style', 'display:block;');
    (<any>parentElement.getElementsByClassName('error')[0]).innerHTML = dictionary.ERROR_BROWSER_NOT_SUPPORTED;
    parentElement.setAttribute('style', 'display:flex;');
}

function onDeviceReady() {
    document.title = config.isProduction ? (document.title + ' ' + config.version) : ('Dev ' + config.version);

    if (!isBrowserSupported()) return onNotSupported();

    delay(500).then(() => init(window)).then(() => {
        return delay(200).then(() => {
            onLoaded();
            new Home(document.getElementById('app'));
            return null;
        });
    }).catch(e => {
        onError();
        console.error(e);
    });
}

window.onload = onDeviceReady;





