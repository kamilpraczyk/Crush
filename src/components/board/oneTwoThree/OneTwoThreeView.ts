import React = require('react');
import OneTwoThreeCss = require('./OneTwoThreeCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
import MenuView = require('../menu/MenuView');
import _ = require('underscore');
const {div} = React.DOM;

function getState() {
    return BoardStore.getOneTwoThreeState()
}
const state = getState();
declare type State = typeof state;

function getMenu() {
    return div({
        style: OneTwoThreeCss.getMenu(),
    }, MenuView())
}


function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}

function getContentLine(state: State, name: string) {
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

function getLines(state: State) {

    const text = div({
        style: OneTwoThreeCss.getLine(),
        onClick: OneTwoThreeCss.animate(onRead, state.text)
    }, div({
        style: OneTwoThreeCss.getText()
    }, state.text));
    const line1 = getContentLine(state, state.generatedList[0]);
    const line2 = getContentLine(state, state.generatedList[1]);
    const line3 = getContentLine(state, state.generatedList[2]);

    return div({
        style: OneTwoThreeCss.getLines()
    }, text, line1, line2, line3)
}

class OneTwoThreeView extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = getState();
    }

    componentWillReceiveProps() {
        this.state = getState();
    }

    render() {
        let center = div({
            style: OneTwoThreeCss.getCenter()
        }, getLines(this.state));

        return div({
            key: 'oneTwoThreeView',
            style: OneTwoThreeCss.getPanel()
        }, center, getMenu());
    }
};

export =  React.createFactory(OneTwoThreeView);
