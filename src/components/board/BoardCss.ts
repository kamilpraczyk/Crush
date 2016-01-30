import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {

    panel: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        overflow : 'hidden'
    },
    

    text: {
        fontSize: css.font.fontSize.XL
    }

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },
    
    getText() {
        return styles.text;
    },

});