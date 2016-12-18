/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const button: CSSProperties = {
    //NO minHeight - IE don't like it
    display: 'flex',
    backgroundColor: css.button.backgroundColor.normal,
    backgroundImage: css.button.backgroundImage.normal(),
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
    textAlign: 'center'
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
    backgroundImage: css.button.backgroundImage.normalGuess()
}

const isTransparent: CSSProperties = {
    backgroundColor: css.button.backgroundColor.transparent,
    border: css.button.border.transparent,
    backgroundImage: css.button.backgroundImage.transparent()
}
const isInstructions: CSSProperties = {
    color: css.font.color.info,
    border: 'none',
}

const isFromName: CSSProperties = {
    backgroundColor: css.button.backgroundColor.fromName,
    backgroundImage: css.button.backgroundImage.fromName(),
    border: css.button.border.fromName,
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
    justifyContent: 'flex-start',
    textAlign: 'left',
    alignSelf: 'center',
    alignItems: 'center',
    flexGrow: 1,
    wordBreak: 'break-word',
    wordWrap: 'break-word'
}

const nameNoBottom: CSSProperties = {
    paddingBottom: 0,
}

const nameContainer: CSSProperties = {
    textAlign: 'center',
    display: 'block', //IE11 fix no flex
    width: '100%' //IE11 fix 100%
}
const nameContainerIsExpand: CSSProperties = {
    textAlign: 'center', //IE11 fix 
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
const iconSets: CSSProperties = {
    display: 'flex',
    width: '100%',
    flexGrow: 1,
    paddingTop: 3,
    paddingBottom: 3,
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: css.font.fontSize.micro
}

const iconSet: CSSProperties = {
    display: 'block',
    width: 32,
    height: 32,
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
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
    isInstructions: boolean,
    isFromName: boolean
}

export = utils.union(css, {

    getButton(o: ButtonProps) {
        let style = button;
        if (o.isExpandWidth) style = css.get(style, isExpandWidth);
        if (o.isExpand) style = css.get(style, isExpand);
        if (o.isActive) style = css.get(style, isActive);
        if (o.pressed) style = css.get(style, pressed);
        if (o.isResponsibleHeight) style = css.get(style, isResponsibleHeight);
        if (o.isGuess) style = css.get(style, isGuess);
        if (o.isSuccess) style = css.get(style, isSuccess);
        if (o.isFail) style = css.get(style, isFail);
        if (o.isTime) style = css.get(style, css.fontFamily.time);
        if (o.isTransparent) style = css.get(style, isTransparent);
        if (o.backUrl) style = css.get(style, { backgroundImage: `url(${o.backUrl})` });
        if (o.isInstructions) style = css.get(style, isInstructions);
        if (o.disabled) style = css.get(style, disabled);
        if (o.isFromName) style = css.get(style, isFromName);
        return style;
    },

    getName(o: { isResponsibleCenter: boolean, isIconSet: boolean }) {
        return css.get(name, o.isResponsibleCenter ? isResponsibleCenter : null, o.isIconSet ? nameNoBottom : null);
    },

    getNameContainer(isExpand: boolean) {
        return css.get(nameContainer, isExpand ? nameContainerIsExpand : null);
    },

    getIcon(o: { isResponsibleCenter: boolean }) {
        return css.get(icon, o.isResponsibleCenter ? isResponsibleCenter : null);
    },

    getLeftIcon(isActive: boolean, letfIconColour: string) {
        return css.get(leftIcon, isActive ? leftIconActive : null, letfIconColour ? { color: letfIconColour } : null);
    },

    getIconSets() {
        return css.get(iconSets);
    },
    getIconSet(icon: string) {
        return css.get(iconSet, { backgroundImage: `url(${icon})` });
    },

    getNumbers(isActive: boolean) {
        return css.get(numbers, isActive ? numbersActive : null);
    },

    getNumbersStatus(numb: number, length: number) {
        const percent = utils.toPercent(numb, length);
        let color: string = null;
        if (percent >= 90) {
            color = '#00FF00';
        } else if (percent >= 80) {
            color = '#64E986';
        } else if (percent >= 50) {
            color = '#89C35C';
        } else if (percent >= 30) {
            color = '#8BB381';
        } else {
            color = '#ff3300';
        }
        return css.get(numbersStatus, { color });
    }
});