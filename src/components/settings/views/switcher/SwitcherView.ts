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
import HomeStore = require('../../../../stores/home/HomeStore');
import {isId, icons} from '../../../../lessons/helper/constants';
const {div} = React.DOM;


function getState() {
    return {
        list: LessonStore.getAllLessons(),
        user: HomeStore.getStateHome().user
    }
}

function getIconByIdLesson(id: string) {
    if (isId.isDraw(id)) {
        return icons.draw;
    } else if (isId.isFourPictures(id)) {
        return icons.fourPictures;
    } else if (isId.isFourWords(id)) {
        return icons.fourWords;
    } else if (isId.isInradio(id)) {
        return icons.inradio;
    } else if (isId.isRadio(id)) {
        return icons.radio;
    } else if (isId.isOneTwoThree(id)) {
        return icons.oneTwoThree;
    }
    return '';
}

function render() {
    const state = getState();
    const buttons = _.map(state.list, (item: LessonFace, id: string) => {
        return ButtonView({
            key: id,
            ref: id,
            leftIcon: getIconByIdLesson(item.lessons[0].id), //TODO confirm this idea?!
            name: item.name,
            numbers: item.lessons.length,
            disabled: !(state.user.isPrime || item.free),
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
    }, buttons);
}




export = render;

