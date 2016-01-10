/// <reference path="../../../typings/tsd.d.ts" />
import React = require('react');
import EntryActions = require('./EntryActions');

const EntryView = React.createClass({

    propTypes: {
        entry: React.PropTypes.object.isRequired
    },

    _onDestroyClick: function() {
        console.log('_onDestroyClick');
        EntryActions.destroy(this.props.entry.id);
    },

    render: function() {
        let entry = this.props.entry;

        console.log('entry', entry);
        return React.DOM.div({
            key: entry.id,
            onClick: this._onDestroyClick
        }, entry.text);
    }

});

export =  React.createFactory(EntryView); 