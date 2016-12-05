import React = require('react');
import MultiRadioCss = require('./MultiRadioCss');
import utils = require('../../../utils/utils');
import { BoardResult } from '../../../types';
import MenuView = require('../menu/MenuView');
import ButtonView = require('../../button/ButtonView');
import HeaderView = require('../header/HeaderView');
import _ = require('underscore');
import { events } from '../../../events';
const {div} = React.DOM;


function getFooter() {
    return div({
        style: MultiRadioCss.getFooter()
    }, MenuView())
}

function getContentLine(state: BoardResult, name: string, key: number) {

    return div({
        key: 'line' + key,
        style: MultiRadioCss.getLine()
    },
        ButtonView({
            name,
            isExpand: true,
            isFail: state.selectedAnswer === name && !state.isCorrect,
            isSuccess: state.selectedAnswer === name && state.isCorrect,
            isGuess: true,
            isExpandWidth: true,
            onClick: () => events.onChooseMultiRadio.publish(name)
        })
    );
}

function getBodyContent(state: BoardResult) {

    const lines = state.generatedList.map((o, key) => {
        return getContentLine(state, o, key);
    });

    return div({
        style: MultiRadioCss.getBodyContent()
    }, lines)
}

function getBody(state: BoardResult) {
    return div({
        style: MultiRadioCss.getBody()
    }, getBodyContent(state));
}

function render(state: BoardResult) {
    return div({
        style: MultiRadioCss.getPanel()
    }, HeaderView(state), getBody(state), getFooter());
};

export =  render;
