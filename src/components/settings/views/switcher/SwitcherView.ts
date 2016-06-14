/// <reference path="../../../../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
import _ = require('underscore');
import SwitchCss = require('./SwitchCss');
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import ButtonView = require('../../../button/ButtonView');
import {LessonMapFace, LessonFace} from '../../../../lessons/interface';
import SettingsRootStore = require('../../../../stores/SettingsRootStore');
import LessonStore = require('../../../../stores/lesson/LessonStore');
const {div} = React.DOM;


function getState() {
    return {
        list: LessonStore.getAllLessons()
    }
}

function render() {
    const state = getState();
    const buttons = _.map(state.list, (item: LessonFace, id: string) => {
        return ButtonView({
            key: id,
            ref: id,
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
        style: SwitchCss.getPanel(),
        ref: 'panelSwitcher',
    }, buttons);
}




function scrollTo(el: Element, toEl: Element) {
    el.scrollTop = 0;
    if (toEl) {
        const d = toEl.getBoundingClientRect();
        el.scrollTop = d.top
    }
}



class View extends React.Component<{}, {}> {

    constructor() {
        super();
    }
    scroll() {
        scrollTo(ReactDOM.findDOMNode(this.refs["panelSwitcher"]), ReactDOM.findDOMNode(this.refs[LessonStore.getActiveId()]));
    }

    componentDidMount() {
        this.scroll();
    }

    componentDidUpdate() {
        this.scroll();
    }

    render() {
        return render();
    }
}

export =  React.createFactory(View);

