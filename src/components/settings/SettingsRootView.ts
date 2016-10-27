/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import css = require('../../utils/css/css');
import ButtonView = require('../../components/button/ButtonView');
import _ = require('underscore');
import SettingsRootCss = require('./SettingsRootCss');
import SwitcherView = require('./views/switcher/SwitcherView');
import ExplenationView = require('./views/explenation/ExplenationView');
import UserView = require('./views/user/UserView');
import {RootFace} from '../../types';
import {rootMenu, RootType} from '../../services';
import {events} from '../../events';
const {div} = React.DOM;


function getItem(item: RootFace) {
    return ButtonView({
        name: item.name,
        backUrl: item.backUrl,
        onClick: () => events.rootMenuEvent.publish(item.id),
        isQuickClick: true,
        isTransparent: item.id === RootType.close ? true : false,
        isExpandWidth: true,
        isExpand: true,
        isActive: item.active,
    });
}

function getList() {
    return _.map(rootMenu.getRootMenu(), item => {
        return div({
            key: item.id,
            style: SettingsRootCss.getItem(),
        }, getItem(item));
    });
}

function getMenu() {
    return div({
        style: SettingsRootCss.getMenu()
    }, getList());
}

function getMain() {

    function getMainView() {
        switch (rootMenu.getActiveId()) {
            case RootType.lessons: return SwitcherView();
            case RootType.explenation: return ExplenationView();
            case RootType.user: return UserView();
        }
        return null;
    }

    return div({
        style: SettingsRootCss.getMain()
    }, getMainView());
}

function render() {
    return div({
        style: SettingsRootCss.getPanel(rootMenu.isMinimalized())
    }, getMain(), getMenu());
}


export =  render;



