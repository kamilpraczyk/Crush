
/// <reference path="../../typings/tsd.d.ts" />
import dictionary = require('../utils/dictionary');
import React = require('react');
import GreetingsCss = require('./GreetingsCss');
import components = require('../components/components');

const GreetingsView = React.createClass({
    render: function() {
        let text = React.DOM.div({
            style: GreetingsCss.getText()
        }, dictionary.GREET_HELLO({ name: 'Jadie' }));

        let button = components.Button({
            name: dictionary.GREET_START(),
            onClick: function() {
                console.log('click!!!');
            }
        });
        let container = React.DOM.div({
            style: GreetingsCss.getContainer()
        }, text, button);

        return React.DOM.div({
            style: GreetingsCss.getPanel()
        }, container);
    }
});

export = GreetingsView;