import React = require('react');
import RadioCss = require('./RadioCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuFactory = require('../menu/MenuFactory');
import BoardStore = require('../../../stores/board/BoardStore');
import _ = require('underscore');
const {div} = React.DOM;

function getState() {
    return BoardStore.getRadioStage();
}
const state = getState();
declare type State = typeof state;

function onAnswer(id: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.CHOOSE_RADIO,
        id: id
    });
}

function getMenu() {
    return div({
        style: RadioCss.getMenu()
    }, MenuFactory())
}

function getItems(state: State) {
    return state.generatedList.map((name: string, index: number) => {
        return div({
            key: name,
            style: RadioCss.getItem(index, name, state.lessonData.correct, state.selectedAnswer),
            onClick: RadioCss.animate(onAnswer, name)
        }, name)
    });
}

function getRadio(state: State) {
    const name = div({
        style: RadioCss.getContentName()
    }, div({
        style: RadioCss.getName()
    }, state.text));

    const list = div({
        style: RadioCss.getContentList()
    }, div({
        style: RadioCss.getList()
    }, getItems(state)))

    return div({
        style: RadioCss.getRadio()
    }, div({
        style: RadioCss.getRadioPanel()
    }, name, list));
}

class RadioView extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = getState();
    }

    componentWillReceiveProps() {
        this.setState(getState());
    }

    render() {
        return div({
            key: 'radioView',
            style: RadioCss.getPanel()
        }, getRadio(this.state), getMenu());
    }
};

export = React.createFactory(RadioView);
