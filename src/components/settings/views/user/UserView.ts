import React = require('react');
import UserCss = require('./UserCss');
const {div} = React.DOM;
import LogoutView = require('./logout/LogoutView');
import RegisteringView = require('./registering/RegisteringView');
import LoginView = require('./login/LoginView');
import SubscribingView = require('./subscribing/SubscribingView');
import InfosView = require('./infos/InfosView')
import DonateView = require('./donate/DonateView');
import StatisticsView = require('./statistics/StatisticsView');



function render() {
    return div({
        style: UserCss.getPanel()
    },
        LogoutView(),
        LoginView(),
        RegisteringView(),
        StatisticsView(),
        SubscribingView(),
        InfosView(),
        DonateView()
    );
}

export = render;
