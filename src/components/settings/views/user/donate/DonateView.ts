
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import css = require('../../../../../utils/css/css');
import {getState} from '../../../../../services';
const {div, form, input, img, label} = React.DOM;

function getPayPal() {
    return form({
        action: "https://www.paypal.com/cgi-bin/webscr",
        method: "post",
        target: "_blank"
    }, input({
        type: "hidden",
        name: "cmd",
        value: "_s-xclick"
    }),
        input({
            type: "hidden",
            name: "hosted_button_id",
            value: "HRQXPU6JQB8MS"
        }),
        input({
            style: {
                display: 'block',
                color: 'white',
                backgroundColor: css.button.backgroundColor.normal,
                backgroundImage: css.button.backgroundImage.normal(),
                borderRadius: css.button.radius.borderRadius,
                border: css.button.border.normal,
                paddingBottom: '2vh',
                paddingTop: '2vh',
                paddingLeft: '2vw',
                paddingRight: '2vw',
            } as CSSProperties,
            type: 'submit',
            value: dictionary.DONATE
        }),
        img({
            alt: "",
            src: "https://www.paypalobjects.com/en_GB/i/scr/pixel.gif",
            width: "1",
            height: "1"
        })
    )
}



function render() {

    const s = getState();
    const pass = s.pass.getStatus();

    if (!pass.user.email || !pass.user.isPrime) {
        return null;
    }

    function getBox() {

        return div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplit() },
                getPayPal()
            )
        );
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    }, getBox()));
}

export =  render;