
import React = require('react');
import ReactDOM = require('react-dom');
import GreetingsView = require('../greetings/GreetingsView');

class Home {

    constructor(public el: HTMLElement) { }

    show() {
        ReactDOM.render(React.createElement(GreetingsView, {
            onClick: function() {
                console.log('in');
            }
        }), this.el);
    }
}

export = Home;






