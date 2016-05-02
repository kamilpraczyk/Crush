import React = require('react');
import RadioCss = require('./RadioCss');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
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

function onRead(read: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.READ,
        read: read
    });
}

function getMenu() {
    return div({
        style: RadioCss.getMenu()
    }, MenuView())
}




function getQueston(state: State) {
    const name = div({
        style: RadioCss.getContentName(),
        onClick: RadioCss.animate(onRead, state.lessonData.info)
    }, div({
        style: RadioCss.getName(state.lessonData.id)
    }, state.lessonData.info));

    return name;
}


function getName(state: State) {
   return div({
        style: RadioCss.getContentName(),
        onClick: RadioCss.animate(onRead, state.text)
    }, div({
        style: RadioCss.getName(state.lessonData.id)
    }, state.text));
}

function getRadio(state: State) {
    function getItems(state: State) {
        return state.generatedList.map((name: string, index: number) => {
            return div({
                key: name + index,
                style: RadioCss.getItem(index, name, state.isCorrect, state.selectedAnswer),
                onClick: RadioCss.animate(onAnswer, name)
            }, name)
        });
    }

    const list = div({
        style: RadioCss.getContentList()
    }, div({
        style: RadioCss.getList()
    }, getItems(state)))

    return div({
        style: RadioCss.getRadio()
    }, div({
        style: RadioCss.getRadioPanel()
    }, getQueston(state), getName(state), list));
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
