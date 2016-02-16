
/// <reference path="../../../typings/tsd.d.ts" />
import dictionary = require('../../utils/dictionary');
import React = require('react');
import GreetingsCss = require('./GreetingsCss');
import ButtonView = require('../../components/button/ButtonView');
const {div} = React.DOM;

interface GreetingsViewPropsFace {
    name: string,
    onClick: Function
}
interface GreetingsViewStateFace { }

class GreetingsView extends React.Component<GreetingsViewPropsFace, GreetingsViewStateFace>{


    constructor(props: GreetingsViewPropsFace) {
        super(props)
    }

    getText() {
        return div({
            style: GreetingsCss.getText()
        }, dictionary.GREET_HELLO({ name: this.props.name }));
    }
    getButton() {
        return ButtonView({
            name: dictionary.GREET_START(),
            onClick: this.props.onClick
        });
    }

    getContainer() {
        return div({
            style: GreetingsCss.getContainer()
        }, this.getText(), this.getButton());
    }

    public render() {
        return div({
            style: GreetingsCss.getPanel()
        }, this.getContainer());
    }
};

export = React.createFactory(GreetingsView); 