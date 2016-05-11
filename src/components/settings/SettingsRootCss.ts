import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {


    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        color: css.font.color.default,
        background: 'rgba(255,255,255,0.9)',
    },

    panelContent: {
        display: 'table',
        width: '100%',
        height: '100%',
    },

    panelSelection: {
        display: 'table-cell',
        height: '100%',
        width: '70%',
        minWidth: 100
    },

    panelRoot: {
        display: 'table-cell',
        height: '100%',
        width: '30%',
        minWidth: 60,
        maxWidth:100
    },

    rootList: {
        display: 'table',
        height: '100%',
        width: '100%',
    },

    rootItem: {
        display: 'table-row',
        width: '100%',
    },

    item: {
        display: 'table-cell',
        width: '100%',
    },


}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getPanelContent() {
        return styles.panelContent;
    },

    getPanelSelection() {
        return styles.panelSelection;
    },

    getPanelRoot() {
        return styles.panelRoot;
    },

    getRootList() {
        return styles.rootList;
    },

    getRootItem() {
        return styles.rootItem;
    },

    getItem() {
        return styles.item;
    },

});