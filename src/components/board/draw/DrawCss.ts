import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },

    signature: {
        width: '100%',
        height: '100%',
        background: '#EEE'
    },

    text: {
        position: 'absolute',
        top: 10,
        left: 0,
        width: '100%',
        textAlign: 'center',
        fontSize: css.font.fontSize.XL
    },
        
    menu  : {
        position: 'absolute',
        bottom: 0,
        left: 0,
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