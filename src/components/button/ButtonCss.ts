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
    },
    isResponsibleHeight: {
        minHeight: '10vh'
    },

    name: {
        display: 'inline-block',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        paddingRight: '1vw',
        paddingLeft: '1vw',
    },

    icon: {
        display: 'inline-block',
        paddingLeft: '1vw',
        paddingRight: '1vw'
    },
    leftIcon: {
        color: '#777',
        float: 'left',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        paddingTop: '1vh'
    },
    leftIconActive: {
        color: '#fff',
    }

}

export = utils.union(css, {

    getButton(options: { pressed: boolean, isExpand: boolean, isExpandWidth: boolean, isActive: boolean, isFlex: boolean, isResponsibleHeight: boolean }) {
        let style = styles.button;
        if (options.isExpandWidth)
            style = css.get(style, styles.isExpandWidth);
        if (options.isExpand)
            style = css.get(style, styles.isExpand);
        if (options.isActive)
            style = css.get(style, styles.isActive);


        if (options.pressed)
            style = css.get(style, styles.pressed);
        if (options.isFlex) {
            style = css.get(style, { display: 'inline-flex', textAlign: 'left' });
        }
        if (options.isResponsibleHeight) {
            style = css.get(style, styles.isResponsibleHeight);
        }
        return style;
    },

    getName() {
        return styles.name;
    },

    getIcon() {
        return styles.icon;
    },

    getLeftIcon(isActive: boolean) {
        let style = styles.leftIcon;
        if (isActive) {
            style = css.get(style, styles.leftIconActive);
        }
        return style;
    },


});