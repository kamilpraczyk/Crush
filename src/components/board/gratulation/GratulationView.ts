import React = require('react');
import dictionary = require('../../../utils/dictionary');
import GratulationCss = require('./GratulationCss');
import _ = require('underscore');
import ButtonView = require('../../../components/button/ButtonView');
import { getState, APIState } from '../../../services';
import { events } from '../../../events';
const {div} = React.DOM;

function getTitle() {
    return div({
        style: GratulationCss.getText()
    }, dictionary.GRATULATIONS_TITLE);
};

function getButtonContinue() {
    return ButtonView({
        name: dictionary.GRATULATIONS_BUTTON,
        onClick: () => events.closeStatusBoardEvent.publish()
    });
};

function getText(apiState: APIState) {
    return div({
        style: GratulationCss.getText()
    }, dictionary.GRATULATIONS_TEXT + apiState.lessonsCatalog.current.points.scorePercent + dictionary.PERCENT);
};

function getButtonSaveAndContinue(apiState: APIState) {
    const points = apiState.lessonsCatalog.current.points;
    if (!apiState.pass.user.email || points.score === 0) {
        return null;
    }
    return ButtonView({
        name: dictionary.GRATULATIONS_SAVE_BUTTON,
        isLoader: apiState.pass.status.process,
        onClick: () => {
            events.saveStatusBoardEvent.publish({
                uid: points.uid,
                status: points.score
            });
        }
    });
};

function getContent(apiState: APIState) {
    return div({
        style: GratulationCss.getContent()
    },
        getTitle(),
        getText(apiState),
        getButtonSaveAndContinue(apiState),
        getButtonContinue()
    );
};

function render() {
    const apiState = getState();
    if (!apiState.lessonsCatalog.current.points.isFinished) return null;

    return div({
        style: GratulationCss.getPanel()
    }, getContent(apiState));
}

export = render;