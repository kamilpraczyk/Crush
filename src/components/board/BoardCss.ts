import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {

    panel: {
        position: 'absolute',
        backgroundImage: css.themes.standard.backgroundImageLesson,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
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