import React = require('react');
import UserCss = require('./UserCss');
import LogoutView = require('./logout/LogoutView');
import RegisteringView = require('./registering/RegisteringView');
import LoginView = require('./login/LoginView');
import SubscribingView = require('./subscribing/SubscribingView');
import SubscribedView = require('./subscribed/SubscribedView');
import InfosView = require('./infos/InfosView')
import DonateView = require('./donate/DonateView');
import StatisticsView = require('./statistics/StatisticsView');
import VoicesView = require('./voices/VoicesView');
const {div} = React.DOM;


function render() {
    return div({
        style: UserCss.getPanel()
    },
        LogoutView(),
        LoginView(),
        SubscribedView(),
        RegisteringView(),
        StatisticsView(),
        SubscribingView(),
        InfosView(),
        VoicesView(),
        DonateView()
    );
}

export = render;
