import css = require('../utils/css/css');
import utils = require('../utils/utils');

let style = {
    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'red'
    },

    container: {
        position: 'absolute',
        top: '45%',
        left: 0,
        width: '100%',
        textAlign: 'center'
    },

    text: {
        color: css.font.color.light,
        fontSize: css.font.fontSize.XL3,
        paddingBottom: 20
    },
}

export = utils.union(css, {
    getPanel() {
        return style.panel;
    },

    getText() {
        return style.text;
    },

    getContainer() {
        return style.container;
    },
});