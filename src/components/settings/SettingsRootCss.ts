import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {

    panelMinimalized: {
        position: 'absolute',
        top: 0,
        right: 0,
        border: '1px solid black',
        width: css.status.width,
        height: css.status.height,
        maxHeight: css.status.maxHeight,
        maxWidth: css.status.maxWidth,
        cursor: css.cursor.pointer,
        borderRadius: css.borderRadius
    },

    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        color: css.font.color.default,
        background: 'rgba(255,255,255,0.8)',
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

    getPanelMinimalized() {
        return styles.panelMinimalized;
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