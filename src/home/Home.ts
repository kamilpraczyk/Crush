import React = require('react');
import ReactDOM = require('react-dom');
import Layout = require('./layout/Layout')
import utils = require('../utils/utils');
import { renderEvent } from '../events';
class Home {

    subscribers: any[] = [];
    component: any = null;

    constructor(public el: HTMLElement) {

        utils.keys();
        this.component = ReactDOM.render(Layout(), this.el);

        this.subscribers = [
            renderEvent.subscribe(this.onChange.bind(this))
        ];
    }

    onChange() {
        console.log('render');
        this.component && this.component.setState({})
    }
}

export = Home;

