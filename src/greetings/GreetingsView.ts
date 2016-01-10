
/// <reference path="../../typings/tsd.d.ts" />
import dictionary = require('../utils/dictionary');
import React = require('react');
import GreetingsCss = require('./GreetingsCss');
import components = require('../components/components');

const GreetingsView = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },
    
    getDefaultProps() {
        return {
            onClick: null
        }
    },

    render() {
        let text = React.DOM.div({
            style: GreetingsCss.getText()
        }, dictionary.GREET_HELLO({ name: 'Jadie' }));

        let button = components.Button({
            name: dictionary.GREET_START(),
            onClick: this.props.onClick
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