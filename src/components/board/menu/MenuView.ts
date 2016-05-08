import React = require('react');
import MenuCss = require('./MenuCss');
import _ = require('underscore');
import ButtonView = require('../../button/ButtonView')
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuActions = require('./MenuActions');
const {div} = React.DOM;

interface Item {
    id: string, name: string, icon?: string, onClick: Function
}


let prev = [{
    id: 'prev',
    icon: 'icon-left-open',
    onClick: MenuActions.requestPrev
}];

let next = [{
    id: 'next',
    icon: 'icon-right-open',
    onClick: MenuActions.requestNext
}];

function getState(data: any) {
    const menu = data && data.menu ? data.menu : [];
    return {
        menu: [].concat(prev, menu, next) as Item[]
    };
}

const state = getState(null);
declare type State = typeof state;

class View extends React.Component<State, State>{

    constructor(data: State) {
        super();
        this.state = getState(data);
    }

    render() {
        let buttons = this.state.menu.map(function (item: Item) {
            return div({
                key: item.id,
                style: MenuCss.getItem()
            }, ButtonView({
                name: item.name,
                icon: item.icon,
                isExpandWidth: true,
                isResponsibleHeight : true,
                onClick: item.onClick,
                isQuickClick: true
            }));
        });

        return div({
            style: MenuCss.getPanel()
        }, buttons);
    }
};

export =  React.createFactory(View);
