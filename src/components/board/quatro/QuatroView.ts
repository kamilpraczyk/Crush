import React = require('react');
import QuatroCss = require('./QuatroCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
import _ = require('underscore');
import {BoardResult} from '../../../lessons/interface';
const {div} = React.DOM;


function getFooter() {
    return div({
        style: QuatroCss.getFooter(),
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
        return div({
            key: name,
            style: QuatroCss.getItemWraper()
        },
            div({
                style: QuatroCss.getItem(state.selectedAnswer, name, state.lessonData.correct, name),
                onClick: QuatroCss.animate(function () {
                    AppDispatcher.handleViewAction({
                        actionType: Constants.CHOOSE_PICTURE,
                        id: name
                    });
                })
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
        div({
            style: QuatroCss.getText(),
            onClick: QuatroCss.animate(onRead, state.text)
        }, state.text)
    );
    const line3 = getContentLine(state, state.generatedList.slice(2, 4))


    return div({
        style: QuatroCss.getBody()
    }, line1, line2, line3)
};

function render(state: BoardResult) {
    return div({
        key: 'quatroView',
        style: QuatroCss.getPanel()
    }, getBody(state), getFooter());
};

export =  render
