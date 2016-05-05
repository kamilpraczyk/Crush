import React = require('react');
import PurchaseInfoCss = require('./PurchaseInfoCss');
const {div} = React.DOM;
import BoardStore = require('../../../../stores/board/BoardStore');
import ButtonView = require('../../../button/ButtonView')
import AppDispatcher = require('../../../../dispatcher/AppDispatcher');
import Constants = require('../../../../constants/Constants');

function getState() {
    return BoardStore.getPurchaseInfoState();
}

const state = getState();
declare type State = typeof state;


function onClickSubscribe(name: string) {
    AppDispatcher.handleViewAction({
        actionType: Constants.SUBSCRIBE
    });
}

class View extends React.Component<{}, State>{

    constructor() {
        super()
        this.state = getState();
    }

    render() {
        const title = div({
            style: PurchaseInfoCss.getTitle(),
        }, 'Subscribe to get full access and unblock all lessons.');


        const subscribe = ButtonView({
            name: 'Subscribe',
            icon: 'moon-play2',
            isExpandWidth: false,
            onClick: onClickSubscribe
        })

        const body = div({
            style: PurchaseInfoCss.getBody()
        }, div({
            style: {
                padding: '10vh'
            }
        }, 'Click to ', subscribe));


        return div({
            style: PurchaseInfoCss.getPanel()
        }, title, body);

    }
};

export =  React.createFactory(View);
