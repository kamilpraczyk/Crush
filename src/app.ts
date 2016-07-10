import Home = require("./home/Home");
import utils = require('./utils/utils');

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

var app = {

    initialize: function () {
        this.bindEvents();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        utils.delay(1500).then(() => {
            onConnected();
            utils.delay(500).then(() => {
                onLoaded();
                new Home(document.getElementById('app'));
            })
        });
    }
};



app.initialize();




