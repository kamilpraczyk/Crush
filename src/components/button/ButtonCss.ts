import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const styles = {

    button: {
        display: 'flex',
        backgroundColor: css.button.background.normal,
        color: css.button.color.normal,
        border: css.button.border.normal,
        textTransform: 'capitalize',
        MozBorderRadius: 28,
        WebkitBorderRadius: 28,
        borderRadius: 28,
        cursor: 'pointer',
        fontFamily: 'Arial',
        fontSize: css.font.fontSize.XL,
        minHeight: 35,
        textDecoration: 'none',
        textShadow: '0px 1px 0px #2f6627',
        margin: 0,
        padding: 0,
        paddingTop: '1vh',
        paddingBottom: '1vh',
        flexDirection: 'row',
        alignItems: 'stretch',
    },

    pressed: {
        position: 'relative',
        top: 1,
        backgroundColor: css.button.background.focus,
        color: css.button.color.focus,
        border: css.button.border.focus
    },
    isExpand: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'left'
    },
    isExpandWidth: {
        width: '100%',
        flexGrow: 1
    },

    isActive: {
        backgroundColor: css.button.background.active,
        color: css.button.color.active,
        border: css.button.border.active
    },
    isResponsibleHeight: {
        minHeight: '10vh'
    },
    isResponsibleCenter: {
        justifyContent: 'center',
        display: 'flex',
        flexGrow: 1
    },

    name: {
        display: 'inline-flex',
        paddingRight: '1vw',
        paddingLeft: '1vw',
        textAlign: 'left'
    },

    icon: {
        display: 'inline-flex',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        alignSelf: 'center'
    },
    leftIcon: {
        display: 'inline-flex',
        alignSelf: 'center',
        color: '#777',
        paddingLeft: '1vw',
        paddingRight: '1vw',
    },
    leftIconActive: {
        color: '#fff',
    }

}

export = utils.union(css, {

    getButton(options: { pressed: boolean, isExpand: boolean, isExpandWidth: boolean, isActive: boolean, isResponsibleHeight: boolean }) {
        let style = styles.button;
        if (options.isExpandWidth)
            style = css.get(style, styles.isExpandWidth);

        if (options.isExpand)
            style = css.get(style, styles.isExpand);

        if (options.isActive)
            style = css.get(style, styles.isActive);

        if (options.pressed)
            style = css.get(style, styles.pressed);

        if (options.isResponsibleHeight) {
            style = css.get(style, styles.isResponsibleHeight);
        }
        return style;
    },

    getName(options: { isResponsibleCenter: boolean }) {
        let style = styles.name;
        if (options.isResponsibleCenter) {
            style = css.get(style, styles.isResponsibleCenter);
        }
        return style;
    },

    getIcon(options: { isResponsibleCenter: boolean }) {
        let style = styles.icon;
        if (options.isResponsibleCenter) {
            style = css.get(style, styles.isResponsibleCenter);
        }
        return style;
    },

    getLeftIcon(isActive: boolean) {
        let style = styles.leftIcon;
        if (isActive) {
            style = css.get(style, styles.leftIconActive);
        }
        return style;
    },


});