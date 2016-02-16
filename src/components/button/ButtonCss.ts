import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let normal = 'rgb(154, 93, 35)';
let active = 'rgb(204, 152, 75)';
let pressed = 'rgb(208, 161, 110)';

let styles = {

    button: {
        textTransform: 'capitalize',
        backgroundColor: normal,
        MozBorderRadius: 28,
        WebkitBorderRadius: 28,
        borderRadius: 28,
        border: '1px solid rgb(67, 77, 85)',
        display: 'inline-block',
        cursor: 'pointer',
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: css.font.fontSize.XL,
        padding: '16px 31px',
        textDecoration: 'none',
        textShadow: '0px 1px 0px #2f6627',
        margin: 0,
    },

    pressed: {
        position: 'relative',
        backgroundColor: pressed,
        top: 1
    },
    isExpand: {
        width: '100%',
        height: '100%',
        padding: 0
    },
    isExpandWidth: {
        width: '100%',
    },

    isActive: {
        backgroundColor: active,
        border: '1px solid ' + normal
    }
}

export = utils.union(css, {

    getButton(options: { pressed: boolean, isExpand: boolean, isExpandWidth: boolean, isActive: boolean }) {
        let style = styles.button;
        if (options.isExpandWidth)
            style = css.get(style, styles.isExpandWidth);
        if (options.isExpand)
            style = css.get(style, styles.isExpand);
        if (options.isActive)
            style = css.get(style, styles.isActive);


        if (options.pressed)
            style = css.get(style, styles.pressed);
        return style;
    },


});