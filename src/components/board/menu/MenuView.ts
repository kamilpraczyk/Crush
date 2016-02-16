import React = require('react');
import MenuCss = require('./MenuCss');
import _ = require('underscore');
import ButtonView = require('../../button/ButtonView')
const {div} = React.DOM;


interface MenuStateFace {
    menu: Array<{ id: string, name: string, icon?:string, onClick: Function }>
}

class MenuView extends React.Component<{}, MenuStateFace>{

    constructor(data: MenuStateFace) {
        super();
        this.state = data;
    }

    public render() {
        let buttons = [] as any;
        _.each(this.state.menu, function(item): any {          
            buttons.push(div({
                key: item.id,
                style: MenuCss.getItem()
            }, ButtonView({
                name: item.name,
                icon : item.icon,
                isExpandWidth: true,
                onClick: item.onClick
            })));
        }, this);
        return div({
            style: MenuCss.getPanel()
        }, buttons);
    }
};

export =  React.createFactory(MenuView);
