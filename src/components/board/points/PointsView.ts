import React = require('react');
import PointsCss = require('./PointsCss');
import _ = require('underscore');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
import ButtonView = require('../../button/ButtonView');
const {div} = React.DOM;


function render() {
    const state = BoardStore.getPoints();

    function getIcon() {
        if (state.points.isCurrentSuccess)
            return PointsCss.getClassNameIconSuccess();
        if (state.points.isCurrentFail)
            return PointsCss.getClassNameIconFail();
        return PointsCss.getClassNameIconUnknown();
    }

    return div({
        style: PointsCss.getPanel(),
    },
        ButtonView({
            name: state.points.display,
            icon: getIcon(),
            isFail: state.points.isCurrentFail,
            isSuccess: state.points.isCurrentSuccess,
            isExpand: true,
            isTransparent: true,
            isQuickClick: true,
            onClick: () => {
                AppDispatcher.handleViewAction({
                    actionType: Constants.MAXIMALIZE_SETTINGS
                });
            }
        })
    );
}

export = render;