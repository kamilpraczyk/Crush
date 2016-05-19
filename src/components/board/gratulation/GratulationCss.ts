import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        fontSize: css.font.fontSize.XL,
        background: 'rgba(200,200,200,0.5)',
        display: 'flex',
        flexGrow: 1,
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


});