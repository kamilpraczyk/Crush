import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const styles = {

    button: {
        backgroundColor: css.button.background.normal,
        color: css.button.color.normal,
        border: css.button.border.normal,
        textTransform: 'capitalize',
        MozBorderRadius: 28,
        WebkitBorderRadius: 28,
        borderRadius: 28,
        display: 'inline-block',
        cursor: 'pointer',
        fontFamily: 'Arial',
        fontSize: css.font.fontSize.XL,
        height: '7vh',
        minHeight: 35,
        textDecoration: 'none',
        textShadow: '0px 1px 0px #2f6627',
        margin: 0,
    },

    pressed: {
        position: 'relative',
        top: 1,
        backgroundColor: css.button.background.focus,
        color: css.button.color.focus,
        border: css.button.border.focus
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
        backgroundColor: css.button.background.active,
        color: css.button.color.active,
        border: css.button.border.active
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