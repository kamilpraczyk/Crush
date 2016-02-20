/// <reference path="../../../../typings/tsd.d.ts" />
import _ = require('underscore');
import MenuActions = require('./MenuActions');
import React = require('react');
import AppDispatcher = require('../../../dispatcher/AppDispatcher');
import Constants = require('../../../constants/Constants');
import MenuView = require('../menu/MenuView');
const {div} = React.DOM;

function createButtons(list: any[]) {
    let prev = [{
        id: 'prev',
        icon: 'icon-left-open',
        onClick: MenuActions.requestPrev
    }]
    let next = [{
        id: 'next',
        icon: 'icon-right-open',
        onClick: MenuActions.requestNext
    }]

    return [].concat(prev, list, next);
}

function createMenu(list = [] as any[]) {
    return MenuView({
        menu: createButtons(list)
    })
}
export =  createMenu;
