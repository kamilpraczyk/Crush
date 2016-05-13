import React = require('react');
import ExplenationCss = require('./ExplenationCss');
const {div, button} = React.DOM;
import BoardStore = require('../../../../stores/board/BoardStore');
import utils = require('../../../../utils/utils');


function render() {
    const state = BoardStore.getExplenation();
    if (state.isVisible && state.explenation) {

        const title = div({
            style: ExplenationCss.getTitle(),
            onClick: ExplenationCss.animate(utils.voice.read, state.title)
        }, state.title);


        const body = div({
            style: ExplenationCss.getBody()
        },
            div({
                style: ExplenationCss.getBodyContent()
            },
                state.explenation.exp)
        );

        return div({
            style: ExplenationCss.getPanel()
        }, title, body);

    }
    return null;
};

export =  render;
