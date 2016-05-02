import React = require('react');
import QuatroCss = require('./QuatroCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
import Signature = require('../../signature/index');
import MenuView = require('../menu/MenuView');
import _ = require('underscore');
const {div} = React.DOM;

function getState() {
    return BoardStore.getQuatroState()
}
const state = getState();
declare type State = typeof state;

function getMenu() {
    return div({
        style: QuatroCss.getMenu(),
    }, MenuView())
}

function onClickPic(name: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.CHOOSE_PICTURE,
        id: name
    });
}

function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}

function getContentLine(state: State, list: any[]) {
    let corrrectId = state.lessonData.correct;
    const elements = list.map((name: string) => {
        const isPicture = _.contains(name, '.png') || _.contains(name, '/');
        let pic = null as string;
        if (isPicture) {
            pic = name;
        }

        return div({
            key: name,
            style: QuatroCss.getItem(state.selectedAnswer, name, state.lessonData.correct, pic),
            onClick: QuatroCss.animate(onClickPic, name)
        }, pic ? null : name)
    })

    return div({
        style: QuatroCss.getLine()
    }, elements);
}

function getQuatro(state: State) {
    const line1 = getContentLine(state, state.generatedList.slice(0, 2))

    const line2 = div({
        style: QuatroCss.getLineText(),
        onClick: QuatroCss.animate(onRead, state.text)
    },
        div({
            style: QuatroCss.getText(),
        }, state.text)
    );
    const line3 = getContentLine(state, state.generatedList.slice(2, 4))


    return div({
        style: QuatroCss.getQuatro()
    }, line1, line2, line3)
}

class QuatroView extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = getState();
    }

    componentWillReceiveProps() {
        this.state = getState();
    }

    render() {
        let center = div({
            style: QuatroCss.getCenter()
        }, getQuatro(this.state));

        return div({
            key: 'quatroView',
            style: QuatroCss.getPanel()
        }, center, getMenu());
    }
};

export =  React.createFactory(QuatroView);
