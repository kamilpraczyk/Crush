/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
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
import UserView = require('./views/user/UserView');
import LessonStore = require('../../stores/lesson/LessonStore');

import {RootFace, RootFaces } from '../../stores/SettingsRootInterfaces';
const {div} = React.DOM;

const refsId = {
    scrollDiv: 'scrollDiv',
    panel: 'panel'
}

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
        style: SettingsRootCss.getPanel(state.isMinimalized),
        ref: refsId.panel
    }, getPanelSelection(), getPanelRoot(state));
}

function getPanelRoot(state: State) {
    return div({
        style: SettingsRootCss.getPanelRoot(state.isMenuMinimalized)
    }, getRootList(state));
}

function getPanelSelection() {

    let view: any = null;

    switch (activeRootId) {
        case rootIds.lessons:
            view = SwitcherView();
            break;
        case rootIds.explenation:
            view = ExplenationView();
            break;
        case rootIds.user:
            view = UserView();
            break;
    }

    return div({
        style: SettingsRootCss.getPanelSelection(),
        ref: refsId.scrollDiv
    }, view);
}


function getItem(state: State, item: any, id: string) {
    return ButtonView({
        name: state.isMenuMinimalized ? '' : item.name,
        icon: item.icon,
        onClick: () => {
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
    return _.map(state.rootList, (item: any, id: string) => {
        return div({
            key: id,
            style: SettingsRootCss.getRootItem(),
        }, getItem(state, item, id));
    });
}



let elementScroll: Element = null;
let panel: Element = null;
let activeRootId = SettingsRootStore.getActiveRoot();
const rootIds = SettingsRootStore.getIds();
let lastActiveRootId = activeRootId;


function scrollTo(el: Element, toEl?: Element) {
    el.scrollTop = 0;
    if (toEl) {
        const d = toEl.getBoundingClientRect();
        el.scrollTop = d.top
    }
}

class SettingRootView extends React.Component<{}, State> {

    private isOnEdge = true;
    private handleScroll = _.throttle(this._handleScroll.bind(this), 500);

    constructor() {
        super();
        this.state = getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SettingsRootStore.addChangeListener(this.onChange);
        elementScroll = ReactDOM.findDOMNode(this.refs[refsId.scrollDiv]);
        elementScroll.addEventListener('scroll', this.handleScroll);
        panel = ReactDOM.findDOMNode(this.refs[refsId.panel]);
    }

    componentWillUnmount() {
        SettingsRootStore.removeChangeListener(this.onChange);
        elementScroll.removeEventListener('scroll', this.handleScroll);
    }

    componentDidUpdate() {
        if (activeRootId !== lastActiveRootId) {
            if (activeRootId === rootIds.lessons) {
                const el = ReactDOM.findDOMNode(this.refs[LessonStore.getActiveId()]);
                el && scrollTo(elementScroll, el);
            } else {
                scrollTo(elementScroll, null);
            }
        }
        lastActiveRootId = activeRootId;
    }

    _handleScroll(e: Event) {

        const b = elementScroll.getBoundingClientRect();
        if (b.top === elementScroll.scrollTop && this.isOnEdge === false) {
            this.isOnEdge = true;
            AppDispatcher.handleViewAction({
                actionType: Constants.EXPLENATION_SCROLL_TOP
            });
        } else if (elementScroll.scrollTop > 100 && this.isOnEdge === true) {
            this.isOnEdge = false;
            AppDispatcher.handleViewAction({
                actionType: Constants.EXPLENATION_SCROLL_MIDDLE
            });
        }
    }

    onChange() {
        this.setState(getState());
    }

    render() {
        activeRootId = SettingsRootStore.getActiveRoot();
        return getPanel(this.state);
    }
}

export =  React.createFactory(SettingRootView);



