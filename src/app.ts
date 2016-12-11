import Home = require("./home/Home");
import { init } from './services';
import utils = require('./utils/utils');
import config = require('./generated-config');

function onConnected() {
    const parentElement = document.getElementById('deviceready');
    const listeningElement = parentElement.querySelector('.listening');
    const receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
}

function onLoaded() {
    document.getElementById('deviceready').setAttribute('style', 'display:none;');
}

function onError() {
    const parentElement = document.getElementById('deviceready');
    parentElement.querySelector('.listening').setAttribute('style', 'display:none;');
    parentElement.querySelector('.received').setAttribute('style', 'display:none;');
    parentElement.querySelector('.spinner').setAttribute('style', 'display:none;');
    parentElement.querySelector('.error').setAttribute('style', 'display:block;');
    parentElement.setAttribute('style', 'display:flex;');
}

function onDeviceReady() {
    document.title = config.isProduction ? (document.title + ' ' + config.version) : ('Dev ' + config.version);
    utils.delay(500).then(() => init()).then(() => {
        onConnected();
        return utils.delay(200).then(() => {
            onLoaded();
            new Home(document.getElementById('app'));
            return null;
        });
    }).catch(e => {
        onError();
        console.error(e);
    });
}

function initialize() {
    document.addEventListener('deviceready', onDeviceReady, false);
}


initialize();




