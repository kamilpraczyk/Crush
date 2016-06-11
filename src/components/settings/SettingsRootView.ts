/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import { Component, PropTypes } from 'react';
import css = require('../../utils/css/css');
import ButtonView = require('../../components/button/ButtonView');
import _ = require('underscore');
import SettingsRootCss = require('./SettingsRootCss');
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import SettingsRootStore = require('../../stores/SettingsRootStore');
import SwitcherView = require('./views/switcher/SwitcherView');
import ExplenationView = require('./views/explenation/ExplenationView');

import {RootFace, RootFaces } from '../../stores/SettingsRootInterfaces';
const {div} = React.DOM;

function getState() {
    return {
        rootList: SettingsRootStore.getRootList(),
        isMinimalized: SettingsRootStore.isMinimalized(),
        isMenuMinimalized: SettingsRootStore.isMenuMinimalized() && css.isMobile()
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
        style: SettingsRootCss.getPanelRoot(state.isMenuMinimalized)
    }, getRootList(state));
}

function getPanelSelection() {

    let view: any = null;
    const ids = SettingsRootStore.getIds();

    switch (SettingsRootStore.getActiveRoot()) {
        case ids.lessons:
        case ids.shopping:
            view = SwitcherView();
            break;
        case ids.explenation:
            view = ExplenationView();
    }

    return div({
        style: SettingsRootCss.getPanelSelection()
    }, view);


}



function getItem(state: State, item: any, id: string) {
    return ButtonView({
        name: state.isMenuMinimalized ? '' : item.name,
        icon: item.icon,
        onClick: function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.ROOT_ITEM_CLICK,
                id: id
            });
        },
        isQuickClick: id === 'close' ? false : true,
        isExpandWidth: true,
        isExpand: state.isMenuMinimalized ? false : true,
        isActive: item.active,
        isResponsibleHeight: state.isMenuMinimalized ? true : false,
        isResponsibleCenter: state.isMenuMinimalized ? true : false
    });
}

function getRootList(state: State) {
    return _.map(state.rootList, function (item: any, id: string) {
        return div({
            key: id,
            style: SettingsRootCss.getRootItem(),
        }, getItem(state, item, id));
    });
}



class SettingRootView extends React.Component<{}, State> {

    constructor() {
        super();
        this.state = getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SettingsRootStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SettingsRootStore.removeChangeListener(this.onChange);
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



