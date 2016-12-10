import React = require('react');
import MenuCss = require('./MenuCss');
import _ = require('underscore');
import ButtonView = require('../../button/ButtonView');
import ProgressView = require('./progress/ProgressView');
import { getState, APIState } from '../../../services';
import { events } from '../../../events';
const {div} = React.DOM;

interface Item {
    id: string, name?: string, icon?: string, onClick: () => void
}


const prev: Item[] = [{
    id: 'prev',
    icon: MenuCss.icons.left,
    onClick: () => events.onPrevBoard.publish()
}];

const next: Item[] = [{
    id: 'next',
    icon: MenuCss.icons.right,
    onClick: () => events.onNextBoard.publish()
}];


const nextRandom: Item[] = [{
    id: 'nextrandom',
    icon: MenuCss.icons.random,
    onClick: () => events.onNextRandomBoard.publish()
}];


function getMenuButton(apiState: APIState) {

    const points = apiState.lessonsCatalog.current.points;

    function getIcon() {
        if (points.isCurrentSuccess)
            return MenuCss.getClassNameIconSuccess();
        if (points.isCurrentFail)
            return MenuCss.getClassNameIconFail();
        return MenuCss.getClassNameIconUnknown();
    }

    function getIconColour() {
        if (points.isCurrentSuccess)
            return MenuCss.font.color.success;
        if (points.isCurrentFail)
            return MenuCss.font.color.fail;
        return null;
    }

    return div({
        style: MenuCss.getMenuItem()
    },
        ButtonView({
            name: points.display,
            leftIcon: getIcon(),
            letfIconColour: getIconColour(),
            isExpandWidth: true,
            isResponsibleHeight: true,
            isResponsibleCenter: true,
            isQuickClick: true,
            onClick: () => events.showRootMenu.publish()
        })
    );
}

function render(items?: Item[]) {
    const apiState = getState();
    items = items || [];
    items = [].concat(items, prev, next, nextRandom);

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
        },
            buttons,
            getMenuButton(apiState)
        ),
        div({
            style: MenuCss.getProgress()
        },
            ProgressView()
        )
    );
};

export =  render;
