import React = require('react');
import ProgressCss = require('./ProgressCss');
import { getState, APIState } from '../../../../services';
const {div} = React.DOM;

function getBars(apiState: APIState) {
    const points = apiState.lessonsCatalog.current.points;

    return points.boards.map(board => {
        const completeTrueFalseNone = points.mapStatus[board.autoId];
        const isCurrent = board.autoId === points.board.autoId;

        return div({
            key: board.autoId,
            style: ProgressCss.getBar(completeTrueFalseNone, isCurrent)
        })
    })
}

function render() {
    const apiState = getState();
    return div({
        style: ProgressCss.getPanel()
    }, getBars(apiState));
};

export =  render;
