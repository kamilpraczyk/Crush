import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../button/ButtonView')
import dictionary = require('../../../../../utils/dictionary');
import { getHumanizedDate } from '../../../../../utils/utils';
import { getState } from '../../../../../services';
import { events } from '../../../../../events';
const {div} = React.DOM;

function render() {

    const state = getState();
    if (!state.pass.login.success) return null;

    function getButtonLogOut() {
        return ButtonView({
            name: dictionary.LOG_OUT,
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            onClick: () => events.onLogOut.publish()
        });
    }

    function getLogOut() {
        return div({ style: CommonCss.getBox() },
            div({ style: CommonCss.getBoxSplit() },

                div({ style: CommonCss.getBoxLine() },
                    dictionary.LOGEDIN_AS + ' ' + state.pass.user.name
                ),
                div({ style: CommonCss.getBoxLine() },
                    state.pass.user.last_login ? dictionary.LAST_LOGIN + ' ' + getHumanizedDate(state.pass.user.last_login) : null
                )
            ),
            div({ style: CommonCss.getBoxSplit() }, getButtonLogOut())
        );
    }

    return div({
        style: CommonCss.getPanel()
    },
        div({ style: CommonCss.getContainer() }, getLogOut())
    );
}

export = render;
