import React = require('react');
import InradioCss = require('./InradioCss');
import MenuView = require('../menu/MenuView');
import HeaderView = require('../header/HeaderView');
import ButtonView = require('../../button/ButtonView');
import {BoardResult} from '../../../types';
import {space} from '../../../lessons/helper/constants';
import _ = require('underscore');
import {events} from '../../../events';
const {div} = React.DOM;



function getFooter() {
    return div({
        style: InradioCss.layout.getFooter()
    }, MenuView());
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
                isFail: isFail,
                isResponsibleCenter: true,
                isSuccess: isSuccess,
                isGuess: true,
                onClick: () => events.onChooseRadio.publish(name)
            });
        });
    }

    const list = div({
        style: InradioCss.getList()
    }, getItems(state));


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
        }, firstPart, list, lastPart));
    }
};


function render(state: BoardResult) {
    return div({
        style: InradioCss.layout.getPanel()
    }, HeaderView(state), getBody(state), getFooter());
};

export = render;
