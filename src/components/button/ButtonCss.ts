import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const styles = {

    button: {
        display: 'flex',
        backgroundColor: css.button.background.normal,
        color: css.button.color.normal,
        border: css.button.border.normal,
        // textTransform: 'capitalize',
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
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        WebkitBackgroundSize: 'contain',
        MozBackgroundSize: 'contain',
        OBackgroundSize: 'contain',
        backgroundSize: 'contain',
        minWidth: '15vw'
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

    isSuccess: {
        border: css.button.border.success
    },
    isFail: {
        border: css.button.border.fail
    },


    name: {
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        display: 'inline-flex',
        textAlign: 'left',
        alignSelf: 'center',
    },

    icon: {
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        display: 'inline-flex',
        alignSelf: 'center'
    },
    leftIcon: {
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        display: 'inline-flex',
        alignSelf: 'center',
        color: '#777',
    },
    leftIconActive: {
        color: '#fff',
    }

}

interface ButtonProps {
    pressed: boolean,
    isExpand: boolean,
    isExpandWidth: boolean,
    isActive: boolean,
    isResponsibleHeight: boolean,
    isSuccess: boolean,
    isFail: boolean,
    backUrl: string,
    isTime: boolean
}

export = utils.union(css, {

    getButton(options: ButtonProps) {
        let style = styles.button;
        if (options.isExpandWidth)
            style = css.get(style, styles.isExpandWidth);

        if (options.isExpand)
            style = css.get(style, styles.isExpand);

        if (options.isActive)
            style = css.get(style, styles.isActive);

        if (options.pressed)
            style = css.get(style, styles.pressed);

        if (options.isResponsibleHeight)
            style = css.get(style, styles.isResponsibleHeight);

        if (options.isSuccess)
            style = css.get(style, styles.isSuccess);

        if (options.isFail)
            style = css.get(style, styles.isFail);

        if (options.isTime)
            style = css.get(style, css.fontFamily.time);

        if (options.backUrl) {
            style = css.get(style, {
                backgroundImage: 'url(' + options.backUrl + ')',
                backgroundColor: css.background.text.backgroundColor
            });
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