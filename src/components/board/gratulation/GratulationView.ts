import React = require('react');
import dictionary = require('../../../utils/dictionary');
import GratulationCss = require('./GratulationCss');
import _ = require('underscore');
import ButtonView = require('../../../components/button/ButtonView');
import { getState } from '../../../services';
import { events } from '../../../events';
const {div} = React.DOM;


function render() {
    const state = getState();
    const points = state.lessonsCatalog.current.points;

    if (!points.isFinished) {
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
        }, dictionary.GRATULATIONS_TEXT + points.scorePercent + dictionary.PERCENT);
    };

    function getButtonContinue() {
        return ButtonView({
            name: dictionary.GRATULATIONS_BUTTON,
            isResponsibleHeight: true,
            onClick: () => events.closeStatusBoardEvent.publish()
        });
    };

    function getButtonSaveAndContinue() {
        if (!state.pass.user.email || points.score === 0) {
            return null;
        }
        return ButtonView({
            name: dictionary.GRATULATIONS_SAVE_BUTTON,
            isResponsibleHeight: true,
            isLoader: state.pass.status.process,
            onClick: () => {
                events.saveStatusBoardEvent.publish({
                    uid: points.uid,
                    status: points.score
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