import React = require('react');
import MenuCss = require('./MenuCss');
import _ = require('underscore');
import ButtonView = require('../../button/ButtonView')
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
const {div} = React.DOM;

interface Item {
    id: string, name: string, icon?: string, onClick: Function
}


const prev = [{
    id: 'prev',
    icon: 'icon-left-open',
    onClick: function () {
        AppDispatcher.handleViewAction({
            actionType: Constants.BOARD_PREV
        })
    }
}];

const next = [{
    id: 'next',
    icon: 'icon-right-open',
    onClick: function () {
        AppDispatcher.handleViewAction({
            actionType: Constants.BOARD_NEXT
        })
    }
}];


function render(items?: Item[]) {
    items = items || [];
    items = [].concat(prev, items, next);

    const buttons = items.map(function (item: Item) {
        return div({
            key: item.id,
            style: MenuCss.getItem()
        }, ButtonView({
            name: item.name,
            icon: item.icon,
            isExpandWidth: true,
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            onClick: item.onClick,
            isQuickClick: true
        }));
    });

    return div({
        style: MenuCss.getPanel()
    }, buttons);
};

export =  render;
