/// <reference path="../../../../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import SwitchCss = require('./SwitchCss');
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import ButtonView = require('../../../button/ButtonView');
import PurchaseInfoView = require('../purchaseInfo/PurchaseInfoView');
import SelectionStore = require('../../../../stores/SelectionStore');
import {LessonMapFace, LessonFace} from '../../../../lessons/interface';
const {div} = React.DOM;



function getState() {
    const rootState = SelectionStore.getRootState();
    const ids = rootState.ids;
    let list = SelectionStore.getToBought();
    switch (rootState.id) {
        case ids.lessons:
            list = SelectionStore.getBought();
            break;
        case ids.shopping:
            list = SelectionStore.getToBought();
            break;
    }
    return {
        list: list,
        info: PurchaseInfoView()
    }
}

const state = getState();
declare type State = typeof state;

class View extends React.Component<{}, State>{

    constructor() {
        super();
    }

    render() {
        this.state = getState();
        const buttons = _.map(this.state.list, (item: LessonFace, id: string) => {
            return ButtonView({
                key: id,
                leftIcon:item.icon,
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
        }, this.state.info, buttons);
    }

};

export =  React.createFactory(View); 