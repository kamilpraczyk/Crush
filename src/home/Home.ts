import React = require('react');
import ReactDOM = require('react-dom');
import components = require('../components/components');
import Layout = require('./layout/Layout')
import HomeStore = require('../stores/home/HomeStore');
import utils = require('../utils/utils')


class Home {

    private layout: any;
    private boardRegion: Element;
    private settingsRegion: Element;
    private greetingsRegion: Element;

    constructor(public el: HTMLElement) {
        this.onComponentDidMount = this.onComponentDidMount.bind(this);
        this.showGreetings = this.showGreetings.bind(this);
        this.showSettings = this.showSettings.bind(this);
        this.showBoard = this.showBoard.bind(this);

        utils.keys();
        this.layout = Layout({
            onComponentDidMount: this.onComponentDidMount
        });
        ReactDOM.render(this.layout, this.el);


        this.onChange = this.onChange.bind(this);
        HomeStore.addChangeListener(this.onChange);
    }

    onChange() {
        this.showGreetings();
        this.showSettings();
        this.showBoard();
    }

    onComponentDidMount(regions: any) {
        this.boardRegion = regions.boardRegion;
        this.settingsRegion = regions.settingsRegion;
        this.greetingsRegion = regions.greetingsRegion;
        this.onChange();
    }

    showGreetings() {
        ReactDOM.render(components.GreetingsView(), this.greetingsRegion);
    }

    showSettings() {
        ReactDOM.render(components.SettingsRootView({}), this.settingsRegion);
    }

    showBoard() {
        ReactDOM.render(components.BoardView({}), this.boardRegion);
    }



}

export = Home;

