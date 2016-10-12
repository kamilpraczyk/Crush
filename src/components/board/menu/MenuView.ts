import React = require('react');
import MenuCss = require('./MenuCss');
import _ = require('underscore');
import ButtonView = require('../../button/ButtonView');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import ProgressView = require('./progress/ProgressView');
const {div} = React.DOM;

interface Item {
    id: string, name?: string, icon?: string, onClick: () => void
}

const prev: Item[] = [{
    id: 'prev',
    icon: MenuCss.icons.left,
    onClick() {
        AppDispatcher.handleViewAction({
            actionType: Constants.BOARD_PREV
        })
    }
}];

const next: Item[] = [{
    id: 'next',
    icon: MenuCss.icons.right,
    onClick() {
        AppDispatcher.handleViewAction({
            actionType: Constants.BOARD_NEXT
        })
    }
}];


const nextRandom: Item[] = [{
    id: 'nextrandom',
    icon: MenuCss.icons.random,
    onClick() {
        AppDispatcher.handleViewAction({
            actionType: Constants.BOARD_NEXT_RANDOM
        })
    }
}];

function render(items?: Item[]) {
    items = items || [];
    items = [].concat(items, prev, nextRandom, next);

    const buttons = items.map(item => {
        return div({
            key: item.id,
            style: MenuCss.getMenuItem()
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
    },
        div({
            style: MenuCss.getMenu()
        }, buttons),
        div({
            style: MenuCss.getProgress()
        }, ProgressView())
    );
};

export =  render;
