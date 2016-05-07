import React = require('react');
import ButtonCss = require('./ButtonCss');
const {div, button} = React.DOM;

interface Props {
    name: string,
    key?: string,
    icon?: string,
    leftIcon?: string,
    onClick: Function,
    isQuickClick?: boolean,
    isExpand?: boolean,
    isActive?: boolean,
    isExpandWidth?: boolean
}

interface ButtonViewStateFace {
    pressed: boolean
}

class ButtonView extends React.Component<Props, ButtonViewStateFace>{
    private time = null as any;

    constructor(props: Props) {
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
        this.props.isQuickClick && this.props.onClick(this.props);
        this.time = setTimeout(this.unpress, 250, this);
    }

    unpress() {
        this.setState && this.setState({ pressed: false });
        !this.props.isQuickClick && this.props.onClick(this.props);
    }
 

    componentWillUnmount() {
        clearTimeout(this.time);
    }

    render() {
        let icon = null as any;
        if (this.props.icon) {
            icon = div({
                className: this.props.icon,
                style: ButtonCss.getIcon()
            });
        }
        let leftIcon = null as any;
        if (this.props.leftIcon) {
            icon = div({
                className: this.props.leftIcon,
                style: ButtonCss.getLeftIcon(this.props.isActive)
            });
        }

        const name = div({
            style: ButtonCss.getName()
        }, this.props.name);

        return button({
            key: this.props.key,
            style: ButtonCss.getButton({
                pressed: this.state.pressed,
                isExpand: this.props.isExpand,
                isExpandWidth: this.props.isExpandWidth,
                isActive: this.props.isActive,
                isFlex: !!this.props.leftIcon
            }),
            onClick: this.clickHandler
        }, leftIcon, icon, name);
    }
};

export = React.createFactory(ButtonView);
