import React = require('react');
import OneTwoThreeCss = require('./OneTwoThreeCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import {BoardResult} from '../../../lessons/interface';
import MenuView = require('../menu/MenuView');
import _ = require('underscore');
const {div} = React.DOM;


function getFooter() {
    return div({
        style: OneTwoThreeCss.getFooter(),
    }, MenuView())
}


function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}

function getHeader(state: BoardResult) {
    return div({
        style: OneTwoThreeCss.getHeader(),
    }, div({
        style: OneTwoThreeCss.getText(),
        onClick: OneTwoThreeCss.animate(onRead, state.text)
    }, state.text));
}

function getContentLine(state: BoardResult, name: string) {
    let corrrectId = state.lessonData.correct;


    const nameEl = div({
        key: name,
        style: OneTwoThreeCss.getItem(state.selectedAnswer, name, state.isCorrect),
        onClick: OneTwoThreeCss.animate(function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.CHOOSE_ONE_TWO_THREE,
                id: name
            });
        })
    }, name);

    return div({
        style: OneTwoThreeCss.getLine()
    }, nameEl);
}

function getBodyContent(state: BoardResult) {

    const line1 = getContentLine(state, state.generatedList[0]);
    const line2 = getContentLine(state, state.generatedList[1]);
    const line3 = getContentLine(state, state.generatedList[2]);

    return div({
        style: OneTwoThreeCss.getBodyContent()
    }, line1, line2, line3)
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
