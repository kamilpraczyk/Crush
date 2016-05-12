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

function getHeader(name: string) {
    return div({
        style: DrawCss.getHeader()
    },
        div({
            style: DrawCss.getText(),
            onClick: DrawCss.animate(onRead, name)
        }, name)
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

function getBody() {

    return div({
        style: DrawCss.getBody()
    },
        div({
            style: DrawCss.getBodyContent()
        },
            Signature({
                onGetInterface: onGetInterfaceClear
            })
        )
    );
}

function clearSignature() {
    signatureClear && signatureClear();
}


function render(state: BoardResult) {
    return div({
        key: 'drawView',
        style: DrawCss.getPanel()
    }, getHeader(state.lessonData.name), getBody(), getFooter(clearSignature));
}


export =  render
