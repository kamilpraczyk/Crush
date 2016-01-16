import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {

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

    active: {
        position: 'relative',
        backgroundColor: '#5cbf2a',
        top: 1
    },
    isExpand: {
       width : '100%',
       height : '100%'
    },
}

export = utils.union(css, {

    getButton(options: { active: boolean, isExpand: boolean }) {
        let style = styles.button;
        if (options.active)
            style = css.get(style, styles.active);
        if (options.isExpand)
            style =css.get(style, styles.isExpand);
        return style;
    },


});