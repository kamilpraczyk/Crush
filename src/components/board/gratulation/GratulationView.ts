import React = require('react');
import dictionary = require('../../../utils/dictionary');
import GratulationCss = require('./GratulationCss');
import _ = require('underscore');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import BoardStore = require('../../../stores/board/BoardStore');
import ButtonView = require('../../../components/button/ButtonView');
const {div, form, input, img} = React.DOM;

function getPayPal() {
    return form({
        action: "https://www.paypal.com/cgi-bin/webscr",
        method: "post",
        target: "_top"
    }, input({
        type: "hidden",
        name: "cmd",
        value: "_s-xclick"
    }),
        input({
            type: "hidden",
            name: "hosted_button_id",
            value: "HRQXPU6JQB8MS"
        }),
        input({
            style : GratulationCss.getPayPal(),
            type: 'submit',
            value: dictionary.BUY_ME_A_BEER()
        }),
        img({
            alt: "",
            src: "https://www.paypalobjects.com/en_GB/i/scr/pixel.gif",
            width: "1",
            height: "1"
        })
    )
}


function render() {
    const state = BoardStore.getPoints();
    if (!state.points.isFinished) {
        return null;
    }

    function getTitle() {
        return div({
            style: GratulationCss.getText()
        }, dictionary.GRATULATIONS_TITLE());
    };

    function getText() {
        return div({
            style: GratulationCss.getText()
        }, dictionary.GRATULATIONS_TEXT({ score: state.points.scorePercent }));
    };

    function getButtonContinue() {
        return ButtonView({
            name: dictionary.GRATULATIONS_BUTTON(),
            isResponsibleHeight: true,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.GREETINGS_CONTINUE
                });
            }
        });
    };

    function getFooter() {

        function getText() {
            return div({
                style: GratulationCss.getText()
            }, dictionary.DID_I_HELP_YOU_OUT());
        }

        return div({
            style: GratulationCss.getFooter()
        }, getText(), getPayPal());
    };

    function getContent() {
        return div({
            style: GratulationCss.getContent()
        }, getTitle(), getText(), getButtonContinue());
    };


    function getPanel() {
        return div({
            style: GratulationCss.getPanel()
        }, getContent(), getFooter());
    };

    return getPanel();
}

export = render;