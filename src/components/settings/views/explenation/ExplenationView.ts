import React = require('react');
import ReactDOM = require('react-dom');
import ExplenationCss = require('./ExplenationCss');
const {div, button} = React.DOM;
import BoardStore = require('../../../../stores/board/BoardStore');
import utils = require('../../../../utils/utils');
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import _ = require('underscore');

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
            style: ExplenationCss.getPanel(),
            ref: 'panelExplenation'
        }, title, body);

    }
    return null;
};

let element: Element = null;
class View extends React.Component<{}, {}> {

    private handleScroll = _.throttle(this._handleScroll.bind(this), 500);
    private isTop = true;
    constructor() {
        super();
    }
    _handleScroll(e: Event) {

        let b = element.getBoundingClientRect();

        if (b.top === element.scrollTop && this.isTop === false) {
            this.isTop = true;
            AppDispatcher.handleViewAction({
                actionType: Constants.EXPLENATION_SCROLL_TOP,
            });
        } else if (element.scrollTop > 20 && this.isTop === true) {
            this.isTop = false;
            AppDispatcher.handleViewAction({
                actionType: Constants.EXPLENATION_SCROLL_MIDDLE,
            });
        }
    }

    componentDidMount() {
        element = ReactDOM.findDOMNode(this.refs["panelExplenation"]);
        element.scrollTop = 0;
        element.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        AppDispatcher.handleViewAction({
            actionType: Constants.EXPLENATION_SCROLL_RESET,
        });
        element.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return render();
    }
}

export =  React.createFactory(View);
