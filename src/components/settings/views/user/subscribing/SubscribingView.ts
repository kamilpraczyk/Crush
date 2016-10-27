
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
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

const p = getState();
declare type Props = typeof p;

function render() {

    const props = getState();

    if (!props.pass.login.success ||
        props.pass.user.isPrime) {
        return null;
    }

    const box = div({ style: CommonCss.getBox() },
        div({ style: CommonCss.getBoxSplit() },
            getButtonSubmit(props, dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_YEAR, utils.getNextYearISOdate()),
            getButtonSubmit(props, dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_MONTH, utils.getNextMonthISOdate()),
            getButtonSubmit(props, dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_WEEK, utils.getNext7DaysISOdate()),

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