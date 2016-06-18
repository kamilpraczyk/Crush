
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
    data?: {
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
        value: state.data.name,
        disabled: state.processing,
        onChange: function (e: any) {
            state.data.name = e.target.value
            setState({ data: state.data });
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
        value: state.data.email,
        disabled: state.processing,
        onChange: function (e: any) {
            state.data.email = e.target.value;
            setState({ data: state.data });
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
        value: state.data.password,
        disabled: state.processing,
        onChange: function (e: any) {
            state.data.password = e.target.value;
            setState({ data: state.data });
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
        value: state.data.retypePassword,
        disabled: state.processing,
        onChange: function (e: any) {
            state.data.retypePassword = e.target.value;
            setState({ data: state.data });
        }
    }));
}

function getButton(state: State, setState: (s: State) => void) {
    return ButtonView({
        name: dictionary.REGISTERING_BUTTON_REGISTER(),
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        onClick: function () {
            Matchers.validate(state.data).then((e) => {
                setState({
                    message: dictionary.REGISTERING_PROCESS(),
                    processing: true
                });
                AppDispatcher.handleViewAction({
                    actionType: Constants.REGISTER_ON_SERVER,
                    state: state
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
            data: {
                name: '',
                email: '',
                password: '',
                retypePassword: ''
            }
        };
    }

    render() {
        return render(this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);