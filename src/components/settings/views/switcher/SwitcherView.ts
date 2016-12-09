/// <reference path="../../../../../typings/tsd.d.ts" />
import React = require('react');
import SwitchCss = require('./SwitchCss');
import ButtonView = require('../../../button/ButtonView');
import { getState } from '../../../../services';
import { events } from '../../../../events';
import css = require('../../../../utils/css/css');
const {div} = React.DOM;

function getButtions() {
    const state = getState();
    return state.lessonsCatalog.sortedLessons.map(lesson => {
        return ButtonView({
            key: lesson.uid,
            ref: lesson.uid,
            iconSet: lesson.free ? lesson.iconSet : [css.iconsSets.lock].concat(lesson.iconSet),
            name: lesson.name,
            numbersStatus: lesson.numberFinished,
            numbers: lesson.boards.length,
            disabled: !(state.pass.user.isPrime || lesson.free),
            onClick: () => events.loadNewLessonEvent.publish(lesson.uid),
            isQuickClick: false,
            isExpandWidth: true,
            isActive: lesson.active
        });
    });
}

function render() {
    return div({ style: SwitchCss.getPanel() }, getButtions());
}

export = render;

