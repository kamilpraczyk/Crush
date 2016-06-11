import React = require('react');
import DrawCss = require('./DrawCss');
import Signature = require('../../signature/index');
import MenuView = require('../menu/MenuView');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import {BoardResult} from '../../../lessons/interface';
import ButtonView = require('../../button/ButtonView');
import {isId} from '../../../lessons/helper/constants';
const {div} = React.DOM;


function getHeader(props: BoardResult, state: State, setState: Function) {

    function getAnswerOrSupport() {
        if (props.lessonData.correct && props.lessonData.correct.length) {
            return ButtonView({
                icon: state.showAnswer ? null : DrawCss.getSupportIcon(),
                isTime: isId.isDigitalTime(props.lessonData.id),
                isResponsibleCenter: true,
                name: state.showAnswer ? props.lessonData.correct.join(" ") : null,
                onClick: function () {
                    setState({
                        showAnswer: !state.showAnswer
                    });
                }
            });
        }
        return null;
    };

    return div({
        style: DrawCss.getHeader()
    },
        ButtonView({
            name: props.lessonData.name,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.READ,
                    read: props.lessonData.name
                });
            }
        }),
        getAnswerOrSupport()
    );
}


function getFooter(onClick: Function) {
    return div({
        style: DrawCss.getFooter()
    }, MenuView(
        [{
            id: 'clear',
            name: 'clear',
            onClick: onClick
        }]
    ))
}

let signatureClear: Function = null;
function onGetInterfaceClear(onClear: Function) {
    signatureClear = onClear;
}

function getBody(props: BoardResult) {

    return div({
        style: DrawCss.getBody()
    },
        div({
            style: DrawCss.getBodyContent()
        },
            Signature({
                id: props.lessonData.id,
                onGetInterface: onGetInterfaceClear
            })
        )
    );
}

function clearSignature() {
    signatureClear && signatureClear();
}


function render(props: BoardResult, state: State, setState: Function) {
    return div({
        key: 'drawView',
        style: DrawCss.getPanel()
    }, getHeader(props, state, setState), getBody(props), getFooter(clearSignature));
}


interface State {
    showAnswer: boolean
}

class DrawView extends React.Component<BoardResult, State>{

    constructor(props: BoardResult) {
        super(props);
        this.state = {
            showAnswer: false
        }
    }

    componentWillReceiveProps() {
        this.setState({
            showAnswer: false
        });
    }

    render() {
        return render(this.props, this.state, this.setState.bind(this))
    }
};

export = React.createFactory(DrawView);
