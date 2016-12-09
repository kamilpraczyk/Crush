/// <reference path="../../../../../../typings/tsd.d.ts" />
import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import ButtonView = require('../../../../../components/button/ButtonView');
import utils = require('../../../../../utils/utils');
import { defaultUser } from '../../../../../lessons/helper/constants';
import { getState } from '../../../../../services';
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

function render(state: State, setState: SetState) {


    const props = getState();
    if (props.pass.login.success) return null;

    if (props.pass.register.success) {
        this.state.user.email = null;
        this.state.user.name = null;
        this.state.user.password = null;
        this.state.user.retypePassword = null;
    }


    function getBox() {
        if (props.pass.register.show && !props.pass.register.success) {
            return div({
                style: CommonCss.getBox()
            },
                div({ style: CommonCss.getBoxSplit() },
                    CommonCss.makeBoxLine(dictionary.NAME, getName(state, setState)),
                    CommonCss.makeBoxLine(dictionary.EMAIL, getEmail(state, setState)),
                    CommonCss.makeBoxLine(dictionary.PASSWORD, getPassword(state, setState)),
                    CommonCss.makeBoxLine(dictionary.RETYPE_PASSWORD, getRetypePassword(state, setState))
                ),
                div({ style: CommonCss.getBoxLine(true) },
                    getStatusText()
                ),
                div({ style: CommonCss.getBoxLineRight() },
                    getButtonSubmit(state)
                )
            );
        }
        return null;
    }

    function getToggleRegister() {
        return ButtonView({
            name: props.pass.register.show ? dictionary.BACK : dictionary.GO_REGISTERING,
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            leftIcon: props.pass.register.show ? CommonCss.icons.left : '',
            onClick: () => events.onToogleRegisterView.publish()
        });
    }

    function getName(state: State, setState: SetState) {
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

    function getEmail(state: State, setState: SetState) {
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

    function getPassword(state: State, setState: SetState) {
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

    function getRetypePassword(state: State, setState: SetState) {
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

    function getButtonSubmit(state: State) {
        return ButtonView({
            name: dictionary.SUBMIT_BUTTON_REGISTERING,
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            disabled: props.pass.register.process,
            isLoader: props.pass.register.process,
            onClick: () => events.onRegisterOnServer.publish(state.user)
        });
    }

    function getStatusText() {
        return props.pass.register.error;
    }

    return div({
        style: CommonCss.getPanel()
    }, div({
        style: CommonCss.getContainer()
    },
        getToggleRegister(),
        getBox()
    ));
}


class View extends React.Component<void, State>{

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
        return render(this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);