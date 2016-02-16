import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        display: 'table',
        width: '100%',
        height: '100%',
    },

    item: {
        display: 'table-cell',
        textAlign: 'center',
        height: '100%',
    },

    separator: {
        display: 'table-cell',
        width: 2,
        background: 'white'
    }

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getItem() {
        return styles.item;
    },

    getSeparator() {
        return styles.separator;;
    },



});