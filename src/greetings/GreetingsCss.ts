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

    text: {
        position: 'absolute',
        top: '45%',
        left: 0,
        width: '100%',
        textAlign: 'center',
        color: css.font.color.light,
        fontSize: css.font.fontSize.XL3,
    }
}

export = utils.union(css, {
    getPanel() {
        return style.panel;
    },

    getText() {
        return style.text;
    }
});