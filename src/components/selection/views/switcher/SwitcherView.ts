/// <reference path="../../../../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import SwitchCss = require('./SwitchCss');
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import ButtonView = require('../../../button/ButtonView');
import SelectionStore = require('../../../../stores/SelectionStore');
const {div} = React.DOM;


function getState(): { list: [{ name: string, disable: boolean, active: boolean }] } {
    const rootState = SelectionStore.getRootState();
    const ids = rootState.ids;
    let list = [] as any;
    switch (rootState.id) {
        case ids.settings:
            list = SelectionStore.getSettings();
            break;
        case ids.lessons:
            list = SelectionStore.getBought();
            break;
        case ids.shopping:
            list = SelectionStore.getToBought();
            break;
    }
    return {
        list: list
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
        const buttons = _.map(this.state.list, (item: any, id: string) => {
            if (!item.hide) {
                return ButtonView({
                    key: id,
                    name: item.name,
                    onClick: function() {
                        AppDispatcher.handleViewAction({
                            actionType: Constants.SWITCH_ACTION,
                            id: id
                        });
                    },
                    isExpandWidth: true,
                    isActive: item.active
                });
            }
        });

        return div({
            style: SwitchCss.getPanel()
        }, buttons);
    }

};

export =  React.createFactory(View); 