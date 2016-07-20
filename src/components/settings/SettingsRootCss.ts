/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');
import React = require('react');

let styles = {


    panel: {
        position: 'absolute',
        zIndex: 2,
        top: 0,
        left: 0,
        color: css.font.color.dark,
        background: 'rgba(255,255,255,0.9)',

        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'stretch',
        fontSize: css.font.fontSize.XL,
    },

    panelSelection: {
        display: 'flex',
        flexGrow: 7,
        flexDirection: 'column',
        alignItems: 'stretch'
    },

    panelRoot: {
        display: 'flex',
        marginBottom: '2px',
        background: css.button.background.normal,
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },
    panelRootMinimalized: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
    },

    rootItem: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },


}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getPanelSelection() {
        return styles.panelSelection;
    },

    getPanelRoot(isMenuMinimalized: boolean) {
        return css.get(styles.panelRoot, isMenuMinimalized ? styles.panelRootMinimalized : {});
    },

    getRootItem() {
        return styles.rootItem;
    },

});