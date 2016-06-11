
/// <reference path="../../../typings/tsd.d.ts" />
import dictionary = require('../../utils/dictionary');
import React = require('react');
import GreetingsCss = require('./GreetingsCss');
import ButtonView = require('../../components/button/ButtonView');
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import HomeStore = require('../../stores/home/HomeStore');
const {div} = React.DOM;


function render() {

    const state = HomeStore.getStateHome();

    if (!state.isGreetings) {
        return div({});
    }

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
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.GREETINGS_SHOW_LESSONS,
                });
            }
        });
    };


    return div({
        style: GreetingsCss.getPanel()
    }, div({
        style: GreetingsCss.getContainer()
    }, getTitle(), getText(state.userName), getButton()));
}


export = render; 