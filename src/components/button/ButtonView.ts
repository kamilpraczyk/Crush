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
    numbersStatus?: number,
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
    isGuess?: boolean, //button for user to try to answer
    isInstructions?: boolean, //header for instructions
    isTransparent?: boolean, // transparent button
    backUrl?: string
}

interface State {
    pressed: boolean
}

function render(props: Props, state: State, clickHandler: () => void) {
    let icon = null as any;
    if (props.icon) {
        icon = div({
            className: props.icon,
            style: ButtonCss.getIcon({
                isResponsibleCenter: props.isResponsibleCenter
            })
        });
    }
    let leftIcon = null as any;
    if (props.leftIcon) {
        icon = div({
            className: props.leftIcon,
            style: ButtonCss.getLeftIcon(props.isActive)
        });
    }

    let name: any = null;
    if (props.name) {
        name =
            div({
                style: ButtonCss.getNameContainer()
            },
                div({
                    style: ButtonCss.getName({
                        isResponsibleCenter: props.isResponsibleCenter
                    })
                }, props.name));
    }

    const loader = props.isLoader ? LoaderView() : null;
    let numbers: any = null;
    if (props.numbers) {
        let numbersStatus: any = null;
        let separator: any = null;
        if (_.isNumber(props.numbersStatus)) {
            numbersStatus = div({
                style: ButtonCss.getNumbersStatus(props.numbersStatus, props.numbers)
            }, props.numbersStatus);
            separator = div({}, '/');
        }

        numbers = div({
            style: ButtonCss.getNumbers(props.isActive)
        },
            numbersStatus,
            separator,
            div({}, props.numbers)
        );
    }

    return button({
        ref: props.ref,
        key: props.key,
        disabled: props.disabled,
        style: ButtonCss.getButton({
            disabled: props.disabled,
            pressed: state.pressed,
            isExpand: props.isExpand,
            isExpandWidth: props.isExpandWidth,
            isActive: props.isActive,
            isResponsibleHeight: props.isResponsibleHeight,
            isSuccess: props.isSuccess,
            isFail: props.isFail,
            backUrl: props.backUrl,
            isTime: props.isTime,
            isGuess: props.isGuess,
            isTransparent: props.isTransparent,
            isInstructions : props.isInstructions
        }),
        onClick: clickHandler
    }, leftIcon, icon, name, numbers, loader);
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
        this.time = setTimeout(this.unpress, 200, this);
    }

    unpress() {
        this.setState && this.setState({ pressed: false });
        !this.props.isQuickClick && this.props.onClick(this.props);
    }

    componentWillUnmount() {
        clearTimeout(this.time);
    }

    render() {
        return render(this.props, this.state, this.clickHandler.bind(this));
    }
};

export = React.createFactory(ButtonView);
