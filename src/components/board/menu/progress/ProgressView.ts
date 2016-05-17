import React = require('react');
import ProgressCss = require('./ProgressCss');
import _ = require('underscore');
import BoardStore = require('../../../../stores/board/BoardStore');
const {div} = React.DOM;

function render() {
    const state = BoardStore.getPoints();
    let bars: any[] = [];


    for (let i = 0; i < state.points.boards.length; i++) {

        const id = state.points.boards[i].id;
        const completeTrueFalseNone = state.points.mapStatus[id];
        const isCurrent = id === state.points.board.id;

        bars.push(div({
            key: 'bar_' + i,
            style: ProgressCss.getBar(completeTrueFalseNone, isCurrent)
        }));
    }


    return div({
        style: ProgressCss.getPanel()
    }, bars);
};

export =  render;
