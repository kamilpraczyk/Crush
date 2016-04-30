import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '20px'
    },

    point: {
        display: 'table',
        textAlign: 'center',
        height: '100%',
        width: '100%',
    }
}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getPoints() {
        return styles.point;
    }
});