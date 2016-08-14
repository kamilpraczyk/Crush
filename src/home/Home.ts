/// <reference path="../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');
import components = require('../components/components');
import Layout = require('./layout/Layout')
import HomeStore = require('../stores/home/HomeStore');
import utils = require('../utils/utils');

class Home {

    private layout: any;
    private boardRegion: Element;
    private settingsRegion: Element;

    constructor(public el: HTMLElement) {
        this.onComponentDidMount = this.onComponentDidMount.bind(this);
        this.showSettings = this.showSettings.bind(this);
        this.showBoard = this.showBoard.bind(this);
        this.onChange = this.onChange.bind(this);

        HomeStore.addChangeListener(this.onChange);

        utils.keys();
        this.layout = Layout({
            onComponentDidMount: this.onComponentDidMount
        });
        ReactDOM.render(this.layout, this.el);
    }

    onChange() {
        this.showSettings();
        this.showBoard();
    }

    onComponentDidMount(regions: any) {
        this.boardRegion = regions.boardRegion;
        this.settingsRegion = regions.settingsRegion;

        this.onChange();
    }


    showSettings() {
        ReactDOM.render(components.SettingsRootView({}), this.settingsRegion);
    }

    showBoard() {
        ReactDOM.render(components.BoardView({}), this.boardRegion);
    }



}

export = Home;

