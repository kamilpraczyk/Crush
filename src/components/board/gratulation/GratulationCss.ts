/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const textShadow = '2px 2px 5px black';

const text: CSSProperties = {
    color: css.font.color.dark,
    fontSize: css.font.fontSize.XL2,
    paddingBottom: '2vh',
    textShadow: textShadow
}
const content: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const footer: CSSProperties = {
    backgroundImage: css.themes.standard.backgroundImageBeer,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textShadow: textShadow
}

const paypal: CSSProperties = {
    display: 'block',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: css.borderRadius,
    paddingBottom: '2vh',
    paddingTop: '2vh',
    paddingLeft: '2vw',
    paddingRight: '2vw'
}

const panel: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    fontSize: css.font.fontSize.XL,
    backgroundColor: 'rgba(100,100,100,0.7)',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}


export = utils.union(css, {
    getPanel() {
        return css.get(panel);
    },
    getContent() {
        return css.get(content);
    },
    getText() {
        return css.get(text);
    },
    getFooter() {
        return css.get(footer);
    },
    getPayPal() {
        return css.get(paypal);
    }
});