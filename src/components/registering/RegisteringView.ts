
/// <reference path="../../../typings/tsd.d.ts" />
import dictionary = require('../../utils/dictionary');
import React = require('react');
import RegisteringCss = require('./RegisteringCss');
import ButtonView = require('../../components/button/ButtonView');
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import HomeStore = require('../../stores/home/HomeStore');
const {div, label, input} = React.DOM;
import Matchers = require('./Matchers');
import LoaderView = require('../loader/LoaderView');

interface State {
    message?: string,
    processing?: boolean,
    user?: {
        name: string,
        email: string,
        password: string,
        retypePassword: string
    }
}

function getTitle(state: State) {
    let loader: any = null;
    if (state.processing) {
        loader = LoaderView();
    }
    return div({
        style: RegisteringCss.getText()
    }, state.message, loader);
}

function getName(state: State, setState: (s: State) => void) {
    return div({
        style: RegisteringCss.getLine()
    }, label({
        style: RegisteringCss.getLabel()
    }, dictionary.REGISTERING_NAME()), input({
        type: 'text',
        style: RegisteringCss.getInput(),
        value: state.user.name,
        disabled: state.processing,
        onChange: function (e: any) {
            state.user.name = e.target.value
            setState({ user: state.user });
        }
    }));
}

function getEmail(state: State, setState: (s: State) => void) {
    return div({
        style: RegisteringCss.getLine()
    }, label({
        style: RegisteringCss.getLabel()
    }, dictionary.REGISTERING_EMAIL()), input({
        type: 'text',
        style: RegisteringCss.getInput(),
        value: state.user.email,
        disabled: state.processing,
        onChange: function (e: any) {
            state.user.email = e.target.value;
            setState({ user: state.user });
        }
    }));
}

function getPassword(state: State, setState: (s: State) => void) {
    return div({
        style: RegisteringCss.getLine()
    }, label({
        style: RegisteringCss.getLabel()
    }, dictionary.REGISTERING_PASSWORD()), input({
        type: 'password',
        style: RegisteringCss.getInput(),
        value: state.user.password,
        disabled: state.processing,
        onChange: function (e: any) {
            state.user.password = e.target.value;
            setState({ user: state.user });
        }
    }));
}

function getRetypePassword(state: State, setState: (s: State) => void) {
    return div({
        style: RegisteringCss.getLine()
    }, label({
        style: RegisteringCss.getLabel()
    }, dictionary.REGISTERING_RETYPE_PASSWORD()), input({
        type: 'password',
        style: RegisteringCss.getInput(),
        value: state.user.retypePassword,
        disabled: state.processing,
        onChange: function (e: any) {
            state.user.retypePassword = e.target.value;
            setState({ user: state.user });
        }
    }));
}

function getButton(state: State, setState: (s: State) => void) {
    return ButtonView({
        name: dictionary.REGISTERING_BUTTON_REGISTER(),
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        onClick: function () {
            Matchers.validate(state.user).then((e) => {
                setState({
                    message: dictionary.REGISTERING_PROCESS(),
                    processing: true
                });
                AppDispatcher.handleViewAction({
                    actionType: Constants.REGISTER_ON_SERVER,
                    user: state.user
                });
            }).catch((err: Error) => {
                setState({
                    message: err.message
                });
            });
        }
    });
}

function render(state: State, setState: (s: State) => void) {

    const props = HomeStore.getStateHome();

    if (!props.isRegistering) {
        return div({});
    }

    return div({
        style: RegisteringCss.getPanel()
    }, div({
        style: RegisteringCss.getContainer()
    },
        getTitle(state),
        getName(state, setState),
        getEmail(state, setState),
        getPassword(state, setState),
        getRetypePassword(state, setState),
        getButton(state, setState))
    );
}

class View extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = {
            message: dictionary.REGISTERING_TITLE(),
            processing: false,
            user: {
                name: 'kamil',
                email: 'kamil.praczyk@gmail.com',
                password: 'kamil',
                retypePassword: 'kamil'
            }
        };
    }

    render() {
        return render(this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);