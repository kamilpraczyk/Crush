
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import {getState} from '../../../../../services';
import utils = require('../../../../../utils/utils');
import {defaultUser} from '../../../../../lessons/helper/constants';
import {events} from '../../../../../events';
const {div, input, label} = React.DOM;

function handleLogIn(state: State, setState: SetState) {
    events.onLogin.publish({
        email: state.email,
        password: state.password
    });
    state.password = '';
    setState(state);

}


function getEmail(props: Props, state: State, setState: SetState) {
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

function getPassword(props: Props, state: State, setState: SetState) {
    return input({
        type: 'password',
        style: CommonCss.getBoxInput(),
        value: state.password,
        disabled: props.pass.login.process,
        onChange: (e: any) => {
            state.password = utils.removeInvalidChars(e.target.value);
            setState(state);
        },
        onKeyPress: (e: any) => {
            if (e.key == 'Enter') {
                handleLogIn(state, setState);
            }
        }
    });
}


function getButtonSubmit(props: Props, state: State, setState: SetState) {
    return ButtonView({
        name: dictionary.SUBMIT_BUTTON_LOGIN,
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        isLoader: props.pass.login.process,
        disabled: props.pass.login.process || !state.email || !state.password ? true : false,
        onClick: () => {
            handleLogIn(state, setState);
        }
    });
}

function getStatusText(props: Props, state: State) {
    if (props.pass.login.error) {
        return props.pass.login.error;
    }
    return null;
}

function getLogin(props: Props, state: State, setState: SetState) {

    return div({
        style: CommonCss.getBox()
    },
        div({ style: CommonCss.getBoxSplit() },
            div({ style: CommonCss.getBoxLine() },
                CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(props, state, setState))
            ),
            div({ style: CommonCss.getBoxLine(true) },
                getStatusText(props, state)
            ),
            div({ style: CommonCss.getBoxLineRight() },
                getButtonSubmit(props, state, setState)
            )
        )
    );
}

function render(props: Props, state: State, setState: SetState) {
    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    }, getLogin(props, state, setState)));
}

interface State {
    email: string,
    password: string
}


const getProps = function () {
    return {
        pass: getState().pass.getStatus()
    }
};
const p = getProps();
declare type Props = typeof p;
declare type SetState = (state: State) => void;

class View extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = {
            email: defaultUser.email,
            password: defaultUser.password
        };
    }

    render() {
        const props = getProps();

        if (props.pass.login.success || props.pass.register.show) {
            return null;
        }

        const state: State = this.state;
        return render(props, state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);