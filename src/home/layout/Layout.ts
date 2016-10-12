
/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
const {div} = React.DOM;

interface LayoutPropsFace {
    onComponentDidMount: (o: { settingsRegion: any, boardRegion: any }) => void
}

class Layout extends React.Component<LayoutPropsFace, void>{

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
