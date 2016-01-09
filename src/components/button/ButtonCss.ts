import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let style = {

    button: {
        backgroundColor: '#44c767',
        MozBorderRadius: 28,
        WebkitBorderRadius: 28,
        borderRadius: 28,
        border: '1px solid #18ab29',
        display: 'inline-block',
        cursor: 'pointer',
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: css.font.fontSize.XL,
        padding: '16px 31px',
        textDecoration: 'none',
        textShadow: '0px 1px 0px #2f6627'
    },

    buttonActive: {
        backgroundColor: '#5cbf2a'
    },
    buttonHover: {

        position: 'relative',
        top: 1
    },
}

export = utils.union(css, {

    getButton() {
        return style.button;
    },


});