import Home = require("./home/Home");
import { init } from './services';
import utils = require('./utils/utils');
import config = require('./generated-config');

function onLoaded() {
    document.getElementById('deviceready').setAttribute('style', 'display:none;');
}

function onError() {
    const parentElement = document.getElementById('deviceready');
    parentElement.querySelector('.listening').setAttribute('style', 'display:none;');
    parentElement.querySelector('.spinner').setAttribute('style', 'display:none;');
    parentElement.querySelector('.error').setAttribute('style', 'display:block;');
    parentElement.setAttribute('style', 'display:flex;');
}

function onDeviceReady() {
    document.title = config.isProduction ? (document.title + ' ' + config.version) : ('Dev ' + config.version);
    utils.delay(500).then(() => init(window)).then(() => {
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

window.onload = onDeviceReady;





