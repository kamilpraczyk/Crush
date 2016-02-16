/// <reference path="../../../typings/tsd.d.ts" />

function start() {
    const oldLog = console.log;
   
   
    // const loger = document.getElementById('deviceready');
    
    let el = document.createElement("div");
    el.setAttribute('style', 'color:black;border:1px solid black;position:absolute;top:0; height:10px;');
    el.id = 'loger';
    document.body.appendChild(el);
    const loger = document.getElementById('loger');


    function makeMsg(...args: any[]): string {
        let message = '';

        for (var i = 0; i < args.length; i++) {
            if (args[i][0]) {
                message += (JSON.stringify(args[i][0]) + ' ')
            } else {
                message += 'undefined '
            }

        };
        return message;
    }

    console.log = function() {
        let newDiv = document.createElement("div");

        newDiv.appendChild(document.createTextNode(makeMsg(arguments)));
        loger.appendChild(newDiv);

        oldLog.apply(console, arguments);

    };

    const oldError = console.error;
    console.error = function() {

        let newDiv = document.createElement("div");
        newDiv.appendChild(document.createTextNode(makeMsg(arguments)));

        newDiv.setAttribute('style', 'color:red;');
        loger.appendChild(newDiv);

        oldError.apply(console, arguments);
    };



};


export = {
    start
};


