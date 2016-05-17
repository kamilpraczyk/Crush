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
        style: OneTwoThreeCss.getFooter()
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

    return div({
        key: _.uniqueId('_'),
        style: OneTwoThreeCss.getLine()
    }, div({
        style: OneTwoThreeCss.getItem(state.selectedAnswer, name, state.isCorrect),
        onClick: OneTwoThreeCss.animate(function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.CHOOSE_ONE_TWO_THREE,
                id: name
            });
        })
    }, name));
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
