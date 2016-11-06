
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import {getPayPal} from '../../../../../components/button/PayPalButton';
import {getState} from '../../../../../services';
const {div, label, input} = React.DOM;
import utils = require('../../../../../utils/utils');
import {events} from '../../../../../events';


function getTitle(props: Props) {
    return div({
        style: CommonCss.getText()
    }, dictionary.HEADER_SUBSCRIBING);
}


function getButtonSubmit(props: Props, text: string, valid_to: string) {
    return ButtonView({
        name: text,
        isResponsibleHeight: true,
        isLoader: props.pass.subscribe.process,
        disabled: props.pass.subscribe.process,
        onClick: () => events.onSubscribeOnServer.publish(valid_to)
    });
}


function getStatusText(props: Props) {
    if (props.pass.subscribe.error) {
        return props.pass.subscribe.error;
    }
    return null;
}

const getProps = function () {
    return {
        pass: getState().pass.getStatus()
    }
};
const p = getProps();
declare type Props = typeof p;

function render() {

    const props = getProps();

    if (!props.pass.login.success ||
        props.pass.user.isPrime) {
        return null;
    }

    const box = div({ style: CommonCss.getBox() },
        div({ style: CommonCss.getBoxSplit() },

            getPayPal({
                code: "8WMXFQDNG4H7Y",
                name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_YEAR,
                user: props.pass.user.email,
                valid: utils.getNextYearISOdate()
            }),
            getPayPal({
                code: "YPLK2MRG5WTNW",
                name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_MONTH,
                user: props.pass.user.email,
                valid: utils.getNextMonthISOdate()
            }),
            getPayPal({
                code: "AD64JSC44JR66",
                name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_WEEK,
                user: props.pass.user.email,
                valid: utils.getNext7DaysISOdate()
            }),
            getPayPal({ //todo comment
                code: "4PBFNAL7VPDDG",
                name: '1p subscription test',
                user: props.pass.user.email,
                valid: utils.getNext7DaysISOdate()
            }),
            // todo comment
            getButtonSubmit(props, '0p subscription test', utils.getNext7DaysISOdate()), //TODO TEST simple pay button for 0.01p

            div({ style: CommonCss.getBoxLine(true) },
                getStatusText(props)
            ),
            div({ style: CommonCss.getText() },
                dictionary.SUBSCRIBING_EXPLANATION
            )
        )
    );

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle(props),
        box
    ));
}

export = render;