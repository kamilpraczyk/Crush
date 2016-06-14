
/// <reference path="../../../typings/tsd.d.ts" />
import dictionary = require('../../utils/dictionary');
import React = require('react');
import RegisteringCss = require('./RegisteringCss');
import ButtonView = require('../../components/button/ButtonView');
import AppDispatcher = require('../../dispatcher/AppDispatcher');
import Constants = require('../../constants/Constants');
import HomeStore = require('../../stores/home/HomeStore');
const {div} = React.DOM;


function render(state: State, setState: Function) {

    const props = HomeStore.getStateHome();

    if (!props.isRegistering) {
        return div({});
    }


    function getTitle() {
        return div({
            style: RegisteringCss.getText()
        }, 'register'/*dictionary.GREET_TITLE()*/);
    }
    //TODO

    function getButton() {
        return ButtonView({
            name: dictionary.GREET_START(),
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            onClick: function () {
            //    AppDispatcher.handleViewAction({
            //        actionType: Constants.GREETINGS_SHOW_LESSONS,
            //    });
            }
        });
    };




    return div({
        style: RegisteringCss.getPanel()
    }, div({
        style: RegisteringCss.getContainer()
    }, getTitle(), getButton()));
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
