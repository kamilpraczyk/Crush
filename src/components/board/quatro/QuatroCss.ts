import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');
import {isId}  from '../../../lessons/helper/constants';

let styles = {


    line: {
        display: 'flex',
        flexGrow: 1
    },

    lineText: {
        display: 'flex',
        justifyContent: 'center',
    },

    itemWraper: {
        paddingTop: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        display: 'flex',
        flexGrow: 1,
    },


    item: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        verticalAlign: 'middle',
        alignItems: 'center',
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

    getItem(id: string, selectedAnswer: string, currentAnswer: string, correctAnswers: string[], url?: string) {
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
        console.log('id', id);
        if (isId.isDigitalTime(id)) {
            style = css.get(style, css.fontFamily.time);
        }
        return style;
    },

});
