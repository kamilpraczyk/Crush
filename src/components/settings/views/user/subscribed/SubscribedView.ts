import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import { getState, APIState } from '../../../../../services';
import { howManyDaysLeft } from '../../../../../utils/utils';
const {div} = React.DOM;


function getTitleText(apiState: APIState) {
    const daysLeft = howManyDaysLeft(apiState.pass.user.valid_to);
    if (daysLeft > 0) {
        const unit = Math.abs(daysLeft) === 1 ? dictionary.DAY : dictionary.DAYS;
        return dictionary.HEADER_SUBSCRIBED_VALID + ' ' + daysLeft + ' ' + unit;
    }
    return dictionary.HEADER_SUBSCRIBED_EXPIRED + apiState.pass.user.valid_to;
}

function getTitle(apiState: APIState) {
    return div({
        style: CommonCss.getText()
    }, getTitleText(apiState));
}

function render() {

    const apiState = getState();
    //if never subscribed before:
    if (!apiState.pass.user.isPrime && !apiState.pass.user.valid_to) return null;


    //still subscribed or expired:
    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle(apiState)
    ));
}

export = render;