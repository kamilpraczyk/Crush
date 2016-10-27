/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
const {div, label, input} = React.DOM;
import utils = require('../../../../../utils/utils');
import {defaultUser} from '../../../../../lessons/helper/constants';
import {getState} from '../../../../../services';
import {events} from '../../../../../events';

interface State {
    user: {
        name: string,
        email: string,
        password: string,
        retypePassword: string
    }
}



function getToggleRegister(props: Props, state: State) {
    return ButtonView({
        name: props.pass.register.show ? dictionary.BACK : dictionary.GO_REGISTERING,
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        leftIcon: props.pass.register.show ? CommonCss.icons.left : '',
        onClick: () => events.onToogleRegisterView.publish()
    });
}

function getName(props: Props, state: State, setState: (s: State) => void) {
    return input({
        type: 'text',
        style: CommonCss.getBoxInput(),
        value: state.user.name,
        disabled: props.pass.register.process,
        onChange(e: any) {
            state.user.name = utils.removeInvalidChars(e.target.value)
            setState({ user: state.user });
        }
    });
}

function getEmail(props: Props, state: State, setState: (s: State) => void) {
    return input({
        type: 'text',
        style: CommonCss.getBoxInput(),
        value: state.user.email,
        disabled: props.pass.register.process,
        onChange(e: any) {
            state.user.email = utils.removeInvalidChars(e.target.value);
            setState({ user: state.user });
        }
    })
}

function getPassword(props: Props, state: State, setState: (s: State) => void) {
    return input({
        type: 'password',
        style: CommonCss.getBoxInput(),
        value: state.user.password,
        disabled: props.pass.register.process,
        onChange(e: any) {
            state.user.password = utils.removeInvalidChars(e.target.value);
            setState({ user: state.user });
        }
    })
}

function getRetypePassword(props: Props, state: State, setState: (s: State) => void) {
    return input({
        type: 'password',
        style: CommonCss.getBoxInput(),
        value: state.user.retypePassword,
        disabled: props.pass.register.process,
        onChange(e: any) {
            state.user.retypePassword = utils.removeInvalidChars(e.target.value);
            setState({ user: state.user });
        }
    })
}

function getButtonSubmit(props: Props, state: State, setState: (s: State) => void) {
    return ButtonView({
        name: dictionary.SUBMIT_BUTTON_REGISTERING,
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        disabled: props.pass.register.process,
        isLoader: props.pass.register.process,
        onClick: () => events.onRegisterOnServer.publish(state.user)
    });
}

function getStatusText(props: Props, state: State) {
    if (props.pass.register.error) {
        return props.pass.register.error;
    }
    return null;
}

function render(props: Props, state: State, setState: (s: State) => void) {

    let box: any = null;
    if (props.pass.register.show && !props.pass.register.success) {
        box = div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplit() },
                CommonCss.makeBoxLine(dictionary.NAME, getName(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.RETYPE_PASSWORD, getRetypePassword(props, state, setState))
            ),
            div({ style: CommonCss.getBoxLine(true) },
                getStatusText(props, state)
            ),
            div({ style: CommonCss.getBoxLineRight() },
                getButtonSubmit(props, state, setState)
            )
        );
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getToggleRegister(props, state),
        box
    ));
}

const p = getState();
declare type Props = typeof p;

class View extends React.Component<{}, State>{

    constructor() {
        super();
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
        const props = getState();
        if (props.pass.login.success) return null;

        if (props.pass.register.success) {
            this.state.user.email = null;
            this.state.user.name = null;
            this.state.user.password = null;
            this.state.user.retypePassword = null;
        }

        return render(props, this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);