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
import LoaderView = require('../../../../loader/LoaderView');
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
    let loader: any = null;
    let text = state.message;

    if (props.register.error) {
        text = props.register.error;

    } else if (props.register.success) {
        text = dictionary.SERVER_SUCCESS_REGISTERED;

    } else if (props.register.process) {
        loader = LoaderView();
        text = dictionary.PLEASE_WAIT;
    }

    return div({
        style: CommonCss.getText()
    }, text, loader);
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
    if (props.register.success) {
        content = div({
            style: CommonCss.getContainer()
        },
            getTitle(props, state)
        );
    } else {
        content = div({
            style: CommonCss.getContainer()
        },
            getTitle(props, state),
            div({
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
            ));
    }

    return div({
        style: CommonCss.getPanel()
    }, content);
}

const props = HomeStore.getStateHome();
declare type Props = typeof props;

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

        if (props.register.error) {
            this.state.message = props.register.error;
        }
        if (props.register.success) {
            this.state.message = dictionary.HEADER_REGISTERING;
            this.state.user.email = null;
            this.state.user.name = null;
            this.state.user.password = null;
            this.state.user.retypePassword = null;
        }

        return render(props, this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);