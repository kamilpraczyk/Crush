/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import _ = require('underscore');
import SelectionCss = require('./SelectionCss');
import SelectionStore = require('../../stores/SelectionStore');
import SwitcherView = require('./views/switcher/SwitcherView');

function getState() {
    return {
        list: SelectionStore.getList()
    };
}
interface SelectionViewPropsFace {

}
interface SelectionViewStateFace {
    list: Array<any>
}

class SelectionView extends React.Component<SelectionViewPropsFace, SelectionViewStateFace>{


    constructor(props: SelectionViewPropsFace) {
        super(props);
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
            return SwitcherView(_.extend({
                key: id,
                id: id
            }, item));
        });
    }

    public render() {
        return React.DOM.div({
            style: SelectionCss.getPanel()
        }, this.getList());
    }

}

export =  React.createFactory(SelectionView); 