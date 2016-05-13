import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const styles = {

    panel: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    item: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
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