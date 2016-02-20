import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');

let styles = {

    panel: {
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
        display: 'table',
        borderSpacing: 0
    },

    line: {
        display: 'table-row',
        textAlign: 'center',
    },

    lineText: {
        display: 'table-row',
        textAlign: 'center',
        height: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.60)'
    },


    item: {
        display: 'inline-block',
        verdicalAlign: 'middle',
        boxSizing: 'border-box',
        textAlign: 'center',
        width: 'calc(50% - ' + css.borderWidth * 2 + css.borderWidthUnit + ')',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        WebkitBackgroundSize: 'contain',
        MozBackgroundSize: 'contain',
        OBackgroundSize: 'contain',
        backgroundSize: 'contain',
    },


    text: {
        textAlign: 'center',
        fontSize: css.font.fontSize.XL3
    },

    menu: {
        display: 'table-row',
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

    getItem(selectedAnswer: string, currentAnswer: string, correctAnswers: string[], url?: string) {
        let style = css.get(styles.item, css.answer.normal);

        if (selectedAnswer === currentAnswer) {
            if (_.contains(correctAnswers, selectedAnswer)) {
                style = css.get(style, css.answer.good);
            } else {
                style = css.get(style, css.answer.bad);
            }
        }
        if (url) {
            style = addUrl(style, url);
        }
        return style;
    },


    getMenu() {
        return styles.menu;
    },

});