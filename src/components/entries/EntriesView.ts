
/// <reference path="../../../typings/tsd.d.ts" />
import EntryView = require('../entry/EntryView');
import React = require('react');
import EntriesStore = require('../../stores/EntriesStore');
import _ = require('underscore');

function getTodoState() {
    return {
        allTodos: EntriesStore.getAll()
    };
}

const EntriesView = React.createClass({

    getInitialState: function() {
        return getTodoState();
    },

    componentDidMount: function() {
        EntriesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        EntriesStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getTodoState());
    },

    render: function() {
        let entries = _.map(this.state.allTodos, function(entry: { id: string }) {
            return EntryView({ entry: entry, key: entry.id });
        })

        return React.DOM.div({}, entries);
    }
});

export = React.createFactory(EntriesView); 


