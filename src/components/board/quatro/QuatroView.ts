import React = require('react');
import QuatroCss = require('./QuatroCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
import ButtonView = require('../../button/ButtonView');
import _ = require('underscore');
import {BoardResult} from '../../../lessons/interface';
import {isId}  from '../../../lessons/helper/constants';
const {div} = React.DOM;


function getFooter() {
    return div({
        style: QuatroCss.getFooter()
    }, MenuView())
}

function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}

function getContentLine(state: BoardResult, list: any[]) {
    const elements = list.map((name: string) => {
        let word: string = null;

        if (isId.isFourWords(state.lessonData.id)) {
            word = name;
        }

        let isFail = false;
        let isSuccess = false;
        if (state.selectedAnswer === name) {
            if (_.contains(state.lessonData.correct, state.selectedAnswer)) {
                isSuccess = true;
            } else {
                isFail = true;
            }
        }

        return div({
            key: name,
            style: QuatroCss.getItemWraper()
        },
            ButtonView({
                name: word,
                isExpand: true,
                isFail: isFail,
                isSuccess: isSuccess,
                isGuess: true,
                backUrl: word ? null : name,
                isTime: isId.isDigitalTime(state.lessonData.id),
                onClick: function () {
                    AppDispatcher.handleViewAction({
                        actionType: Constants.CHOOSE_PICTURE,
                        id: name
                    });
                }
            }));
    });

    return div({
        style: QuatroCss.getLine()
    }, elements);
}

function getBody(state: BoardResult) {
    const line1 = getContentLine(state, state.generatedList.slice(0, 2))

    const line2 = div({
        style: QuatroCss.getLineText()
    },
        ButtonView({
            name: state.text,
            isResponsibleCenter: true,
            onClick: function () {
                onRead(state.text)
            }
        })
    );
    const line3 = getContentLine(state, state.generatedList.slice(2, 4))


    return div({
        style: QuatroCss.getBody()
    },
        div({
            style: QuatroCss.getBodyContent()
        }, line1, line2, line3));
};

function render(state: BoardResult) {
    return div({
        key: 'quatroView',
        style: QuatroCss.getPanel()
    }, getBody(state), getFooter());
};

export =  render
