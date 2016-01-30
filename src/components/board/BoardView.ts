import React = require('react');
import BoardCss = require('./BoardCss');
import BoardStore = require('../../stores/board/BoardStore');
import DrawView = require('./draw/DrawView');

function getState() {
    return {
        data: BoardStore.getData()
    }
}

interface BoardViewPropsFace {
}

interface BoardViewStateFace {
    data: any
}

class BoardView extends React.Component<BoardViewPropsFace, BoardViewStateFace>{

    constructor(props: BoardViewPropsFace) {
        super(props)
        this.state = getState();
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState(getState())
    }


    public componentDidMount() {
        BoardStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChange);
    }

    getDrawView() {
        return DrawView();
    }

    public render() {
        console.log(this.state.data);
        return React.DOM.div({
            style: BoardCss.getPanel()
        }, this.getDrawView());
    }
};

export =  React.createFactory(BoardView);
