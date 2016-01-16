import React = require('react');
import ButtonCss = require('./ButtonCss');

interface ButtonViewPropsFace {
    name: string,
    onClick: Function,
    isExpand?: boolean,
}

interface ButtonViewStateFace {
    active: boolean
}

class ButtonView extends React.Component<ButtonViewPropsFace, ButtonViewStateFace>{

    constructor(props: ButtonViewPropsFace) {
        super(props)
        this.state = {
            active: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e: any) {
        e.preventDefault();
        this.setState({ active: true });
        this.props.onClick();
    }

    public render() {
        return React.DOM.button({
            style: ButtonCss.getButton({
                active: this.state.active,
                isExpand: this.props.isExpand
            }),
            onClick: this.clickHandler
        }, this.props.name);
    }
};

export =  React.createFactory(ButtonView);
