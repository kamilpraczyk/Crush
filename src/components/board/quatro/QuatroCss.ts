import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        position: 'absolute',
        display: 'table',
        width: '100%',
        height: '100%',
    },

    center: {
        width: '100%',
        height: '100%',
        display: 'table-row'
    },

    quatro: {
        width: '100%',
        height: '100%',
        display: 'table'
    },

    line: {
        display: 'table-row',
        textAlign: 'center',
        padding: 10
    },

    lineText: {
        display: 'table-row',
        textAlign: 'center',
        height: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.60)'
    },

    common: {
        margin: 5,
        display: 'inline-block',
        width: '40%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        WebkitBackgroundSize: 'contain',
        MozBackgroundSize: 'contain',
        OBackgroundSize: 'contain',
        backgroundSize: 'contain',
        cursor: css.cursor.pointer,
        boxSizing: 'border-box',
        border: '10px solid transparent',
        borderRadius: 10
    },

    good: {
        border: '10px solid #67FF67'
    },

    bad: {
        border: '10px solid #FF5656'
    },

    item: {
    },

    text: {
        textAlign: 'center',
        fontSize: css.font.fontSize.XL3
    },

    menu: {
        display: 'table-row',
        bottom: 0,
        left: 0,
        width: '100%'
    }

}

function addUrl(style: any, url: string): any {
    if (url) {
        return css.get(style, {
            backgroundImage: 'url(' + url + ')'
        });
    }
    return style;
}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getCenter() {
        return styles.center;
    },

    getQuatro() {
        return styles.quatro;
    },

    getLine() {
        return css.get(styles.line);
    },

    getLineText() {
        return styles.lineText;
    },

    getText() {
        return css.get(styles.text);
    },

    getItem(url: string, pressedId: string, tabId: string, id: string) {
        let style = css.get(styles.item, styles.common);

        if (pressedId === tabId) {
            if (pressedId === id) {
                style = css.get(style, styles.good);
            } else {
                style = css.get(style, styles, styles.bad);
            }
        }
        return addUrl(style, url);
    },

    getMenu() {
        return styles.menu;
    },

});