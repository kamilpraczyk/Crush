import React = require('react');
import CommonCss = require('../CommonCss');
const {div} = React.DOM;
import ButtonView = require('../../../../button/ButtonView')
import dictionary = require('../../../../../utils/dictionary');
import utils = require('../../../../../utils/utils');
import {getState} from '../../../../../services';
import {events} from '../../../../../events';

function getLogOut(props: Props) {

    const buttonLogOut = ButtonView({
        name: dictionary.LOG_OUT,
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        onClick: () => events.onLogOut.publish()
    });

    return div({ style: CommonCss.getBox() },
        div({ style: CommonCss.getBoxSplit() },

            div({ style: CommonCss.getBoxLine() },
                dictionary.LOGEDIN_AS + ' ' + props.pass.user.name
            ),
            div({ style: CommonCss.getBoxLine() },
                props.pass.user.last_login ? dictionary.LAST_LOGIN + ' ' + utils.getHumanizedDate(props.pass.user.last_login) : null
            )
        ),
        div({ style: CommonCss.getBoxSplit() }, buttonLogOut)
    );
}


const p = getState();
declare type Props = typeof p;

function render() {

    const props = getState();
    if (!props.pass.login.success) return null;


    return div({
        style: CommonCss.getPanel()
    },
        div({
            style: CommonCss.getContainer()
        }, getLogOut(props))
    );
}

export = render;
