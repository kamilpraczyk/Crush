import React = require('react');
import PointsCss = require('./PointsCss');
import _ = require('underscore');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
const {div} = React.DOM;


function render() {
    const state = BoardStore.getPoints();

    const points = div({
        style: PointsCss.getPoints()
    }, state.points.display);


    function getFail() {
        if (state.points.isCurrentFail) {
            return div({
                style: PointsCss.getStatusFail(),
                className: PointsCss.getClassNameIconFail()
            });
        }
        return null;
    }

    function getSuccess() {
        if (state.points.isCurrentSuccess) {
            return div({
                style: PointsCss.getStatusSuccess(),
                className: PointsCss.getClassNameIconSuccess()
            });
        }
        return null;
    }
    function getUnknown() {
        if (!state.points.isCurrentSuccess && !state.points.isCurrentFail) {
            return div({
                style: PointsCss.getStatusUnknown(),
                className: PointsCss.getClassNameIconUnknown()
            });
        }
        return null;
    }


    return div({
        style: PointsCss.getPanel(),
        onClick: PointsCss.animate(function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.MAXIMALIZE_SETTINGS
            });
        })
    }, points, getSuccess(), getFail(), getUnknown());
}

export = render;