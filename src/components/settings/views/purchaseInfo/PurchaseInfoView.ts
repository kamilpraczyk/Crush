import React = require('react');
import PurchaseInfoCss = require('./PurchaseInfoCss');
const {div} = React.DOM;
import BoardStore = require('../../../../stores/board/BoardStore');
import ButtonView = require('../../../button/ButtonView')
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import dictionary = require('../../../../utils/dictionary');

function getState() {
    return;
}

//const state = getState();
//declare type State = typeof state;


function render() {
    const state = BoardStore.getPurchaseInfoState();

    const subscribeTextItem = div({
        style: PurchaseInfoCss.getItem()
    }, dictionary.SUBSCRIBE_TEXT());

    const subscribeButtonItem = div({
        style: PurchaseInfoCss.getItem()
    }, ButtonView({
        name: dictionary.SUBSCRIBE_BUTTON(),
        icon: PurchaseInfoCss.getIconSubscribe(),
        isExpandWidth: false,
        onClick: function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.SUBSCRIBE
            });
        }
    }))

    const line = div({
        style: PurchaseInfoCss.getLine()
    }, subscribeTextItem, subscribeButtonItem);

    return div({
        style: PurchaseInfoCss.getPanel()
    }, line);

}

export = render;
