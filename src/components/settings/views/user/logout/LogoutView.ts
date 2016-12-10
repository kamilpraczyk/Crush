import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../button/ButtonView')
import dictionary = require('../../../../../utils/dictionary');
import { getHumanizedDate } from '../../../../../utils/utils';
import { getState, APIState } from '../../../../../services';
import { events } from '../../../../../events';
const {div} = React.DOM;

function getButtonLogOut() {
    return ButtonView({
        name: dictionary.LOG_OUT,
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        onClick: () => events.onLogOut.publish()
    });
}

function getLogOut(apiState: APIState) {
    return div({ style: CommonCss.getBox() },
        div({ style: CommonCss.getBoxSplit() },

            div({ style: CommonCss.getBoxLine() },
                dictionary.LOGEDIN_AS + ' ' + apiState.pass.user.name
            ),
            div({ style: CommonCss.getBoxLine() },
                apiState.pass.user.last_login ? dictionary.LAST_LOGIN + ' ' + getHumanizedDate(apiState.pass.user.last_login) : null
            )
        ),
        div({ style: CommonCss.getBoxSplit() }, getButtonLogOut())
    );
}

function render() {

    const apiState = getState();
    if (!apiState.pass.login.success) return null;

    return div({
        style: CommonCss.getPanel()
    },
        div({ style: CommonCss.getContainer() },
            getLogOut(apiState)
        )
    );
}

export = render;
