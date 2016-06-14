import React = require('react');
import UserCss = require('./UserCss');
const {div} = React.DOM;
import HomeStore = require('../../../../stores/home/HomeStore');
import ButtonView = require('../../../button/ButtonView')
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');
import dictionary = require('../../../../utils/dictionary');
import utils = require('../../../../utils/utils');

function render() {
    const state = HomeStore.getStateHome();


    function getSubscribe() {
        const subscribeTextItem = div({
            style: UserCss.getItem()
        }, dictionary.SUBSCRIBE_TEXT());

        const subscribeButtonItem = div({
            style: UserCss.getItem()
        }, ButtonView({
            name: dictionary.SUBSCRIBE_BUTTON(),
            icon: UserCss.getIconSubscribe(),
            isExpandWidth: false,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.SUBSCRIBE
                });
            }
        }))

        return div({
            style: UserCss.getLine()
        }, subscribeTextItem, subscribeButtonItem);
    }

    function getExpiredSubscription() {


        const expiredText = div({
            style: UserCss.getItem()
        }, dictionary.EXPIRED_TEXT());

        const expiredButton = div({
            style: UserCss.getItem()
        }, ButtonView({
            name: dictionary.SUBSCRIBE_BUTTON(),
            icon: UserCss.getIconSubscribe(),
            isExpandWidth: false,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.REGISTER
                });
            }
        }))

        return div({
            style: UserCss.getLine()
        }, expiredText, expiredButton);
    }


    function getLogedInAs() {
        const logedInAs = div({
            style: UserCss.getItem()
        }, dictionary.LOGEDIN_AS({ name: state.user.name }));

        const daysLeft = utils.howManyDaysLeft(state.user.valid_to);

        const validTo = div({
            style: UserCss.getItem()
        }, dictionary.LOGIN_VALID({ valid: daysLeft }));


        let expired = getExpiredSubscription();
        if (daysLeft > 0) {
            expired = null;
        }

        const logOut = div({
            style: UserCss.getItem()
        }, ButtonView({
            name: dictionary.LOG_OUT(),
            isExpandWidth: false,
            onClick: function () {
                AppDispatcher.handleViewAction({
                    actionType: Constants.LOGOUT
                });
            }
        }))

        return div({
            style: UserCss.getLine()
        }, logedInAs, validTo, logOut, expired);
    }

    return div({
        style: UserCss.getPanel()
    }, state.isPrime ? getLogedInAs() : getSubscribe());

}



export = render;
