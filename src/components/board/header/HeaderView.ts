import React = require('react');
import HeaderCss = require('./HeaderCss');
import ButtonView = require('../../button/ButtonView');
import TimeView = require('../time/TimeView');
import {BoardResult} from '../../../types';
import {isId} from '../../../lessons/helper/constants';
import {events} from '../../../events';
import _ = require('underscore');
const {div} = React.DOM;



function getAnswerOrSupport(props: BoardResult) {
    if (props.lessonData.isHelp && props.lessonData.correct && props.lessonData.correct.length) {
        return ButtonView({
            icon: props.isSupportShowAnswer ? null : HeaderCss.getSupportIcon(),
            isTime: isId.isDigitalTime(props.lessonData.id),
            isResponsibleCenter: true,
            name: props.isSupportShowAnswer ? props.lessonData.correct.join(" ") : null,
            onClick: () => events.onToogleSupportHelp.publish()
        });
    }
    return null;
};


function getAnalogTime(state: BoardResult) {
    if (!isId.isAnalogTime(state.lessonData.id)) return null;
    const time = state.lessonData.name.split(':');
    return div({
        onClick: () => events.readEvent.publish(state.lessonData.info),
        style: HeaderCss.getInstructions(state.lessonData.id)
    }, TimeView({
        hour: parseInt(time[0]),
        minute: parseInt(time[1])
    }));
}

function getInstructions(state: BoardResult) {
    if (!state.lessonData.info) return null;

    return ButtonView({
        name: state.lessonData.info,
        isInstructions: true,
        isTransparent: true,
        onClick: () => events.readEvent.publish(state.lessonData.info)
    })
}

function getHeader(state: BoardResult) {

    return div({
        style: HeaderCss.getHeader(state.lessonData.id)
    },
        getInstructions(state),
        getAnalogTime(state),
        ButtonView({
            name: state.text,
            onClick: () => events.readEvent.publish(state.text)
        }),
        getAnswerOrSupport(state)
    );
}

export = getHeader;
