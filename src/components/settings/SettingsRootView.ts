/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import css = require('../../utils/css/css');
import ButtonView = require('../../components/button/ButtonView');
import _ = require('underscore');
import SettingsRootCss = require('./SettingsRootCss');
import SwitcherView = require('./views/switcher/SwitcherView');
import ExplenationView = require('./views/explenation/ExplenationView');
import UserView = require('./views/user/UserView');
import { RootFace, RootType } from '../../types';
import { getState } from '../../services';
import { events } from '../../events';
import ReactDOM = require('react-dom');
const {div} = React.DOM;
const scrollRef = 'scrollRef';

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
    const s = getState();
    return _.map(s.rootMenu.list, item => {
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

function updatePosition(e: any) {
    events.scrollPosition.publish(e.target.scrollTop);
}

const throttled = _.throttle(updatePosition, 800);

function getMain() {
    const s = getState();

    function getMainView() {
        switch (s.rootMenu.activeId) {
            case RootType.lessons: return SwitcherView();
            case RootType.explenation: return ExplenationView();
            case RootType.user: return UserView();
        }
        return null;
    }

    return div({
        style: SettingsRootCss.getMain(),
        onScroll: throttled,
        ref: scrollRef
    }, getMainView());
}

function render() {
    const s = getState();
    if (s.rootMenu.isMinimalized) return null;

    return div({
        style: SettingsRootCss.getPanel()
    }, getMain(), getMenu());
}


class View extends React.Component<void, void>{

    refs: any
    constructor() {
        super();
    }

    componentDidUpdate() {
        const region = ReactDOM.findDOMNode(this.refs[scrollRef]);
        if (region) {
            const s = getState();
            region.scrollTop = s.rootMenu.scrollPosition;
        }
    }

    render() {
        return render();
    }
};

export =  React.createFactory(View);





