
import React = require('react');
import ReactDOM = require('react-dom');
import components = require('../components/components');

class Home {

    constructor(public el: HTMLElement) { }

    show() {
      
        return this.showEntries();//
        
        ReactDOM.render(components.GreetingsView({
            onClick: function() {
                console.log('in');
            }}), this.el);
    }

    showEntries() {
        console.log('showEntries');
        ReactDOM.render(components.EntriesView({}), this.el);
    }
}

export = Home;

