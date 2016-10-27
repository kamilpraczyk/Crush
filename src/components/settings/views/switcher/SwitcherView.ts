/// <reference path="../../../../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
import _ = require('underscore');
import SwitchCss = require('./SwitchCss');
import ButtonView = require('../../../button/ButtonView');
import {LessonMapFace, LessonFace} from '../../../../types';
import {getState} from '../../../../services';
import {events} from '../../../../events';
const {div} = React.DOM;


function render() {
    const s = getState();
    const pass = s.pass.getStatus();

    const buttons = _.map(s.lessonsCatalog.getMapLessons(), item => {
        return ButtonView({
            key: item.uid,
            ref: item.uid,
            iconSet: item.iconSet,
            name: item.name,
            numbersStatus: s.lessonsStatus.getStatusByUid(item.uid),
            numbers: item.lessons.length,
            disabled: !(pass.user.isPrime || item.free),
            onClick: () => events.loadNewLessonEvent.publish(item.uid),
            isQuickClick: false,
            isExpandWidth: true,
            isActive: item.active
        });
    });

    return div({
        style: SwitchCss.getPanel()
    }, buttons);
}




export = render;

