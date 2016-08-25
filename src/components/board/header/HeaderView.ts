import React = require('react');
import HeaderCss = require('./HeaderCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import ButtonView = require('../../button/ButtonView');
import TimeView = require('../time/TimeView');
import {BoardResult} from '../../../lessons/interface';
import {isId} from '../../../lessons/helper/constants';
import _ = require('underscore');
const {div} = React.DOM;


function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}
function getAnswerOrSupport(props: BoardResult) {
    if (props.lessonData.isHelp && props.lessonData.correct && props.lessonData.correct.length) {
        return ButtonView({
            icon: props.isSupportShowAnswer ? null : HeaderCss.getSupportIcon(),
            isTime: isId.isDigitalTime(props.lessonData.id),
            isResponsibleCenter: true,
            name: props.isSupportShowAnswer ? props.lessonData.correct.join(" ") : null,
            onClick() {
                AppDispatcher.handleViewAction({
                    actionType: Constants.SUPPORT_SHOW_ANSWER
                });
            }
        });
    }
    return null;
};



function getHeader(state: BoardResult) {
    let instructions: any = null;

    if (isId.isAnalogTime(state.lessonData.id)) {
        const time = state.lessonData.name.split(':');
        instructions = div({
            onClick: HeaderCss.animate(onRead, state.lessonData.info),
            style: HeaderCss.getInstructions(state.lessonData.id)
        }, TimeView({
            hour: parseInt(time[0]),
            minute: parseInt(time[1])
        }));
    } else if (state.lessonData.info) {

        instructions = ButtonView({
            name: state.lessonData.info,
            isInstructions: true,
            isTime: isId.isDigitalTime(state.lessonData.id),
            onClick() {
                onRead(state.lessonData.info);
            }
        })
    }

    return div({
        style: HeaderCss.getHeader(state.lessonData.id)
    },
        instructions,
        ButtonView({
            name: state.text,
            onClick() {
                onRead(state.text);
            }
        }),
        getAnswerOrSupport(state)
    );
}

export = getHeader;
