
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import { getPayPal } from '../../../../../components/button/PayPalButton';
import { getState } from '../../../../../services';
import utils = require('../../../../../utils/utils');
import { events } from '../../../../../events';
const {div} = React.DOM;


function getTitle() {
    return div({
        style: CommonCss.getText()
    }, dictionary.HEADER_SUBSCRIBING);
}

function render() {

    const state = getState();
    if (!state.pass.login.success || state.pass.user.isPrime) return null;

    function getButtonSubmit(text: string, valid_to: string) {
        return ButtonView({
            name: text,
            isResponsibleHeight: true,
            isLoader: state.pass.subscribe.process,
            disabled: state.pass.subscribe.process,
            onClick: () => events.onSubscribeOnServer.publish(valid_to)
        });
    }


    function getStatusText() {
        return state.pass.subscribe.error;
    }

    function getBox() {
        return div({ style: CommonCss.getBox() },
            div({ style: CommonCss.getBoxSplit() },
                getPayPal({
                    code: "8WMXFQDNG4H7Y",
                    name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_YEAR,
                    user: state.pass.user.email,
                    valid: utils.getNextYearISOdate()
                }),
                getPayPal({
                    code: "YPLK2MRG5WTNW",
                    name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_MONTH,
                    user: state.pass.user.email,
                    valid: utils.getNextMonthISOdate()
                }),
                getPayPal({
                    code: "AD64JSC44JR66",
                    name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_WEEK,
                    user: state.pass.user.email,
                    valid: utils.getNext7DaysISOdate()
                }),
                getPayPal({ //todo comment - make if production remove
                    code: "4PBFNAL7VPDDG",
                    name: '1p subscription test',
                    user: state.pass.user.email,
                    valid: utils.getNext7DaysISOdate()
                }),
                // todo comment
                getButtonSubmit('0p subscription test', utils.getNext7DaysISOdate()), //TODO TEST simple pay button for 0.01p

                div({ style: CommonCss.getBoxLine(true) },
                    getStatusText()
                ),
                div({ style: CommonCss.getText() },
                    dictionary.SUBSCRIBING_EXPLANATION
                )
            )
        );
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle(),
        getBox()
    ));
}

export = render;