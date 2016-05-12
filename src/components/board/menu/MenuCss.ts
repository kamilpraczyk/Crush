import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const styles = {

    panel: {
        display: 'table',
        width: '100%',
        height: '100%',
    },

    item: {
        display: 'table-cell',
        textAlign: 'center',
        height: '100%',
    }

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getItem() {
        return styles.item;
    }


});