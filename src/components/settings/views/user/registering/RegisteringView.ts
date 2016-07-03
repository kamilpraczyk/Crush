/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import AppDispatcher = require('../../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../../constants/Constants');
import HomeStore = require('../../../../../stores/home/HomeStore');
const {div, label, input} = React.DOM;
import Matchers = require('./Matchers');
import utils = require('../../../../../utils/utils');
import {defaultUser} from '../../../../../lessons/helper/constants';

interface State {
    message?: string,
    user?: {
        name: string,
        email: string,
        password: string,
        retypePassword: string
    }
}

function getTitle(props: Props, state: State) {

    return ButtonView({
        name: state.message,
        isResponsibleHeight: true,
        isResponsibleCenter: true,
        leftIcon: props.register.show ? 'icon-left-open' : '',
        onClick: () => {
            AppDispatcher.handleViewAction({
                actionType: Constants.TOGGLE_REGISTER_VIEW
            });
        }
    });
}

function getName(props: Props, state: State, setState: (s: State) => void) {
    return input({
        type: 'text',
        style: CommonCss.getBoxInput(),
        value: state.user.name,
        disabled: props.register.process,
        onChange: function (e: any) {
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
        disabled: props.register.process,
        onChange: function (e: any) {
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
        disabled: props.register.process,
        onChange: function (e: any) {
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
        disabled: props.register.process,
        onChange: function (e: any) {
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
        disabled: props.register.process,
        isLoader: props.register.process,
        onClick: function () {
            Matchers.validate(state.user).then((e) => {
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

function render(props: Props, state: State, setState: (s: State) => void) {

    let content: any = null;
    let box: any = null;
    if (props.register.show) {
        box = div({
            style: CommonCss.getBox()
        },
            div({ style: CommonCss.getBoxSplit() },
                CommonCss.makeBoxLine(dictionary.NAME, getName(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(props, state, setState)),
                CommonCss.makeBoxLine(dictionary.RETYPE_PASSWORD, getRetypePassword(props, state, setState))
            ),
            div({ style: CommonCss.getBoxSplit() },
                getButtonSubmit(props, state, setState)
            )
        );
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getTitle(props, state),
        box
    ));
}

const p = HomeStore.getStateHome();
declare type Props = typeof p;

class View extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = {
            message: dictionary.HEADER_REGISTERING,
            user: {
                name: defaultUser.name,
                email: defaultUser.email,
                password: defaultUser.password,
                retypePassword: defaultUser.password
            }
        };
    }


    render() {
        const props = HomeStore.getStateHome();
        if (props.login.success) {
            return null;
        }

        if (props.register.success) {
            this.state.user.email = null;
            this.state.user.name = null;
            this.state.user.password = null;
            this.state.user.retypePassword = null;
        }

        if (props.register.process) {
            this.state.message = dictionary.PLEASE_WAIT;
        } else if (props.register.error) {
            this.state.message = props.register.error;
        } else if (props.register.success) {
            this.state.message = dictionary.SERVER_SUCCESS_REGISTERED;
        }

        if (!props.register.show) {
            this.state.message = dictionary.HEADER_REGISTERING;
        }
        return render(props, this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);