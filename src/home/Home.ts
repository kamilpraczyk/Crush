
import React = require('react');
import ReactDOM = require('react-dom');
import components = require('../components/components');
import Layout = require('./layout/Layout')


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

        this.layout = Layout({
            onComponentDidMount: this.onComponentDidMount
        });
        ReactDOM.render(this.layout, this.el);
    }

    onComponentDidMount(regions: any) {
        this.boardRegion = regions.boardRegion;
        this.settingsRegion = regions.settingsRegion;
        this.greetingsRegion = regions.greetingsRegion;
       // this.showGreetings();
        this.showSettings();
    }

    showGreetings() {
        ReactDOM.render(components.GreetingsView({
            name: '',
            onClick: this.showSettings
        }), this.greetingsRegion);
    }

    showSettings() {
        ReactDOM.unmountComponentAtNode(this.greetingsRegion);
        ReactDOM.render(components.SettingsRootView({
            rootList: []
        }), this.settingsRegion);
    }
     
    showBoard(){
        
    }



}

export = Home;

