import React = require('react');
import DrawCss = require('./DrawCss');
import Signature = require('../../signature/index');
import MenuView = require('../menu/MenuView');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import {BoardResult} from '../../../lessons/interface';
const {div} = React.DOM;


function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}



function getHeader(props: BoardResult, state: State, setState: Function) {

    function getAnswerOrSupport() {
        if (props.lessonData.correct && props.lessonData.correct.length) {
            return div({
                className: state.showAnswer ? null : DrawCss.getSupportClassName(),
                style: DrawCss.getText(state.showAnswer ? props.lessonData.id : null),
                //NOTE: no reading
                onClick: DrawCss.animate(function () {
                    setState({
                        showAnswer: !state.showAnswer
                    });
                })
            }, state.showAnswer ? props.lessonData.correct.join(" ") : null);
        }
        return null;
    };

    return div({
        style: DrawCss.getHeader()
    },
        div({
            style: DrawCss.getText(),
            onClick: DrawCss.animate(onRead, props.lessonData.name)
        }, props.lessonData.name),
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
