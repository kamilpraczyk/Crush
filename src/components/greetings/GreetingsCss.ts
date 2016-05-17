import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {
    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
        background: 'red',
        fontSize: css.font.fontSize.XL,
    },

    container: {
        display: 'flex',
        flexGrow: 1,
        margin: '2vmax',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: css.font.color.light,
        fontSize: css.font.fontSize.XL3,
        paddingBottom: '2vh'
    },
}

export = utils.union(css, {
    getPanel() {
        return styles.panel;
    },

    getText() {
        return styles.text;
    },

    getContainer() {
        return styles.container;
    },
});