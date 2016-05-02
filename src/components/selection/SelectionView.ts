/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import SelectionCss = require('./SelectionCss');
import SelectionStore = require('../../stores/SelectionStore');
import SwitcherView = require('./views/switcher/SwitcherView');
import ExplenationView = require('./views/explenation/ExplenationView');
const {div} = React.DOM;

function getState() {
    return {
        // list: SelectionStore.getList()
    };
}


const getView = function(): any {
    const rootState = SelectionStore.getRootState();
    const ids = rootState.ids;
    switch (rootState.id) {
        case ids.lessons:
        case ids.shopping:
            return SwitcherView();
        case ids.explenation:
            return ExplenationView();
    }
}


const state = getState();
declare type State = typeof state;

class SelectionView extends React.Component<{}, State>{


    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SelectionStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SelectionStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    render() {
        return div({
            style: SelectionCss.getPanel()
        }, getView());
    }

}

export =  React.createFactory(SelectionView); 