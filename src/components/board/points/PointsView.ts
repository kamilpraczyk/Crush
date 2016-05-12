import React = require('react');
import PointsCss = require('./PointsCss');
import _ = require('underscore');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
const {div} = React.DOM;

function getState() {
    return BoardStore.getPoints();
}

const state = getState();
declare type State = typeof state;

function getPanel(state: State) {

    const points = div({
        style: PointsCss.getPoints()
    }, state.points.display);

    let success: any = null;
    if (state.points.isCurrentSuccess) {
        success = div({
            style: PointsCss.getStatusSuccess(),
            className: PointsCss.getClassNameIconSuccess()
        });
    }

    let fail: any = null;
    if (state.points.isCurrentFail) {
        fail = div({
            style: PointsCss.getStatusFail(),
            className: PointsCss.getClassNameIconFail()
        });
    }

    return div({
        style: PointsCss.getPanel(),
        onClick: PointsCss.animate(function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.MAXIMALIZE_SETTINGS
            });
        })
    }, points, success, fail);
}

function render() {
    return getPanel(getState());
}

export = render;