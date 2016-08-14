import React = require('react');
import dictionary = require('../../../utils/dictionary');
import GratulationCss = require('./GratulationCss');
import _ = require('underscore');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
import ButtonView = require('../../../components/button/ButtonView');
import HomeStore = require('../../../stores/home/HomeStore');

const {div} = React.DOM;


function render() {

    const state = {
        points: BoardStore.getPoints().points,
        home: HomeStore.getStateHome()
    }

    if (!state.points.isFinished) {
        return null;
    }

    function getTitle() {
        return div({
            style: GratulationCss.getText()
        }, dictionary.GRATULATIONS_TITLE);
    };

    function getText() {
        return div({
            style: GratulationCss.getText()
        }, dictionary.GRATULATIONS_TEXT + state.points.scorePercent + dictionary.PERCENT);
    };

    function getButtonContinue() {
        return ButtonView({
            name: dictionary.GRATULATIONS_BUTTON,
            isResponsibleHeight: true,
            onClick: () => {
                AppDispatcher.handleViewAction({
                    actionType: Constants.GREETINGS_CONTINUE
                });
            }
        });
    };

    function getButtonSaveAndContinue() {
        if (!state.home.user.email || state.points.score === 0) {
            return null;
        }
        return ButtonView({
            name: dictionary.GRATULATIONS_SAVE_BUTTON,
            isResponsibleHeight: true,
            isLoader: state.home.status.process,
            onClick: () => {
                AppDispatcher.handleViewAction({
                    actionType: Constants.GREETINGS_CONTINUE,
                    data: {
                        uid: state.points.uid,
                        status: state.points.score
                    }
                });
            }
        });
    };

    function getContent() {
        return div({
            style: GratulationCss.getContent()
        }, getTitle(), getText(), getButtonSaveAndContinue(), getButtonContinue());
    };


    return div({
        style: GratulationCss.getPanel()
    }, getContent());
}

export = render;