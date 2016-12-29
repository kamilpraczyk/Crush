import React = require('react');
import ButtonCss = require('./ButtonCss');
import LoaderView = require('../loader/LoaderView');
import _ = require('underscore');
const {div, button, table, tr, td, tbody} = React.DOM;

interface Props {
    name: string,
    key?: string,
    ref?: string,
    disabled?: boolean,
    icon?: string,
    leftIcon?: string,
    iconSet?: string[],
    letfIconColour?: string,
    numbersStatus?: number,
    numbers?: number,
    onClick: (props: Props) => void,
    isQuickClick?: boolean,
    isExpand?: boolean,
    isActive?: boolean,
    isExpandWidth?: boolean,
    isResponsibleCenter?: boolean,
    isSuccess?: boolean,
    isFail?: boolean,
    isTime?: boolean,
    isLoader?: boolean,
    isGuess?: boolean, //button for user to try to answer
    isInstructions?: boolean, //header for instructions
    isFromName?: boolean,
    isTransparent?: boolean, // transparent button
    backUrl?: string
}

interface State {
    pressed: boolean
}

function getIcon(props: Props) {
    if (!props.icon) return null;

    return div({
        className: props.icon,
        style: ButtonCss.getIcon({
            isResponsibleCenter: props.isResponsibleCenter
        })
    });
}

function getLeftIcon(props: Props) {
    if (!props.leftIcon) return null;

    return div({
        className: props.leftIcon,
        style: ButtonCss.getLeftIcon(props.isActive, props.letfIconColour)
    });
}


function getIconSet(props: Props) {
    if (!props.iconSet || !props.iconSet.length) return null;

    const set = props.iconSet.map(icon => {
        return div({
            style: ButtonCss.getIconSet(icon),
            key: icon,
        });
    });

    return div({
        style: ButtonCss.getIconSets()
    }, set);
}




function getNumberStatus(props: Props) {
    if (!_.isNumber(props.numbersStatus)) return null;

    return div({
        style: ButtonCss.getNumbersStatus(props.numbersStatus, props.numbers)
    }, props.numbersStatus);
}

function getNumbers(props: Props) {
    if (!props.numbers) return null;

    const numberStatus = getNumberStatus(props);

    return div({
        style: ButtonCss.getNumbers(props.isActive)
    },
        numberStatus,
        numberStatus ? '/' : null,
        props.numbers
    );
}

function render(props: Props, state: State, clickHandler: () => void) {

    const loader = props.isLoader ? LoaderView() : null;
    return button({
        ref: props.ref,
        key: props.key,
        disabled: props.disabled,
        onClick: clickHandler,
        style: ButtonCss.getButton({
            disabled: props.disabled,
            pressed: state.pressed,
            isExpand: props.isExpand,
            isExpandWidth: props.isExpandWidth,
            isActive: props.isActive,
            isSuccess: props.isSuccess,
            isFail: props.isFail,
            backUrl: props.backUrl,
            isTime: props.isTime,
            isGuess: props.isGuess,
            isTransparent: props.isTransparent,
            isInstructions: props.isInstructions,
            isFromName: props.isFromName
        })
    },
        table({
            style: {
                display: 'table',
                width: '100%'
            }
        },
            tbody({},
                tr({},
                    td({ colSpan: 3 }, getIcon(props))
                ),
                tr({},
                    td({ style: {} }, getLeftIcon(props)),
                    td({ style: ButtonCss.getNameContainer(props) }, props.name),
                    td({ style: {} }, getNumbers(props))
                ),
                tr({},
                    td({ colSpan: 3 }, getIconSet(props))
                ),
                tr({},
                    td({ colSpan: 3, style: { textAlign: 'center' } }, loader)
                )
            )
        )
    );
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

    clickHandler(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ pressed: true });
        this.props.isQuickClick && this.props.onClick(this.props);
        this.time = setTimeout(this.unpress, 100, this);
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
