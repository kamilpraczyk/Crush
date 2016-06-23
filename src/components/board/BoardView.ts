import React = require('react');
import ReactDOM = require('react-dom');
import BoardCss = require('./BoardCss');
import BoardStore = require('../../stores/board/BoardStore');
import DrawView = require('./draw/DrawView');
import RadioView = require('./radio/RadioView');
import InradioView = require('./inradio/InradioView');
import QuatroView = require('./quatro/QuatroView');
import OneTwoThreeView = require('./oneTwoThree/OneTwoThreeView');
import PointsView = require('./points/PointsView');
import GratulationView = require('./gratulation/GratulationView')

import {viewIds} from '../../lessons/helper/constants';

const {div} = React.DOM;


function getView(): any {

    switch (BoardStore.getSettingId()) {
        case viewIds.draw:
            return DrawView(BoardStore.getBoardState());
        case viewIds.fourPictures:
        case viewIds.fourWords:
            return QuatroView(BoardStore.getBoardState());
        case viewIds.radio:
            return RadioView(BoardStore.getBoardState());
        case viewIds.inradio:
            return InradioView(BoardStore.getBoardState());
        case viewIds.oneTwoThree:
            return OneTwoThreeView(BoardStore.getBoardState());
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
        }, GratulationView(), PointsView(), getView());
    }
};

export =  React.createFactory(BoardView);
