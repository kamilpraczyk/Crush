/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import SelectionCss = require('./SelectionCss');
import SelectionStore = require('../../stores/SelectionStore');
import SwitcherView = require('./views/switcher/SwitcherView');
const {div} = React.DOM;

function getState() {
    return {
        list: SelectionStore.getList()
    };
}

const state = getState();
declare type State = typeof state;

class SelectionView extends React.Component<{}, State>{


    constructor() {
        super();
        this.state = getState();
        this.onChange = this.onChange.bind(this);
    }

    public componentDidMount() {
        SelectionStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        SelectionStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(getState());
    }

    getList() {
        return _.map(this.state.list, function(item: any, id: string) {
            if (!item.hide) {
                return SwitcherView(_.extend({
                    key: id,
                    id: id
                }, item));
            }
            return null;
        });
    }

    public render() {
        return div({
            style: SelectionCss.getPanel()
        }, this.getList());
    }

}

export =  React.createFactory(SelectionView); 