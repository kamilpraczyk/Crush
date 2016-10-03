/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const button: CSSProperties = {
    //NO minHeight - IE don't like it
    display: 'flex',
    backgroundColor: css.button.backgroundColor.normal,
    backgroundImage: css.button.backgroundImage.normal,
    color: css.button.color.normal,
    border: css.button.border.normal,
    MozBorderRadius: css.button.radius.borderRadius,
    WebkitBorderRadius: css.button.radius.borderRadius,
    borderRadius: css.button.radius.borderRadius,
    cursor: 'pointer',
    fontSize: css.font.fontSize.XL,
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
    minWidth: '15vw',
    maxWidth: '100%',
}
const pressed: CSSProperties = {
    position: 'relative',
    top: 1,
    backgroundColor: css.button.backgroundColor.focus,
    backgroundImage: css.button.backgroundImage.focus,
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
    backgroundColor: css.button.backgroundColor.active,
    backgroundImage: css.button.backgroundImage.active,
    color: css.button.color.active,
    border: css.button.border.active
}
const isResponsibleHeight: CSSProperties = {
    // minHeight: 50//'10vh'
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

const isGuess: CSSProperties = {
    backgroundColor: css.button.backgroundColor.normalGuess,
    border: css.button.border.normalGuess,
    backgroundImage: css.button.backgroundImage.normalGuess
}



const disabled: CSSProperties = {
    backgroundColor: css.button.backgroundColor.disabled,
    backgroundImage: css.button.backgroundImage.disabled,
    color: css.button.color.disabled,
    border: css.button.border.disabled,
    cursor: css.cursor.normal
}

const name: CSSProperties = {
    display: 'flex',
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    textAlign: 'left',
    alignSelf: 'center',
    alignItems: 'center',
    flexGrow: 1,
    wordBreak: 'break-word',
    wordWrap: 'break-word'
}

const nameContainer: CSSProperties = {
    alignSelf: 'center',
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1
}


const icon: CSSProperties = {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    alignSelf: 'center',
    fontSize: css.font.fontSize.mega
}
const leftIcon: CSSProperties = {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    alignSelf: 'center',
    color: css.button.color.disabled,
}
const leftIconActive: CSSProperties = {
    color: '#fff',
}
const numbers: CSSProperties = {
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    fontSize: css.font.fontSize.micro,
    alignSelf: 'center',
    color: css.button.color.disabled,
    paddingLeft: 2,
    border: '0 solid transparent',
    borderRightWidth: 10 //fix for IE11 pushy divs
}
const numbersActive: CSSProperties = {
    color: css.button.color.active
}
const numbersStatus: CSSProperties = {}
const numbersGood: CSSProperties = {
    color: css.font.color.success
}
const numbersSoso: CSSProperties = {
    color: css.font.color.average
}
const numbersBad: CSSProperties = {
    color: css.font.color.fail
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
    isGuess: boolean,
    disabled: boolean,
    isTransparent: boolean
    isInstructions: boolean
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

        if (options.isGuess)
            style = css.get(style, isGuess);

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
        if (options.isInstructions) {
            style = css.get(style, {
                color: 'red', //TODO
            });
        }
        if (options.isTransparent) {
            delete style.backgroundImage;
            style = css.get(style, {
                backgroundColor: 'transparent'
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

    getNameContainer() {
        return nameContainer;
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
    },

    getNumbersStatus(numb: number, length: number) {
        const percent = (numb * 100) / length;
        let mergeCss = numbersBad;
        if (percent >= 90) {
            mergeCss = numbersGood;
        } else if (percent >= 50) {
            mergeCss = numbersSoso;
        }
        return css.get(numbersStatus, mergeCss);
    }
});