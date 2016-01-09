
import React = require('react');
import GreetingsCss = require('./GreetingsCss');

const GreetingsView = React.createClass({
    render: function() {
        let text = React.DOM.div({
            style: GreetingsCss.getText()
        }, 'hello world');

        return React.DOM.div({
            style: GreetingsCss.getPanel()
        }, text);
    }
});

export = GreetingsView;