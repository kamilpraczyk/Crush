
/// <reference path="../../../typings/tsd.d.ts" />
import dictionary = require('../../utils/dictionary');
import React = require('react');
import GreetingsCss = require('./GreetingsCss');
import ButtonView = require('../../components/button/ButtonView');
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import HomeStore = require('../../stores/home/HomeStore');
const {div} = React.DOM;

function getState() {
    return HomeStore.getStateHome();
}
const state = getState();
declare type State = typeof state;


function getTitle() {
    return div({
        style: GreetingsCss.getText()
    }, dictionary.GREET_TITLE());
}

function getText(name: string) {
    return div({
        style: GreetingsCss.getText()
    }, dictionary.GREET_HELLO({ name: name }));
};

function getButton() {
    return ButtonView({
        name: dictionary.GREET_START(),
        onClick: function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.GREETINGS_SHOW_LESSONS,
            });
        }
    });
};

function getContainer(state: State) {
    return div({
        style: GreetingsCss.getContainer()
    }, getTitle(), getText(state.userName), getButton());
};

function render() {
    const state = getState();
    if (state.isGreetings) {
        return div({
            style: GreetingsCss.getPanel()
        }, getContainer(state));
    }
    return div({});
}


export = render; 