
/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
interface LayoutPropsFace {
    onComponentDidMount: Function
}
interface LayoutStateFace { }

class Layout extends React.Component<LayoutPropsFace, LayoutStateFace>{

    constructor(props: LayoutPropsFace) {
        super(props)
    }

    _getSettingsRegionEl() {
        return React.DOM.div({
            ref: 'settingsRegion'
        });
    }

    _getBoardRegionEl() {
        return React.DOM.div({
            ref: 'boardRegion'
        });
    }

    _getGreetingsRegionEl() {
        return React.DOM.div({
            ref: 'greetingsRegion'
        });
    }

    public componentDidMount() {
        this.props.onComponentDidMount({
            settingsRegion: ReactDOM.findDOMNode(this.refs["settingsRegion"]),
            boardRegion: ReactDOM.findDOMNode(this.refs["boardRegion"]),
            greetingsRegion: ReactDOM.findDOMNode(this.refs["greetingsRegion"])
        });
    }

    public render() {
        return React.DOM.div({}, this._getBoardRegionEl(), this._getSettingsRegionEl(), this._getGreetingsRegionEl());
    }
};

export =  React.createFactory(Layout);
