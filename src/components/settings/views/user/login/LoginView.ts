
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import { getState } from '../../../../../services';
import utils = require('../../../../../utils/utils');
import { defaultUser } from '../../../../../lessons/helper/constants';
import { events } from '../../../../../events';
const {div, input, label} = React.DOM;

function handleLogIn(state: State, setState: SetState) {
    events.onLogin.publish({
        email: state.email,
        password: state.password
    });
    state.password = '';
    setState(state);
}




function render(state: State, setState: SetState) {
    const props = getState();
    if (props.pass.login.success || props.pass.register.show) return null;

    function getEmail(state: State, setState: SetState) {
        return input({
            type: 'text',
            style: CommonCss.getBoxInput(),
            value: state.email,
            disabled: props.pass.login.process,
            onChange: (e: any) => {
                state.email = utils.removeInvalidChars(e.target.value);
                setState(state);
            }
        });
    }

    function getPassword(state: State, setState: SetState) {
        return input({
            type: 'password',
            style: CommonCss.getBoxInput(),
            value: state.password,
            disabled: props.pass.login.process,
            onChange(e: any) {
                state.password = utils.removeInvalidChars(e.target.value);
                setState(state);
            },
            onKeyPress(e: any) {
                if (e.key == 'Enter') handleLogIn(state, setState);
            }
        });
    }


    function getButtonSubmit(state: State, setState: SetState) {
        return ButtonView({
            name: dictionary.SUBMIT_BUTTON_LOGIN,
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            isLoader: props.pass.login.process,
            disabled: props.pass.login.process || !state.email || !state.password ? true : false,
            onClick: () => handleLogIn(state, setState)
        });
    }

    function getStatusText(state: State) {
        return props.pass.login.error || null;
    }

    function getLogin(state: State, setState: SetState) {

        return div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplit() },
                div({ style: CommonCss.getBoxLine() },
                    CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(state, setState)),
                    CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(state, setState))
                ),
                div({ style: CommonCss.getBoxLine(true) },
                    getStatusText(state)
                ),
                div({ style: CommonCss.getBoxLineRight() },
                    getButtonSubmit(state, setState)
                )
            )
        );
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    }, getLogin(state, setState)));
}

interface State {
    email: string,
    password: string
}


declare type SetState = (state: State) => void;

class View extends React.Component<void, State>{

    constructor() {
        super();
        this.state = {
            email: defaultUser.email,
            password: defaultUser.password
        };
    }

    render() {
        const state: State = this.state;
        return render(state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);