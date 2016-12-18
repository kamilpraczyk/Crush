import React = require('react');
import SwitchCss = require('./SwitchCss');
import ButtonView = require('../../../button/ButtonView');
import { getState, APIState } from '../../../../services';
import { events } from '../../../../events';
import { FreeType, LessonFace } from '../../../../types';
import { isFree } from '../../../../lessons/helper/constants';
import css = require('../../../../utils/css/css');
const {div} = React.DOM;



function getIconSet(disabled: boolean, lesson: LessonFace) {
    let icons = lesson.iconSet;

    if (lesson.freeType === FreeType.inProgressBlock)
        icons = [css.iconsSets.progress].concat(icons);

    return disabled ? [css.iconsSets.lock].concat(icons) : icons;
}

function getButtions() {
    const apiState = getState();
    return apiState.lessonsCatalog.sortedLessons.map(lesson => {
        const disabled = !isFree(apiState, lesson.freeType);
        return ButtonView({
            key: lesson.uid,
            ref: lesson.uid,
            iconSet: getIconSet(disabled, lesson),
            name: lesson.name,
            numbersStatus: lesson.numberFinished,
            numbers: lesson.boards.length,
            disabled,
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

