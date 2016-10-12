import React = require('react');
import DrawCss = require('./DrawCss');
import Signature = require('../../signature/index');
import MenuView = require('../menu/MenuView');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import {BoardResult} from '../../../lessons/interface';
import ButtonView = require('../../button/ButtonView');
import {isId} from '../../../lessons/helper/constants';
import HeaderView = require('../header/HeaderView');
const {div} = React.DOM;


function getFooter(onClick: () => void) {
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

let signatureClear: () => void = null;
function onGetInterfaceClear(onClear: () => void) {
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
                backgroundColor: DrawCss.background.text.backgroundColor,
                onGetInterface: onGetInterfaceClear
            })
        )
    );
}

function clearSignature() {
    signatureClear && signatureClear();
}


export = function render(props: BoardResult) {
    return div({
        style: DrawCss.getPanel()
    }, HeaderView(props), getBody(props), getFooter(clearSignature));
}


