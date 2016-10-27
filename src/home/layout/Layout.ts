
/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import SettingsRootView = require('../../components/settings/SettingsRootView');
import BoardView = require('../../components/board/BoardView');
const {div} = React.DOM;

class Layout extends React.Component<void, void>{

    constructor() {
        super();
    }

    public render() {
        return div({},
            BoardView(),
            SettingsRootView()
        );
    }
};

export =  React.createFactory(Layout);
