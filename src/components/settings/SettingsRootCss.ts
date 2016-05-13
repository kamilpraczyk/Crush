import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {


    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        color: css.font.color.default,
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
        flex: 7,
        flexDirection: 'column',
        alignItems: 'stretch',
        overflowX: 'hidden',
        overflowY: 'auto',
        paddingBottom: '10vh'
    },

    panelRoot: {
        display: 'flex',
        marginBottom: '3px',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },


    rootItem: {
        display: 'flex',
        flex: 1,
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

    getPanelRoot() {
        return styles.panelRoot;
    },

    getRootItem() {
        return styles.rootItem;
    },

});