/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import { Component, PropTypes } from 'react';

import _ = require('underscore');
import SettingsRootCss = require('./SettingsRootCss');
import SettingsRootActions = require('./SettingsRootActions');
import SettingRootStore = require('../../stores/SettingsRootStore');
import SelectionView = require('../selection/SelectionView')

const RootStore = SettingRootStore.Store;

function getState() {
    return {
        rootList: RootStore.getRootList()
    };
}


interface RootViewPropsFace {
}

interface RootViewStateFace {
    rootList: { item: any, id: string }
}

class SettingRootView extends React.Component<RootViewPropsFace, RootViewStateFace> {


    constructor(props: RootViewPropsFace) {
        super(props);
        this.state = getState();
        this.onChange = this.onChange.bind(this);
    }

    public componentDidMount() {
        RootStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        RootStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    _onRootClick(id: string) {
        SettingsRootActions.requestRootItem(id);
    }

    getPanelSelection() {
        return React.DOM.div({
            key: 'panelSelection',
            style: SettingsRootCss.getPanelSelection()
        }, SelectionView());
    }

    getItem(item: any, id: string) {
        let text = React.DOM.div({
            style: SettingsRootCss.getItemText(),
        }, item.name);

        return React.DOM.div({
            style: SettingsRootCss.getItem(item.active),
            onClick: function() {
                this._onRootClick(id)
            }.bind(this)
        }, text);
    }

    getRootList() {
        let list = _.map(this.state.rootList, function(item: any, id: string) {
            if (!item.disable) {
                return React.DOM.div({
                    key: id,
                    style: SettingsRootCss.getRootItem(),
                }, this.getItem(item, id));
            }
            return null;
        }, this);
        return React.DOM.div({
            style: SettingsRootCss.getRootList(),
        }, list);
    }

    getPanelRoot() {
        return React.DOM.div({
            key: 'panelRoot',
            style: SettingsRootCss.getPanelRoot()
        }, this.getRootList());
    }

    public render() {
        console.log(this.state);
        let panelContent = React.DOM.div({
            style: SettingsRootCss.getPanelContent()
        }, this.getPanelSelection(), this.getPanelRoot());

        return React.DOM.div({
            style: SettingsRootCss.getPanel()
        }, panelContent);
    }

}

export =  React.createFactory(SettingRootView); 



