import React = require('react');
import DrawCss = require('./DrawCss');
import Signature = require('../../signature/index');
import MenuView = require('../menu/MenuView');
import {BoardResult} from '../../../types';
import ButtonView = require('../../button/ButtonView');
import {isId} from '../../../lessons/helper/constants';
import HeaderView = require('../header/HeaderView');
import dictionary = require('../../../utils/dictionary');
const {div} = React.DOM;


function getFooter(onClick: () => void) {
    return div({
        style: DrawCss.getFooter()
    }, MenuView(
        [{
            id: 'clear',
            name: dictionary.SIGNATURE_PAD_CLEAR,
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
                backgroundColor: DrawCss.themes.signaturePad.background,
                penColor: DrawCss.themes.signaturePad.color,
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


