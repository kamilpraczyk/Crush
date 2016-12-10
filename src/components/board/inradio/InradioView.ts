import React = require('react');
import InradioCss = require('./InradioCss');
import MenuView = require('../menu/MenuView');
import HeaderView = require('../header/HeaderView');
import ButtonView = require('../../button/ButtonView');
import { BoardAnswerState } from '../../../types';
import { space } from '../../../lessons/helper/constants';
import _ = require('underscore');
import { events } from '../../../events';
const {div} = React.DOM;



function getFooter() {
    return div({
        style: InradioCss.layout.getFooter()
    }, MenuView());
}

function getList(state: BoardAnswerState) {
    const list = state.generatedList.map((name, index) => {
        return ButtonView({
            key: name + index,
            name,
            isFail: state.selectedAnswer === name && !state.isCorrect,
            isSuccess: state.selectedAnswer === name && state.isCorrect,
            isResponsibleCenter: true,
            isGuess: true,
            onClick: () => events.onChooseRadio.publish(name)
        });
    });

    return div({
        style: InradioCss.getList()
    }, list);
}

function getBody(state: BoardAnswerState) {


    if (state.text.indexOf(space) === -1) {
        return div({
            style: InradioCss.getBody()
        },
            div({
                style: InradioCss.getBodyContent()
            },
                ButtonView({
                    isResponsibleCenter: true,
                    isSuccess: true,
                    name: state.text,
                    onClick: () => events.readEvent.publish(state.text)
                })
            ));
    } else {
        const text = state.text.split(space);
        let firstPart: any = null;
        if (_.first(text)) {
            firstPart = ButtonView({
                name: _.first(text),
                onClick: () => events.readEvent.publish(_.first(text))
            });
        }

        let lastPart: any = null;
        if (_.last(text)) {
            lastPart = ButtonView({
                name: _.last(text),
                onClick: () => events.readEvent.publish(_.last(text))
            })
        }

        return div({
            style: InradioCss.getBody()
        }, div({
            style: InradioCss.getBodyContent()
        }, firstPart, getList(state), lastPart));
    }
};


function render(state: BoardAnswerState) {
    return div({
        style: InradioCss.layout.getPanel()
    }, HeaderView(state), getBody(state), getFooter());
};

export = render;
