import React = require('react');
import ExplenationCss = require('./ExplenationCss');
const {div} = React.DOM;
import BoardStore = require('../../../../stores/board/BoardStore');
import utils = require('../../../../utils/utils');
import ButtonView = require('../../../button/ButtonView');
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import dictionary = require('../../../../utils/dictionary');

function render() {
    const state = BoardStore.getExplenation();
    if (state.isVisible && state.explenation) {


        const title = div({
            style: ExplenationCss.getTitle(),
            onClick: () => utils.voice.read(state.title)
        }, state.title);

        const buttonGoPractice = ButtonView({
            name: dictionary.GO_TEST,
            onClick: () => {
                AppDispatcher.handleViewAction({
                    actionType: Constants.GO_TEST
                });
            },
            isExpandWidth: true
        });

        const body = div({
            style: ExplenationCss.getBody()
        },
            div({
                style: ExplenationCss.getBodyContent()
            },
                state.explenation.exp
            ),
            buttonGoPractice

        );

        return div({
            style: ExplenationCss.getPanel()
        }, title, body);

    }
    return null;
};

export =  render;
