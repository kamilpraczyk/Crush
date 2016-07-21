/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const button: CSSProperties = {
    display: 'flex',
    backgroundColor: css.button.background.normal,
    color: css.button.color.normal,
    border: css.button.border.normal,
    MozBorderRadius: 28,
    WebkitBorderRadius: 28,
    borderRadius: 28,
    cursor: 'pointer',
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
}
const pressed: CSSProperties = {
    position: 'relative',
    top: 1,
    backgroundColor: css.button.background.focus,
    color: css.button.color.focus,
    border: css.button.border.focus
}
const isExpand: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'left'
}
const isExpandWidth: CSSProperties = {
    width: '100%',
    flexGrow: 1
}
const isActive: CSSProperties = {
    backgroundColor: css.button.background.active,
    color: css.button.color.active,
    border: css.button.border.active
}
const isResponsibleHeight: CSSProperties = {
    minHeight: '10vh'
}
const isResponsibleCenter: CSSProperties = {
    justifyContent: 'center',
    display: 'flex',
    flexGrow: 1
}
const isSuccess: CSSProperties = {
    border: css.button.border.success
}
const isFail: CSSProperties = {
    border: css.button.border.fail
}
const disabled: CSSProperties = {
    backgroundColor: css.button.background.disabled,
    color: css.button.color.disabled,
    border: css.button.border.disabled,
    cursor: css.cursor.normal
}

const name: CSSProperties = {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    display: 'inline-flex',
    textAlign: 'left',
    alignSelf: 'center',
    alignItems: 'center',
    flexGrow: 1
}
const icon: CSSProperties = {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    display: 'inline-flex',
    alignSelf: 'center'
}
const leftIcon: CSSProperties = {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '2vw',
    paddingRight: '1vw',
    display: 'inline-flex',
    alignSelf: 'center',
    color: css.font.color.disable,
}
const leftIconActive: CSSProperties = {
    color: '#fff',
}
const numbers: CSSProperties = {
    fontSize: css.font.fontSize.micro,
    alignSelf: 'center',
    color: css.font.color.disable,
    padding: 5
}
const numbersActive: CSSProperties = {
    color: css.button.color.active
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
    isTime: boolean,
    disabled: boolean
}

export = utils.union(css, {

    getButton(options: ButtonProps) {
        let style = button;
        if (options.isExpandWidth)
            style = css.get(style, isExpandWidth);

        if (options.isExpand)
            style = css.get(style, isExpand);

        if (options.isActive)
            style = css.get(style, isActive);

        if (options.pressed)
            style = css.get(style, pressed);

        if (options.isResponsibleHeight)
            style = css.get(style, isResponsibleHeight);

        if (options.isSuccess)
            style = css.get(style, isSuccess);

        if (options.isFail)
            style = css.get(style, isFail);

        if (options.isTime)
            style = css.get(style, css.fontFamily.time);

        if (options.backUrl) {
            style = css.get(style, {
                backgroundImage: 'url(' + options.backUrl + ')',
                backgroundColor: css.background.text.backgroundColor
            });
        }

        if (options.disabled)
            style = css.get(style, disabled);





        return style;
    },

    getName(options: { isResponsibleCenter: boolean }) {
        let style = name;
        if (options.isResponsibleCenter) {
            style = css.get(style, isResponsibleCenter);
        }
        return style;
    },

    getIcon(options: { isResponsibleCenter: boolean }) {
        let style = icon;
        if (options.isResponsibleCenter) {
            style = css.get(style, isResponsibleCenter);
        }
        return style;
    },

    getLeftIcon(isActive: boolean) {
        let style = leftIcon;
        if (isActive) {
            style = css.get(style, leftIconActive);
        }
        return style;
    },

    getNumbers(isActive: boolean) {
        return css.get(numbers, isActive ? numbersActive : null);
    }


});