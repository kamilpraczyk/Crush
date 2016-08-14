import React = require('react');
import OneTwoThreeCss = require('./OneTwoThreeCss');
import utils = require('../../../utils/utils');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import {BoardResult} from '../../../lessons/interface';
import MenuView = require('../menu/MenuView');
import ButtonView = require('../../button/ButtonView');
import _ = require('underscore');
const {div} = React.DOM;


function getFooter() {
    return div({
        style: OneTwoThreeCss.getFooter()
    }, MenuView())
}


function getHeader(state: BoardResult) {
    return div({
        style: OneTwoThreeCss.getHeader(),
    },
        ButtonView({
            name: state.text,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.READ,
                    read: state.text
                });
            }
        })
    );
}

function getContentLine(state: BoardResult, name: string) {

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
        key: _.uniqueId('_'),
        style: OneTwoThreeCss.getLine()
    },
        ButtonView({
            name: utils.tryToSetLowercaseFirstLetter(name, state.lessonData.correct),//Try to lowercase first word of sentence
            isExpand: true,
            isFail: isFail,
            isSuccess: isSuccess,
            isGuess: true,
            isExpandWidth: true,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.CHOOSE_ONE_TWO_THREE,
                    id: name
                });
            }
        })
    );
}

function getBodyContent(state: BoardResult) {

    const lines: any = [];
    _.each(state.generatedList, (o: string) => {
        lines.push(getContentLine(state, o));
    });

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
        key: 'oneTwoThreeView',
        style: OneTwoThreeCss.getPanel()
    }, getHeader(state), getBody(state), getFooter());
};

export =  render;
