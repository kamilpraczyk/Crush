import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        width: '100%',
        height: '100%',
        display: 'table',
    },

    signature: {
        display: 'table-row',
        width: '100%',
        height: '100%',
        background: css.themes.draw.canvasBackgroundColor
    },

    text: {
        position: 'absolute',
        top: 10,
        left: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: css.font.fontSize.XL
    },

    menu: {
        display: 'table-row',
        width: '100%'
    }

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getSignature() {
        return styles.signature;
    },

    getText() {
        return styles.text;
    },

    getMenu() {
        return styles.menu;
    },

});