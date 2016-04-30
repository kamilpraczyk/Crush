import React = require('react');
import PointsCss = require('./PointsCss');
import _ = require('underscore');
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

    return div({
        style: PointsCss.getPanel()
    }, points);
}

class View extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = getState()
    }

    componentWillReceiveProps() {
        this.setState(getState());
    }

    render() {
        return getPanel(this.state);
    }
};

export =  React.createFactory(View);
