import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const styles = {

    panel: {
        width: '100%',
        overflowY: 'auto'
    }
}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    }

});