
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import { getPayPal } from '../../../../../components/button/PayPalButton';
import { getState, APIState } from '../../../../../services';
import utils = require('../../../../../utils/utils');
import { events } from '../../../../../events';
const {div} = React.DOM;


function getTitle() {
    return div({
        style: CommonCss.getText()
    }, dictionary.HEADER_SUBSCRIBING);
}

function getButtonSubmit(apiState: APIState, text: string, valid_to: string) {
    return ButtonView({
        name: text,
        isResponsibleHeight: true,
        isLoader: apiState.pass.subscribe.process,
        disabled: apiState.pass.subscribe.process,
        onClick: () => events.onSubscribeOnServer.publish(valid_to)
    });
}


function getStatusText(apiState: APIState) {
    return apiState.pass.subscribe.error;
}

function getBox(apiState: APIState) {
    return div({ style: CommonCss.getBox() },
        div({ style: CommonCss.getBoxSplit() },
            getPayPal({
                code: "8WMXFQDNG4H7Y",
                name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_YEAR,
                user: apiState.pass.user.email,
                valid: utils.getNextYearISOdate()
            }),
            getPayPal({
                code: "YPLK2MRG5WTNW",
                name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_MONTH,
                user: apiState.pass.user.email,
                valid: utils.getNextMonthISOdate()
            }),
            getPayPal({
                code: "AD64JSC44JR66",
                name: dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_WEEK,
                user: apiState.pass.user.email,
                valid: utils.getNext7DaysISOdate()
            }),
            apiState.isProduction ? null : getPayPal({
                code: "4PBFNAL7VPDDG",
                name: '1p subscription test',
                user: apiState.pass.user.email,
                valid: utils.getNext7DaysISOdate()
            }),
            apiState.isProduction ? null : getButtonSubmit(apiState, '0p subscription test', utils.getNext7DaysISOdate()),

            div({ style: CommonCss.getBoxLine(true) },
                getStatusText(apiState)
            ),
            div({ style: CommonCss.getText() },
                dictionary.SUBSCRIBING_EXPLANATION
            )
        )
    );
}

function render() {

    const apiState = getState();
    if (!apiState.pass.login.success || apiState.pass.user.isPrime) return null;

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle(),
        getBox(apiState)
    ));
}

export = render;