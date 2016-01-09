
import React = require('react');
import ButtonCss = require('./ButtonCss');


const ButtonView = React.createClass({

    render: function() {
        return React.DOM.button({
            style: ButtonCss.getButton(),
            onClick : this.props.onClick
        }, this.props.name);
    }
});

export =  React.createFactory(ButtonView);
