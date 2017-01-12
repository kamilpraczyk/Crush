import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import { getState, APIState } from '../../../../../services';
import utils = require('../../../../../utils/utils');
import { getDefaultUser } from '../../../../../lessons/helper/constants';
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


function getEmail(apiState: APIState, state: State, setState: SetState) {
    return input({
        type: 'text',
        style: CommonCss.getBoxInput(),
        value: state.email,
        disabled: apiState.pass.login.process,
        onChange: (e: any) => {
            state.email = utils.removeInvalidChars(e.target.value);
            setState(state);
        }
    });
}

function getPassword(apiState: APIState, state: State, setState: SetState) {
    return input({
        type: 'password',
        style: CommonCss.getBoxInput(),
        value: state.password,
        disabled: apiState.pass.login.process,
        onChange(e: any) {
            state.password = utils.removeInvalidChars(e.target.value);
            setState(state);
        },
        onKeyPress(e: any) {
            if (e.key == 'Enter') handleLogIn(state, setState);
        }
    });
}


function getButtonSubmit(apiState: APIState, state: State, setState: SetState) {
    return ButtonView({
        name: dictionary.SUBMIT_BUTTON_LOGIN,
        isResponsibleCenter: true,
        isLoader: apiState.pass.login.process,
        disabled: apiState.pass.login.process || !state.email || !state.password ? true : false,
        onClick: () => handleLogIn(state, setState)
    });
}

function getStatusText(apiState: APIState, state: State) {
    return apiState.pass.login.error || null;
}

function getLogin(apiState: APIState, state: State, setState: SetState) {

    return div({
        style: CommonCss.getBox()
    },
        div({ style: CommonCss.getBoxSplit() },
            div({ style: CommonCss.getBoxLine() },
                CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(apiState, state, setState)),
                CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(apiState, state, setState))
            ),
            div({ style: CommonCss.getBoxLine(true) },
                getStatusText(apiState, state)
            ),
            div({ style: CommonCss.getBoxLineRight() },
                getButtonSubmit(apiState, state, setState)
            )
        )
    );
}

function render(apiState: APIState, state: State, setState: SetState) {
    if (apiState.pass.login.success || apiState.pass.register.show) return null;

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    }, getLogin(apiState, state, setState)));
}

interface State {
    email: string,
    password: string
}

declare type SetState = (state: State) => void;

class View extends React.Component<void, State>{

    constructor() {
        super();
        const defaultUser = getDefaultUser(getState());
        this.state = {
            email: defaultUser.email,
            password: defaultUser.password
        };
    }

    render() {
        const state: State = this.state;
        const apiState = getState();
        return render(apiState, state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);