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

    lines: {
        width: '100%',
        height: '100%',
        display: 'table',
        borderSpacing: 0
    },

    line: {
        display: 'table-row',
        textAlign: 'center',
    },

    text: {
        marginTop: '10vh',
        textAlign: 'center',
        backgroundColor: css.background.text.backgroundColor,
    },


    item: {
        display: 'inline-block',
        verdicalAlign: 'middle',
        boxSizing: 'border-box',
        textAlign: 'center',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingTop: '5vh',
        paddingBottom: '5vh',
        backgroundColor: css.background.text.backgroundColor,
        minWidth: '80%'
    },


    menu: {
        display: 'table-row',
        width: '100%'
    },

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getCenter() {
        return styles.center;
    },

    getLines() {
        return styles.lines;
    },

    getLine() {
        return css.get(styles.line);
    },
    getText() {
        return css.get(styles.text);
    },

    getItem(selectedAnswer: string, currentAnswer: string, isCorrect: boolean) {
        let style = css.get(styles.item, css.answer.normal);

        if (selectedAnswer === currentAnswer) {
            if (isCorrect) {
                // style = css.get(style, css.answer.good);
            } else {
                style = css.get(style, css.answer.bad);
            }
        }
        return style;
    },


    getMenu() {
        return styles.menu;
    }

});