import React = require('react');
import RadioCss = require('./RadioCss');
import MenuView = require('../menu/MenuView');
import ButtonView = require('../../button/ButtonView');
import { BoardAnswerState } from '../../../types';
import { isId } from '../../../lessons/helper/constants';
import HeaderView = require('../header/HeaderView');
import _ = require('underscore');
import { events } from '../../../events';
const {div} = React.DOM;


function getFooter() {
    return div({
        style: RadioCss.layout.getFooter()
    }, MenuView());
}

function getBody(state: BoardAnswerState) {

    function getItems(state: BoardAnswerState) {
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
                isGuess: true,
                isExpandWidth: true,
                //isTime: isId.isDigitalTime(state.board.data.id),
                onClick: () => events.onChooseRadio.publish(name)
            });
        });
    }


    return div({
        style: RadioCss.getBody()
    },
        div({
            style: RadioCss.getBodyContent()
        },
            div({
                style: RadioCss.getList()
            }, getItems(state))
        )
    );
};


export = function render(state: BoardAnswerState) {
    return div({
        style: RadioCss.layout.getPanel()
    }, HeaderView(state), getBody(state), getFooter());
};

