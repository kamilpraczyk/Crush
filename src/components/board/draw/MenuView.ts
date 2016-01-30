import React = require('react');
import MenuCss = require('./MenuCss');
import DrawActions = require('./DrawActions');
import _ = require('underscore');
import ButtonView = require('../../button/ButtonView')



interface MenuPropsFace {
    menu: any[]
}

interface MenuStateFace { }

class MenuView extends React.Component<MenuPropsFace, MenuStateFace>{

    constructor(props: MenuPropsFace) {
        super(props)
    }

    public render() {
        let buttons = [] as any;
        _.each(this.props.menu, function(item: { id: string, name: string, onClick: Function }): any {
            buttons.push(React.DOM.div({
                key: item.id,
                style: MenuCss.getItem()
            }, ButtonView({
                name: item.name,
                isExpandWidth: true,
                onClick: item.onClick
            })));
        }, this);
        return React.DOM.div({
            style: MenuCss.getPanel()
        }, buttons);
    }
};

export =  React.createFactory(MenuView);
