import React = require('react');
import ReactDOM = require('react-dom');
import BoardCss = require('./BoardCss');
import BoardStore = require('../../stores/board/BoardStore');
import DrawView = require('./draw/DrawView');
import RadioView = require('./radio/RadioView');
import QuatroView = require('./quatro/QuatroView');
const {div} = React.DOM;


function getView() {
    let ids = BoardStore.getSettingsIds()

    switch (BoardStore.getActiveSettingId()) {
        case ids.draw:
            return DrawView()
        case ids.qutro:
            return QuatroView();
        case ids.radio:
            return RadioView();
    }
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
        }, getView());
    }
};

export =  React.createFactory(BoardView);