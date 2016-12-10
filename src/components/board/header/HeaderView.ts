import React = require('react');
import HeaderCss = require('./HeaderCss');
import ButtonView = require('../../button/ButtonView');
import TimeView = require('../time/TimeView');
import { BoardAnswerState } from '../../../types';
import { isId } from '../../../lessons/helper/constants';
import { events } from '../../../events';
import _ = require('underscore');
const {div} = React.DOM;



function getAnswerOrSupport(props: BoardAnswerState) {
    if (props.board.data.isHelp && props.board.data.correct && props.board.data.correct.length) {
        return ButtonView({
            icon: props.isSupportShowAnswer ? null : HeaderCss.getSupportIcon(),
            isTime: isId.isDigitalTime(props.board.data.id),
            isResponsibleCenter: true,
            name: props.isSupportShowAnswer ? props.board.data.correct.join(" ") : null,
            onClick: () => events.onToogleSupportHelp.publish()
        });
    }
    return null;
};


function getAnalogTime(state: BoardAnswerState) {
    if (!isId.isAnalogTime(state.board.data.id)) return null;
    const time = state.board.data.name.split(':');
    return div({
        onClick: () => events.readEvent.publish(state.board.data.info),
        style: HeaderCss.getInstructions(state.board.data.id)
    }, TimeView({
        hour: parseInt(time[0]),
        minute: parseInt(time[1])
    }));
}

function getInstructions(state: BoardAnswerState) {
    if (!state.board.data.info) return null;

    return ButtonView({
        name: state.board.data.info,
        isInstructions: true,
        isTransparent: true,
        onClick: () => events.readEvent.publish(state.board.data.info)
    })
}

function getHeader(state: BoardAnswerState) {

    return div({
        style: HeaderCss.getHeader(state.board.data.id)
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
