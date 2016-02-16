import Home = require("./home/Home");
var payment = require("./payment/payment");
import Console = require("./utils/debugger/Console");

var app = {

    initialize: function() {
        this.bindEvents();
       // Console.start();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //document.addEventListener('offline', this.onDeviceReady, false);
        //document.addEventListener('online', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
     //   try {
            app.applyLoader();
            new Home(document.getElementById('app'));
            payment();

     //   } catch (e) {
     //       console.error(e.stack);
    //    }

    },


    applyLoader: function() {
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        parentElement.setAttribute('style', 'display:none;');
    },

};

app.initialize();




