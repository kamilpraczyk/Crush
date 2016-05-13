/// <reference path="../../../../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import SwitchCss = require('./SwitchCss');
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import ButtonView = require('../../../button/ButtonView');
import PurchaseInfoView = require('../purchaseInfo/PurchaseInfoView');
import {LessonMapFace, LessonFace} from '../../../../lessons/interface';
import SettingsRootStore = require('../../../../stores/SettingsRootStore');
import LessonStore = require('../../../../stores/lesson/LessonStore');
const {div} = React.DOM;


function getState() {

    let list = LessonStore.getToBought();
    const ids = SettingsRootStore.getIds();

    switch (SettingsRootStore.getActiveRoot()) {
        case ids.lessons:
            list = LessonStore.getBought();
            break;
        case ids.shopping:
            list = LessonStore.getToBought();
            break;
    }
    return {
        list: list
    }
}

function render() {
    const state = getState();
    const buttons = _.map(state.list, (item: LessonFace, id: string) => {
        return ButtonView({
            key: id,
            leftIcon: item.icon,
            name: item.name,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.SWITCH_ACTION,
                    id: id
                });
            },
            isQuickClick: true,
            isExpandWidth: true,
            isActive: item.active
        });
    });

    return div({
        style: SwitchCss.getPanel()
    }, PurchaseInfoView(), buttons);
}


export = render; 