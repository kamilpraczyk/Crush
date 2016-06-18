import React = require('react');
const {div} = React.DOM;

function render() {
    return div({
        className: 'spinner'
    },
        div({ className: 'bounce1' }),
        div({ className: 'bounce2' }),
        div({ className: 'bounce3' })
    );
};

export = render;
