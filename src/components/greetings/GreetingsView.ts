
/// <reference path="../../../typings/tsd.d.ts" />
import dictionary = require('../../utils/dictionary');
import React = require('react');
import GreetingsCss = require('./GreetingsCss');
import ButtonView = require('../../components/button/ButtonView');
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import HomeStore = require('../../stores/home/HomeStore');
const {div, input, label} = React.DOM;


function render(state: State, setState: Function) {

    const props = HomeStore.getStateHome();

    if (!props.isGreetings) {
        return div({});
    }

    function handleLogIn() {
        AppDispatcher.handleViewAction({
            actionType: Constants.LOGIN,
            login: state.email,
            password: state.password
        });
    }

    function getTitle() {
        return div({
            style: GreetingsCss.getText()
        }, dictionary.GREET_TITLE());
    }

    function getTextHello() {
        const text = props.isInvalidLogin ? dictionary.GREET_LOGIN_INVALID() : dictionary.GREET_HELLO({ name: props.user.name });
        return div({
            style: GreetingsCss.getText()
        }, text);
    };

    function getButton() {
        return ButtonView({
            name: dictionary.GREET_START(),
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.GREETINGS_SHOW_LESSONS,
                });
            }
        });
    };


    function getLogin() {

        const email = input({
            type: 'text',
            style: GreetingsCss.getInput(),
            value: state.email,
            onChange: function (e: any) {
                setState({
                    email: e.target.value
                })
            }
        });

        const password = input({
            type: 'password',
            style: GreetingsCss.getInput(),
            value: state.password,
            onChange: function (e: any) {
                setState({
                    password: e.target.value
                })
            },
            onKeyPress: function (e: any) {
                if (e.key == 'Enter') {
                    handleLogIn();
                }
            }
        });

        const button = ButtonView({
            name: dictionary.GREET_LOGIN(),
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            disabled: !state.email || !state.password ? true : false,
            onClick: function () {
                handleLogIn();
                setState({
                    password: ''
                });
            }
        });

        return div({
            style: GreetingsCss.getLogin()
        },
            div({
                style: GreetingsCss.getLoginPart()
            },
                div({
                    style: GreetingsCss.getLoginLine()
                }, label({
                    style: GreetingsCss.getLoginLabel()
                }, dictionary.GREET_EMAIL()), email),
                div({
                    style: GreetingsCss.getLoginLine()
                }, label({
                    style: GreetingsCss.getLoginLabel()
                }, dictionary.GREET_PASSWORD()), password)
            ),
            div({
                style: GreetingsCss.getLoginPart()
            }, button)
        );
    }

    function getRegister() {
        return ButtonView({
            name: dictionary.GREET_REGISTER(),
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.REGISTER, //TODO
                });
            }
        });

    }

    return div({
        style: GreetingsCss.getPanel()
    }, div({
        style: GreetingsCss.getContainer()
    }, getTitle(), getTextHello(), getButton(), getLogin(), getRegister()));
}


interface State {
    email: string,
    password: string
}


class View extends React.Component<{}, State>{

    constructor() {
        super();
        this.state = {
            email: 'kamil.praczyk@gmail.com',
            password: 'abcd!'
        };
    }

    render() {
        return render(this.state, this.setState.bind(this));
    }
};

export =  React.createFactory(View);
