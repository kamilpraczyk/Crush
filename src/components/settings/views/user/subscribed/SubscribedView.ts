
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import {getState} from '../../../../../services';
const {div, label, input} = React.DOM;
import utils = require('../../../../../utils/utils');
import {events} from '../../../../../events';


function getTitleText(props: Props) {
    const daysLeft = utils.howManyDaysLeft(props.pass.user.valid_to);
    if (daysLeft > 0) {
        const unit = Math.abs(daysLeft) === 1 ? dictionary.DAY : dictionary.DAYS;
        return dictionary.HEADER_SUBSCRIBED_VALID + ' ' + daysLeft + ' ' + unit;
    }
    return dictionary.HEADER_SUBSCRIBED_EXPIRED + props.pass.user.valid_to;
}

function getTitle(props: Props) {
    return div({
        style: CommonCss.getText()
    }, getTitleText(props));
}


const p = getState();
declare type Props = typeof p;

function render() {

    const props = getState();

    if (!props.pass.user.isPrime) {
        return null;
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle(props)
    ));
}

export = render;