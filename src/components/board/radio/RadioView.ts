import React = require('react');
import RadioCss = require('./RadioCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
import {BoardResult} from '../../../lessons/interface';
import _ = require('underscore');
const {div} = React.DOM;


function onAnswer(id: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.CHOOSE_RADIO,
        id: id
    });
}

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

    if (state.lessonData.info) {
        instructions = div({
            onClick: RadioCss.animate(onRead, state.lessonData.info),
            style: RadioCss.getInstructions()
        }, state.lessonData.info);
    }

    return div({
        style: RadioCss.getHeader()
    },
        instructions,
        div({
            onClick: RadioCss.animate(onRead, state.text),
            style: RadioCss.getText()
        }, state.text)
    );
}


function getBody(state: BoardResult) {

    function getItems(state: BoardResult) {
        return state.generatedList.map((name: string, index: number) => {
            return div({
                key: name + index,
                style: RadioCss.getItem(name, state.isCorrect, state.selectedAnswer),
                onClick: RadioCss.animate(onAnswer, name)
            }, name)
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
