import React = require('react');
import dictionary = require('../../../utils/dictionary');
import GratulationCss = require('./GratulationCss');
import _ = require('underscore');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
import ButtonView = require('../../../components/button/ButtonView');
const {div} = React.DOM;


function render() {
    const state = BoardStore.getPoints();
    if (!state.points.isFinished) {
        return null;
    }

    function getTitle() {
        return div({
            style: GratulationCss.getText()
        }, dictionary.GRATULATIONS_TITLE());
    }

    function getText() {
        return div({
            style: GratulationCss.getText()
        }, dictionary.GRATULATIONS_TEXT({ score: state.points.scorePercent }));
    };

    function getButton() {
        return ButtonView({
            name: dictionary.GRATULATIONS_BUTTON(),
            isResponsibleHeight: true,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.GREETINGS_CONTINUE
                });
            }
        });
    };

    function getPanel() {
        return div({
            style: GratulationCss.getPanel()
        }, getTitle(), getText(), getButton());
    }


    return getPanel();

}

export = render;