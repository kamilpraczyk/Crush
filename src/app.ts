import Home = require("./home/Home");
import Console = require("./utils/debugger/Console");

var app = {

    initialize: function () {
        this.bindEvents();
        // Console.start();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function () {
        app.applyLoader();
        new Home(document.getElementById('app'));
    },


    applyLoader: function () {
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        parentElement.setAttribute('style', 'display:none;');
    },

};

app.initialize();




