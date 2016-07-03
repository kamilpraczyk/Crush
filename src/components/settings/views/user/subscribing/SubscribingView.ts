
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import AppDispatcher = require('../../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../../constants/Constants');
import HomeStore = require('../../../../../stores/home/HomeStore');
const {div, label, input} = React.DOM;
import utils = require('../../../../../utils/utils');


function getTitle(props: Props) {
    let text = dictionary.HEADER_SUBSCRIBING;

    const daysLeft = utils.howManyDaysLeft(props.user.valid_to);
    if (props.subscribe.process) {
        text = dictionary.PLEASE_WAIT;
    } else if (props.subscribe.error) {
        text = props.subscribe.error;
    } else if (daysLeft > 0) {
        const unit = daysLeft === 1 ? dictionary.DAY : dictionary.DAYS;
        text = dictionary.HEADER_SUBSCRIBING_VALID + ' ' + daysLeft + ' ' + unit;
    }
    return div({
        style: CommonCss.getText()
    }, text);
}


function getButtonSubmit(props: Props, text: string, valid_to: string) {
    return ButtonView({
        name: text,
        isResponsibleHeight: true,
        isLoader: props.subscribe.process,
        disabled: props.subscribe.process,
        onClick: () => {
            AppDispatcher.handleViewAction({
                actionType: Constants.SUBSCRIPTION_ON_SERVER,
                valid_to: valid_to
            });
        }
    });
}

const p = HomeStore.getStateHome();
declare type Props = typeof p;

function render() {

    const props = HomeStore.getStateHome();

    if (!props.login.success) {
        return null;
    }

    let box: any = null;
    if (!props.user.isPrime) {
        box = div({ style: CommonCss.getBox() },
            div({ style: CommonCss.getBoxSplit() },
                getButtonSubmit(props, dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_YEAR, utils.getNextYearISOdate()),
                getButtonSubmit(props, dictionary.SUBMIT_BUTTON_SUBSCRIBING_ONE_MONTH, utils.getNextMonthISOdate()),
                div({ style: CommonCss.getText() },
                    dictionary.SUBSCRIBING_EXPLANATION)
            )
        );
    }

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