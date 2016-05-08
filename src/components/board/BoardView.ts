import React = require('react');
import ReactDOM = require('react-dom');
import BoardCss = require('./BoardCss');
import BoardStore = require('../../stores/board/BoardStore');
import DrawView = require('./draw/DrawView');
import RadioView = require('./radio/RadioView');
import QuatroView = require('./quatro/QuatroView');
import OneTwoThreeView = require('./oneTwoThree/OneTwoThreeView');
import PointsView = require('./points/PointsView');

import {viewIds} from '../../lessons/helper/constants';

const {div} = React.DOM;


function getView() {

    switch (BoardStore.getSettingId()) {
        case viewIds.draw:
            return DrawView();
        case viewIds.fourPictures:
            return QuatroView();
        case viewIds.radio:
            return RadioView();
        case viewIds.oneTwoThree:
            return OneTwoThreeView();
    }
    console.error('GetView not recognized by id:' + BoardStore.getSettingId());
}


class BoardView extends React.Component<{}, {}>{

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({})
    }

    componentDidMount() {
        BoardStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChange);
    }

    render() {
        return div({
            style: BoardCss.getPanel()
        }, PointsView(), getView());
    }
};

export =  React.createFactory(BoardView);
