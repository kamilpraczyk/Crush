/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import { getState } from '../../../../../services';
import utils = require('../../../../../utils/utils');
import { events } from '../../../../../events';
const {div} = React.DOM;


function render() {

    const state = getState();
    //if never subscribed before:
    if (!state.pass.user.isPrime && !state.pass.user.valid_to) return null;


    function getTitleText() {
        const daysLeft = utils.howManyDaysLeft(state.pass.user.valid_to);
        if (daysLeft > 0) {
            const unit = Math.abs(daysLeft) === 1 ? dictionary.DAY : dictionary.DAYS;
            return dictionary.HEADER_SUBSCRIBED_VALID + ' ' + daysLeft + ' ' + unit;
        }
        return dictionary.HEADER_SUBSCRIBED_EXPIRED + state.pass.user.valid_to;
    }

    function getTitle() {
        return div({
            style: CommonCss.getText()
        }, getTitleText());
    }


    //still subscribed or expired:
    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle()
    ));
}

export = render;