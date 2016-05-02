import React = require('react');
import ExplenationCss = require('./ExplenationCss');
const {div, button} = React.DOM;
import BoardStore = require('../../../../stores/board/BoardStore');
import utils = require('../../../../utils/utils');


function getState() {
    return BoardStore.getExplenation();
}

const state = getState();
declare type State = typeof state;

class View extends React.Component<{}, State>{

    constructor() {
        super()
        this.state = getState();
    }

    render() {
        if (this.state.isVisible && this.state.explenation) {

            const title = div({
                style: ExplenationCss.getTitle(),
                onClick: ExplenationCss.animate(utils.voice.read, this.state.title)
            }, this.state.title);


            const body = div({
                style: ExplenationCss.getBody()
            }, this.state.explenation.exp, div({
                style: {
                    padding: '10vh'
                }
            }));

            return div({
                style: ExplenationCss.getPanel()
            }, title, body);

        }
        return null;
    }
};

export =  React.createFactory(View);
