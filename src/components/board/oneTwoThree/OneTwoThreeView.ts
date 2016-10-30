import React = require('react');
import OneTwoThreeCss = require('./OneTwoThreeCss');
import utils = require('../../../utils/utils');
import {BoardResult} from '../../../types';
import MenuView = require('../menu/MenuView');
import ButtonView = require('../../button/ButtonView');
import HeaderView = require('../header/HeaderView');
import _ = require('underscore');
import {events} from '../../../events';
const {div} = React.DOM;


function getFooter() {
    return div({
        style: OneTwoThreeCss.getFooter()
    }, MenuView())
}

function getContentLine(state: BoardResult, name: string, key: number) {

    let isFail = false;
    let isSuccess = false;
    if (state.selectedAnswer === name) {
        if (state.isCorrect) {
            isSuccess = true;
        } else {
            isFail = true;
        }
    }

    return div({
        key: 'line' + key,
        style: OneTwoThreeCss.getLine()
    },
        ButtonView({
            name: utils.tryToSetLowercaseFirstLetter(name, state.lessonData.correct),//Try to lowercase first word of sentence
            isExpand: true,
            isFail: isFail,
            isSuccess: isSuccess,
            isGuess: true,
            isExpandWidth: true,
            onClick: () => events.onChooseOneTwoThree.publish(name)
        })
    );
}

function getBodyContent(state: BoardResult) {

    const lines = state.generatedList.map((o, key) => {
        return getContentLine(state, o, key);
    })

    return div({
        style: OneTwoThreeCss.getBodyContent()
    }, lines)
}

function getBody(state: BoardResult) {
    return div({
        style: OneTwoThreeCss.getBody()
    }, getBodyContent(state));
}

function render(state: BoardResult) {
    return div({
        style: OneTwoThreeCss.getPanel()
    }, HeaderView(state), getBody(state), getFooter());
};

export =  render;
