import React = require('react');
import PayPalButtonCss = require('./ButtonCss');
import LoaderView = require('../loader/LoaderView');
import _ = require('underscore');
import css = require('../../utils/css/css');
import {getUrl, source} from '../../catalog/source';
const {div, form, input, img, label} = React.DOM;

//http://stackoverflow.com/questions/7642895/setting-paypal-return-url-and-making-it-auto-return

interface Props {
    name: string,
    code: string,
    user: string,
    valid: string
}

function getPayPal(props: Props) {
    return form({
        action: "https://www.paypal.com/cgi-bin/webscr",
        method: "post",
        target: "_top"
    },
        input({
            type: "hidden",
            name: "cmd",
            value: "_s-xclick"
        }),
        input({
            type: "hidden",
            name: "hosted_button_id",
            value: props.code
        }),
        input({
            type: "hidden",
            name: "invoice",
            value: props.user
        }),
        input({
            type: "hidden",
            name: "custom",
            value: props.valid
        }),
        input({
            type: "hidden",
            name: "return",
            value: getUrl(source.successPage)
        }),
        input({
            type: "hidden",
            name: "cancel_return",
            value: getUrl(source.cancelPage)
        }),
        input({
            type: "hidden",
            name: "notify_url",
            value: getUrl(source.notify)
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
            value: props.name,
            alt: "PayPal – The safer, easier way to pay online!"
        }),
        img({
            alt: "",
            src: "https://www.paypalobjects.com/en_GB/i/scr/pixel.gif",
            width: "1",
            height: "1"
        })
    )
}

export {
getPayPal
}
