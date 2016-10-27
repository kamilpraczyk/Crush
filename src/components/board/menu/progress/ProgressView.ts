import React = require('react');
import ProgressCss = require('./ProgressCss');
import {getState} from '../../../../services';
const {div} = React.DOM;

function getBars() {
    const points = getState().lessonsCatalog.board.getPoints();

    return points.boards.map(board => {
        const completeTrueFalseNone = points.mapStatus[board.id];
        const isCurrent = board.id === points.board.id;

        return div({
            key: board.id,
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
