
/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
const {div} = React.DOM;

interface LayoutPropsFace {
    onComponentDidMount: Function
}
interface LayoutStateFace { }

class Layout extends React.Component<LayoutPropsFace, LayoutStateFace>{

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

    _getGreetingsRegionEl() {
        return div({
            ref: 'greetingsRegion',
            key: 'greetingsRegion'
        });
    }

    _getRegisteringRegionEl() {
        return div({
            ref: 'registeringRegion',
            key: 'registeringsRegion'
        });
    }

    public componentDidMount() {
        this.props.onComponentDidMount({
            settingsRegion: ReactDOM.findDOMNode(this.refs["settingsRegion"]),
            boardRegion: ReactDOM.findDOMNode(this.refs["boardRegion"]),
            greetingsRegion: ReactDOM.findDOMNode(this.refs["greetingsRegion"]),
            registeringRegion: ReactDOM.findDOMNode(this.refs["registeringRegion"])
        });
    }

    public render() {
        return div({}, this._getBoardRegionEl(), this._getSettingsRegionEl(), this._getGreetingsRegionEl(), this._getRegisteringRegionEl());
    }
};

export =  React.createFactory(Layout);
