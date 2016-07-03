
/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import AppDispatcher = require('../../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../../constants/Constants');
import HomeStore = require('../../../../../stores/home/HomeStore');
import utils = require('../../../../../utils/utils');
import {defaultUser} from '../../../../../lessons/helper/constants';
const {div, input, label} = React.DOM;

function handleLogIn(state: State, setState: SetState) {
    setState({
        password: ''
    });
    AppDispatcher.handleViewAction({
        actionType: Constants.LOGIN,
        login: state.email,
        password: state.password
    });
}


function getEmail(props: Props, state: State, setState: SetState) {
    return input({
        type: 'text',
        style: CommonCss.getBoxInput(),
        value: state.email,
        disabled: props.login.process,
        onChange: (e: any) => {
            setState({
                email: utils.removeInvalidChars(e.target.value)
            })
        }
    });
}

function getPassword(props: Props, state: State, setState: SetState) {
    return input({
        type: 'password',
        style: CommonCss.getBoxInput(),
        value: state.password,
        disabled: props.login.process,
        onChange: (e: any) => {
            setState({
                password: utils.removeInvalidChars(e.target.value)
            })
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
        isLoader: props.login.process,
        disabled: props.login.process || !state.email || !state.password ? true : false,
        onClick: () => {
            handleLogIn(state, setState);
        }
    });
}

function render(props: Props, state: State, setState: SetState) {

    function getText() {
        return div({
            style: CommonCss.getText()
        }, state.message);
    };

    function getLogin() {

        return div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplit() },
                CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(props, state, setState))
            ),
            div({ style: CommonCss.getBoxSplit() },
                getButtonSubmit(props, state, setState))
        );
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    }, getText(), getLogin()));
}

interface State {
    message?: string,
    email?: string,
    password?: string
}


const p = HomeStore.getStateHome();
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
        const props = HomeStore.getStateHome();

        if (props.login.success) {
            return null;
        }

        this.state.message = dictionary.HEADER_LOGIN;
        if (props.login.error)
            this.state.message = dictionary.ERROR_LOGIN_INVALID;
        if (props.login.process) {
            this.state.message = dictionary.PLEASE_WAIT;
        }
        return render(props, this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);