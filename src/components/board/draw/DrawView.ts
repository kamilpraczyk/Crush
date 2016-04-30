import React = require('react');
import DrawCss = require('./DrawCss');
import Signature = require('../../signature/index');
import BoardStore = require('../../../stores/board/BoardStore');
import MenuView = require('../menu/MenuView');
const {div} = React.DOM;

function getState() {
    return BoardStore.getDrawState();
}
const state = getState();
declare type State = typeof state;

class DrawView extends React.Component<{}, State>{

    signatureClear = null as Function;

    constructor() {
        super();
        this.state = getState();
        this.onGetInterfaceClear = this.onGetInterfaceClear.bind(this);
        this.clearSignature = this.clearSignature.bind(this);
    }

    componentWillReceiveProps() {
        this.setState(getState());
        this.clearSignature();
    }

    clearSignature() {
        this.signatureClear && this.signatureClear();
    }

    getMenu() {
        return div({
            style: DrawCss.getMenu(),
        }, MenuView({
            menu: [{
                id: 'clear',
                name: 'clear',
                onClick: this.clearSignature
            }]
        }))
    }

    getText() {
        return div({
            style: DrawCss.getText()
        }, this.state.lessonData.name)
    }

    onGetInterfaceClear(onClear: Function) {
        this.signatureClear = onClear;
    }

    getSignature() {
        return div({
            style: DrawCss.getSignature(),
        }, Signature({
            onGetInterface: this.onGetInterfaceClear
        }));
    }

    render() {
        return div({
            key: 'drawView',
            style: DrawCss.getPanel()
        }, this.getSignature(), this.getText(), this.getMenu());
    }
};

export =  React.createFactory(DrawView);
