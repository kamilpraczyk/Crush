import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');

let styles = {


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

}

export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
    getText: css.layout.getText,

    getBodyContent: css.layout.getBodyContent,


    getLine() {
        return css.get(styles.line);
    },

    getLineText() {
        return styles.lineText;
    },


    getItemWraper() {
        return styles.itemWraper
    },

    getItem(selectedAnswer: string, currentAnswer: string, correctAnswers: string[], url: string) {
        let style = css.get(styles.item, css.answer.normal);

        if (selectedAnswer === currentAnswer) {
            if (_.contains(correctAnswers, selectedAnswer)) {
                style = css.get(style, css.answer.good);
            } else {
                style = css.get(style, css.answer.bad);
            }
        }
        if (url) {
            style = css.get(style, {
                backgroundImage: 'url(' + url + ')'
            });
        }
        return style;
    },

});
