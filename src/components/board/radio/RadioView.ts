import React = require('react');
import RadioCss = require('./RadioCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
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

function getFooter() {
    return div({
        style: RadioCss.layout.getFooter()
    }, MenuView());
}

function getHeader(state: BoardResult) {
    let instructions: any = null;

    if (isId.isAnalogTime(state.lessonData.id)) {
        const time = state.lessonData.info.split(':');
        instructions = div({
            onClick: RadioCss.animate(onRead, state.lessonData.info),
            style: RadioCss.getInstructions(state.lessonData.id)
        }, TimeView({
            hour: parseInt(time[0]),
            minute: parseInt(time[1])
        }));
    } else if (state.lessonData.info) {
        instructions = div({
            onClick: RadioCss.animate(onRead, state.lessonData.info),
            style: RadioCss.getInstructions(state.lessonData.id)
        }, state.lessonData.info);


        instructions = ButtonView({
            name: state.lessonData.info,
            isTime: isId.isDigitalTime(state.lessonData.id),
            onClick: function () {
                onRead(state.lessonData.info);
            }
        })
    }


    return div({
        style: RadioCss.getHeader(state.lessonData.id)
    },
        instructions,
        ButtonView({
            name: state.text,
            onClick: function () {
                onRead(state.text);
            }
        })
    );
}


function getBody(state: BoardResult) {

    function getItems(state: BoardResult) {
        return state.generatedList.map((name: string, index: number) => {

            let isFail = false;
            let isSuccess = false;
            if (state.selectedAnswer === name) {
                if (state.isCorrect) {
                    isSuccess = true;
                } else {
                    isFail = true;
                }
            }

            return ButtonView({
                key: name + index,
                name: name,
                isExpand: true,
                isFail: isFail,
                isSuccess: isSuccess,
                isExpandWidth: true,
                //isTime: isId.isDigitalTime(state.lessonData.id),
                onClick: function () {
                    AppDispatcher.handleViewAction({
                        actionType: Constants.CHOOSE_RADIO,
                        id: name
                    });
                }
            });
        });
    }

    const list = div({
        style: RadioCss.getList()
    }, getItems(state));

    return div({
        style: RadioCss.getBody()
    }, div({
        style: RadioCss.getBodyContent()
    }, list));
};


function render(state: BoardResult) {
    return div({
        key: 'radioView',
        style: RadioCss.layout.getPanel()
    }, getHeader(state), getBody(state), getFooter());
};

export = render;
