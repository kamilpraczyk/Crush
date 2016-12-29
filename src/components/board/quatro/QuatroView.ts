import React = require('react');
import QuatroCss = require('./QuatroCss');
import MenuView = require('../menu/MenuView');
import ButtonView = require('../../button/ButtonView');
import _ = require('underscore');
import { BoardAnswerState } from '../../../types';
import { isId } from '../../../lessons/helper/constants';
import HeaderView = require('../header/HeaderView');
import { events } from '../../../events';
const {div} = React.DOM;


function getFooter() {
    return div({
        style: QuatroCss.getFooter()
    }, MenuView())
}


function getContentLine(state: BoardAnswerState, list: any[]) {
    const elements = list.map((name: string) => {
        let word: string = null;

        if (isId.isFourWords(state.board.data.id)) {
            word = name;
        }

        let isFail = false;
        let isSuccess = false;
        if (state.selectedAnswer === name) {
            if (_.contains(state.board.data.correct, state.selectedAnswer)) {
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
                isResponsibleCenter: true,
                isTime: isId.isDigitalTime(state.board.data.id),
                onClick: () => events.onChoosePicture.publish(name)
            }));
    });

    return div({
        style: QuatroCss.getLine()
    }, elements);
}

function getBody(state: BoardAnswerState) {
    const line1 = getContentLine(state, state.generatedList.slice(0, 2))
    const line2 = getContentLine(state, state.generatedList.slice(2, 4))

    return div({
        style: QuatroCss.getBody()
    },
        div({
            style: QuatroCss.getBodyContent()
        }, line1, line2));
};

export = function render(state: BoardAnswerState) {
    return div({
        style: QuatroCss.getPanel()
    }, HeaderView(state), getBody(state), getFooter());
};

