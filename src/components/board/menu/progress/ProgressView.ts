import React = require('react');
import ProgressCss = require('./ProgressCss');
import { getState } from '../../../../services';
const {div} = React.DOM;

function getBars() {
    const points = getState().lessonsCatalog.current.points;

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
    return div({
        style: ProgressCss.getPanel()
    }, getBars());
};

export =  render;
