/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import { removeInvalidChars } from '../../../../../utils/utils';
import { getDefaultUser } from '../../../../../lessons/helper/constants';
import { getState, APIState } from '../../../../../services';
import { events } from '../../../../../events';
const {div, input} = React.DOM;

interface State {
    user: {
        name: string,
        email: string,
        password: string,
        retypePassword: string
    }
}

declare type SetState = (state: State) => void;


function getToggleRegister(apiState: APIState) {
    return ButtonView({
        name: apiState.pass.register.show ? dictionary.BACK : dictionary.GO_REGISTERING,
        isResponsibleCenter: true,
        leftIcon: apiState.pass.register.show ? CommonCss.icons.left : '',
        onClick: () => events.onToogleRegisterView.publish()
    });
}

function getName(apiState: APIState, state: State, setState: SetState) {
    return input({
        type: 'text',
        style: CommonCss.getBoxInput(),
        value: state.user.name,
        disabled: apiState.pass.register.process,
        onChange(e: any) {
            state.user.name = removeInvalidChars(e.target.value)
            setState({ user: state.user });
        }
    });
}

function getEmail(apiState: APIState, state: State, setState: SetState) {
    return input({
        type: 'text',
        style: CommonCss.getBoxInput(),
        value: state.user.email,
        disabled: apiState.pass.register.process,
        onChange(e: any) {
            state.user.email = removeInvalidChars(e.target.value);
            setState({ user: state.user });
        }
    })
}

function getPassword(apiState: APIState, state: State, setState: SetState) {
    return input({
        type: 'password',
        style: CommonCss.getBoxInput(),
        value: state.user.password,
        disabled: apiState.pass.register.process,
        onChange(e: any) {
            state.user.password = removeInvalidChars(e.target.value);
            setState({ user: state.user });
        }
    })
}

function getRetypePassword(apiState: APIState, state: State, setState: SetState) {
    return input({
        type: 'password',
        style: CommonCss.getBoxInput(),
        value: state.user.retypePassword,
        disabled: apiState.pass.register.process,
        onChange(e: any) {
            state.user.retypePassword = removeInvalidChars(e.target.value);
            setState({ user: state.user });
        }
    })
}

function getButtonSubmit(apiState: APIState, state: State) {
    return ButtonView({
        name: dictionary.SUBMIT_BUTTON_REGISTERING,
        isResponsibleCenter: true,
        disabled: apiState.pass.register.process,
        isLoader: apiState.pass.register.process,
        onClick: () => events.onRegisterOnServer.publish(state.user)
    });
}

function getStatusText(apiState: APIState) {
    return apiState.pass.register.error;
}

function getBox(apiState: APIState, state: State, setState: SetState) {
    if (apiState.pass.register.show && !apiState.pass.register.success) {
        return div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplit() },
                CommonCss.makeBoxLine(dictionary.NAME, getName(apiState, state, setState)),
                CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(apiState, state, setState)),
                CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(apiState, state, setState)),
                CommonCss.makeBoxLine(dictionary.RETYPE_PASSWORD, getRetypePassword(apiState, state, setState))
            ),
            div({ style: CommonCss.getBoxLine(true) },
                getStatusText(apiState)
            ),
            div({ style: CommonCss.getBoxLineRight() },
                getButtonSubmit(apiState, state)
            )
        );
    }
    return null;
}


function render(apiState: APIState, state: State, setState: SetState) {

    if (apiState.pass.login.success) return null;

    if (apiState.pass.register.success) {
        state.user.email = null;
        state.user.name = null;
        state.user.password = null;
        state.user.retypePassword = null;
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getToggleRegister(apiState),
        getBox(apiState, state, setState)
    ));
}


class View extends React.Component<void, State>{

    constructor() {
        super();
        const defaultUser = getDefaultUser(getState());
        this.state = {
            user: {
                name: defaultUser.name,
                email: defaultUser.email,
                password: defaultUser.password,
                retypePassword: defaultUser.password
            }
        };
    }

    render() {
        const apiState = getState();
        return render(apiState, this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);