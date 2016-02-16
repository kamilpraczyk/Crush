/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import { Component, PropTypes } from 'react';

import _ = require('underscore');
import SettingsRootCss = require('./SettingsRootCss');
import SettingsRootActions = require('./SettingsRootActions');
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

interface RootViewPropsFace {
}

interface RootViewStateFace {
    rootList: RootFaces,
    isMinimalized: boolean
}

class SettingRootView extends React.Component<RootViewPropsFace, RootViewStateFace> {


    constructor(props: RootViewPropsFace) {
        super(props);
        this.state = getState();
        this.onChange = this.onChange.bind(this);
        this._onMinimalizeClick = this._onMinimalizeClick.bind(this);
    }

    public componentDidMount() {
        SettingRootStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        SettingRootStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    _onRootClick(id: string) {
        SettingsRootActions.requestRootItem(id);
    }

    _onMinimalizeClick() {
        SettingsRootActions.requestMaximalizeSettings();
    }

    getPanelSelection() {
        return div({
            key: 'panelSelection',
            style: SettingsRootCss.getPanelSelection()
        }, SelectionView());
    }

    getItem(item: any, id: string) {
        let icon = div({
            className: item.icon,
            style: SettingsRootCss.getIcon()
        });

        let text = div({
            style: SettingsRootCss.getItemText(),
        }, item.icon ? icon : item.name);

        return div({
            style: SettingsRootCss.getItem(item.active),
            onClick: function() {
                this._onRootClick(id)
            }.bind(this)
        }, text);
    }

    getRootList() {
        let list = _.map(this.state.rootList, function(item: any, id: string) {
            if (!item.disable) {
                return div({
                    key: id,
                    style: SettingsRootCss.getRootItem(),
                }, this.getItem(item, id));
            }
            return null;
        }, this);
        return div({
            style: SettingsRootCss.getRootList(),
        }, list);
    }

    getPanelRoot() {
        return div({
            key: 'panelRoot',
            style: SettingsRootCss.getPanelRoot()
        }, this.getRootList());
    }

    getMaximalized() {
        let panelContent = div({
            style: SettingsRootCss.getPanelContent()
        }, this.getPanelSelection(), this.getPanelRoot());

        return div({
            style: SettingsRootCss.getPanel()
        }, panelContent);
    }

    getMinimalized() {
        return div({
            style: SettingsRootCss.getPanelMinimalized(),
            onClick: this._onMinimalizeClick
        });
    }

    public render() {
        if (this.state.isMinimalized) {
            return this.getMinimalized();
        }
        return this.getMaximalized();
    }

}

export =  React.createFactory(SettingRootView); 



