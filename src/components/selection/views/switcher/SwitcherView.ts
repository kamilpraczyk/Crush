/// <reference path="../../../../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import SwitchCss = require('./SwitchCss');
import SwitcherActions = require('./SwitcherActions');
import ButtonView = require('../../../button/ButtonView');


interface SwitcherViewPropsFace {
    id: string,
    name: string
}
interface SwitcherViewStateFace {}

class SwitcherView extends React.Component<SwitcherViewPropsFace, SwitcherViewStateFace>{

    constructor(props: SwitcherViewPropsFace) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick() {
        SwitcherActions.requestSwitchAction(this.props.id)
    }

    getButton() {
        return ButtonView({
            name: this.props.name,
            onClick: this.handleClick,
            isExpand: true
        });
    }

    public render() {
        console.log('switcher', this.props);
        return React.DOM.div({
            style: SwitchCss.getPanel()
        }, this.getButton());
    }

};

export =  React.createFactory(SwitcherView); 