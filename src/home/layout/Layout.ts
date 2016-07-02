
/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
const {div} = React.DOM;

interface LayoutPropsFace {
    onComponentDidMount: Function
}

class Layout extends React.Component<LayoutPropsFace, {}>{

    constructor(props: LayoutPropsFace) {
        super(props)
    }

    _getSettingsRegionEl() {
        return div({
            ref: 'settingsRegion',
            key: 'settingsRegion'
        });
    }

    _getBoardRegionEl() {
        return div({
            ref: 'boardRegion',
            key: 'boardRegion'
        });
    }


    public componentDidMount() {
        this.props.onComponentDidMount({
            settingsRegion: ReactDOM.findDOMNode(this.refs["settingsRegion"]),
            boardRegion: ReactDOM.findDOMNode(this.refs["boardRegion"])
        });
    }

    public render() {
        return div({},
            this._getBoardRegionEl(),
            this._getSettingsRegionEl()
        );
    }
};

export =  React.createFactory(Layout);
