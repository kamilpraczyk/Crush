import React = require('react');
import ButtonCss = require('./ButtonCss');
const {div, button} = React.DOM;

interface ButtonViewPropsFace {
    name: string,
    icon?: string,
    onClick: Function,
    isExpand?: boolean,
    isActive?: boolean,
    isExpandWidth?: boolean
}

interface ButtonViewStateFace {
    pressed: boolean
}

class ButtonView extends React.Component<ButtonViewPropsFace, ButtonViewStateFace>{
    private time = null as any;

    constructor(props: ButtonViewPropsFace) {
        super(props)
        this.state = {
            pressed: false
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.unpress = this.unpress.bind(this);
    }


    clickHandler(e: any) {
        e.preventDefault();
        this.setState({ pressed: true });
        this.props.onClick(this.props);
        this.time = setTimeout(this.unpress, 300);
    }

    unpress() {
        this.setState && this.setState({ pressed: false });
    }


    public componentWillUnmount() {
        clearTimeout(this.time);
    }


    public render() {
        let icon = null as any;
        if(this.props.icon){
            icon = div({
                className :  this.props.icon
            })
        }
        
        return button({
            style: ButtonCss.getButton({
                pressed: this.state.pressed,
                isExpand: this.props.isExpand,
                isExpandWidth: this.props.isExpandWidth,
                isActive: this.props.isActive
            }),
            onClick: this.clickHandler
        },icon? icon : this.props.name);
    }
};

export =  React.createFactory(ButtonView);
