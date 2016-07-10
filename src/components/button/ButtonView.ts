import React = require('react');
import ButtonCss = require('./ButtonCss');
import LoaderView = require('../loader/LoaderView');
import _ = require('underscore');
const {div, button} = React.DOM;


interface Props {
    name: string,
    key?: string,
    ref?: string,
    disabled?: boolean,
    icon?: string,
    leftIcon?: string,
    numbers?: number,
    onClick: Function,
    isQuickClick?: boolean,
    isExpand?: boolean,
    isActive?: boolean,
    isExpandWidth?: boolean,
    isResponsibleHeight?: boolean,
    isResponsibleCenter?: boolean,
    isSuccess?: boolean,
    isFail?: boolean,
    isTime?: boolean,
    isLoader?: boolean,
    backUrl?: string
}


interface State {
    pressed: boolean
}

class ButtonView extends React.Component<Props, State>{
    private time = null as any;

    constructor(props: Props) {
        super(props);
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
                style: ButtonCss.getIcon({
                    isResponsibleCenter: this.props.isResponsibleCenter
                })
            });
        }
        let leftIcon = null as any;
        if (this.props.leftIcon) {
            icon = div({
                className: this.props.leftIcon,
                style: ButtonCss.getLeftIcon(this.props.isActive)
            });
        }

        let name: any = null;
        if (this.props.name) {
            name = div({
                style: ButtonCss.getName({
                    isResponsibleCenter: this.props.isResponsibleCenter
                })
            }, this.props.name);
        }

        const loader = this.props.isLoader ? LoaderView() : null;
        let numbers: any = null;
        if (_.isNumber(this.props.numbers)) {
            numbers = div({ style: ButtonCss.getNumbers(this.props.isActive) }, this.props.numbers);
        }


        return button({
            ref: this.props.ref,
            key: this.props.key,
            disabled: this.props.disabled,
            style: ButtonCss.getButton({
                disabled: this.props.disabled,
                pressed: this.state.pressed,
                isExpand: this.props.isExpand,
                isExpandWidth: this.props.isExpandWidth,
                isActive: this.props.isActive,
                isResponsibleHeight: this.props.isResponsibleHeight,
                isSuccess: this.props.isSuccess,
                isFail: this.props.isFail,
                backUrl: this.props.backUrl,
                isTime: this.props.isTime,
            }),
            onClick: this.clickHandler
        }, leftIcon, icon, name, numbers, loader);
    }
};

export = React.createFactory(ButtonView);
