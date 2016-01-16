/// <reference path="../../typings/tsd.d.ts" />
import React = require('react');
import ReactDOM = require('react-dom');

import SettingsRootView = require('../components/settings/SettingsRootView')

const Router = {

    showSettings() {
        ReactDOM.render(SettingsRootView({
            rootList :[]
        }), this.el); 
    },

    hideSettings() {

    },
}

export = Router;

