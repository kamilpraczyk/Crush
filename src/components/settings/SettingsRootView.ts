/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import { Component, PropTypes } from 'react';
import ButtonView = require('../../components/button/ButtonView');
import _ = require('underscore');
import SettingsRootCss = require('./SettingsRootCss');
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import SettingRootStore = require('../../stores/SettingsRootStore');
import SelectionView = require('../selection/SelectionView')
import {RootFace, RootFaces } from '../../stores/SettingsRootInterfaces';
const {div} = React.DOM;

function getState() {
    return {
        rootList: SettingRootStore.getRootList(),
        isMinimalized: SettingRootStore.isMinimalized()
    };
}

const state = getState();
declare type State = typeof state;


function getPanel(state: State) {
    return div({
        style: SettingsRootCss.getPanel()
    }, getPanelSelection(), getPanelRoot(state));
}

function getPanelRoot(state: State) {
    return div({
        style: SettingsRootCss.getPanelRoot()
    }, getRootList(state));
}

function getPanelSelection() {
    return div({
        style: SettingsRootCss.getPanelSelection()
    }, SelectionView());
}



function getItem(item: any, id: string) {
    return ButtonView({
        name: item.name,
        icon: item.icon,
        onClick: function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.ROOT_ITEM_CLICK,
                id: id
            });
        },
        isQuickClick: id === 'close' ? false : true,
        isExpandWidth: true,
        isExpand: true,
        isActive: item.active,
    });
}

function getRootList(state: State) {
    return _.map(state.rootList, function (item: any, id: string) {
        return div({
            key: id,
            style: SettingsRootCss.getRootItem(),
        }, getItem(item, id));
    });
}



class SettingRootView extends React.Component<{}, State> {

    constructor() {
        super();
        this.state = getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SettingRootStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SettingRootStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    render() {
        if (this.state.isMinimalized) {
            return div({});
        }
        return getPanel(this.state);
    }
}

export =  React.createFactory(SettingRootView);



