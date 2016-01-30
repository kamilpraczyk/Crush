import React = require('react');
import ReactDOM = require('react-dom');
import DrawCss = require('./DrawCss');
import BoardStore = require('../../../stores/board/BoardStore');
import DrawActions = require('./DrawActions');
import Signature = require('../../signature/index');
import MenuView = require('./MenuView');

function getState() {
    return {
        data: BoardStore.getData()
    }
}

interface DrawViewPropsFace {
}

interface DrawViewStateFace {
    data: any
}

class DrawView extends React.Component<DrawViewPropsFace, DrawViewStateFace>{

    public signatureClear = null as Function;

    constructor(props: DrawViewPropsFace) {
        super(props)
        this.state = getState();
        this.onChange = this.onChange.bind(this);
        this.onGetInterfaceClear = this.onGetInterfaceClear.bind(this);
        this.clearSignature = this.clearSignature.bind(this);
    }

    onChange() {
        console.log('change draw view!!!');
        this.setState(getState())
        this.clearSignature();
    }

    public componentDidMount() {
        BoardStore.addChangeListener(this.onChange);
    }

    public componentWillUnmount() {
        BoardStore.removeChangeListener(this.onChange);
    }

    clearSignature() {
        this.signatureClear && this.signatureClear();
    }

    getMenu() {

        let menu = [
            {
                id: 'prev',
                name: 'prev',
                onClick: DrawActions.requestPrev
            },
            {
                id: 'clear',
                name: 'clear',
                onClick: this.clearSignature
            },
            {
                id: 'next',
                name: 'next',
                onClick: DrawActions.requestNext
            }
        ];


        return React.DOM.div({
            style: DrawCss.getMenu(),
        }, MenuView({
            menu: menu
        }))
    }

    getText() {
        return React.DOM.div({
            style: DrawCss.getText()
        }, this.state.data.name)
    }

    onGetInterfaceClear(onClear: Function) {
        this.signatureClear = onClear;
    }

    getSignature() {
        return React.DOM.div({
            style: DrawCss.getSignature(),
        }, Signature({
            onGetInterface: this.onGetInterfaceClear
        }));
    }

    public render() {
        return React.DOM.div({
            style: DrawCss.getPanel()
        }, this.getSignature(), this.getText(), this.getMenu());
    }
};

export =  React.createFactory(DrawView);
