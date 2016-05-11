import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');

let styles = {

    panel: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    body: {
        display: 'flex',
        flex: 1,

        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },


    line: {
        display: 'flex',
        flex: 1
    },


    lineText: {
        display: 'flex',
        justifyContent: 'center',
    },

    itemWraper: {
        padding: '2vh',
        display: 'flex',
        flexGrow: 1,
    },


    item: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        verdicalAlign: 'middle',
        boxSizing: 'border-box',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        WebkitBackgroundSize: 'contain',
        MozBackgroundSize: 'contain',
        OBackgroundSize: 'contain',
        backgroundSize: 'contain',
        backgroundColor: css.background.text.backgroundColor
    },

    text: {
        textAlign: 'center',
        cursor: css.cursor.pointer,
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        fontSize: css.font.fontSize.XL3,
        backgroundColor: css.background.text.backgroundColor,
        borderRadius: css.borderRadius
    },

    footer: {
        display: 'flex',
    },

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

    getBody() {
        return styles.body;
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

    getItemWraper() {
        return styles.itemWraper
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


    getFooter() {
        return styles.footer;
    }
});
