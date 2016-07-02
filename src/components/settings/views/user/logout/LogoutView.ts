import React = require('react');
import CommonCss = require('../CommonCss');
const {div} = React.DOM;
import HomeStore = require('../../../../../stores/home/HomeStore');
import ButtonView = require('../../../../button/ButtonView')
import AppDispatcher = require('../../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../../constants/Constants');
import dictionary = require('../../../../../utils/dictionary');
import utils = require('../../../../../utils/utils');


function getLogOut(props: Props) {

    const buttonLogOut = ButtonView({
        name: dictionary.LOG_OUT,
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        onClick: function () {
            AppDispatcher.handleViewAction({
                actionType: Constants.LOGOUT
            });
        }
    });

    return div({ style: CommonCss.getBox() },
        div({ style: CommonCss.getBoxSplit() },
            CommonCss.makeBoxLine(dictionary.LOGEDIN_AS + ' ' + props.user.name, buttonLogOut)
        )
    );
}


const props = HomeStore.getStateHome();
declare type Props = typeof props;

function render() {

    const props = HomeStore.getStateHome();
    if (!props.login.success) {
        return null;
    }

    return div({
        style: CommonCss.getPanel()
    },
        div({
            style: CommonCss.getContainer()
        }, getLogOut(props))
    );
}

export = render;