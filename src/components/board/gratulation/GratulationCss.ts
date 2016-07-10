import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const textShadow = '2px 2px 5px black';
let styles = {

    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        fontSize: css.font.fontSize.XL,
        background: 'rgba(100,100,100,0.7)',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: css.font.color.dark,
        fontSize: css.font.fontSize.XL2,
        paddingBottom: '2vh',
        textShadow: textShadow
    },
    content: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer: {
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
    },

    paypal: {
        display: 'block',
        color: 'white',
        background: 'black',
        borderRadius: css.borderRadius,
        paddingBottom: '2vh',
        paddingTop: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw'
    }
}


export = utils.union(css, {
    getPanel() {
        return styles.panel;
    },


    getContent() {
        return styles.content;
    },
    getText() {
        return styles.text;
    },

    getFooter() {
        return styles.footer;
    },

    getPayPal() {
        return styles.paypal;
    },

});