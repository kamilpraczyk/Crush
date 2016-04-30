import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {

    panel: {
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
    },

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },


});