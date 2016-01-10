
import React = require('react');
import ButtonCss = require('./ButtonCss');


const ButtonView = React.createClass({

    getInitialState() {
        return {
            active: false
        };
    },

     clickHandler(e: Event) {
        e.preventDefault();
        this.setState({ active: true });
        this.props.onClick();
    },

    render() {
        return React.DOM.button({
            style: ButtonCss.getButton(this.state.active),
            onClick: this.clickHandler
        }, this.props.name);
    }
});

export =  React.createFactory(ButtonView);
