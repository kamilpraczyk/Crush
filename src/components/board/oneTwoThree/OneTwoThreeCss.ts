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

    header: {
        display: 'flex',
        margin: '2vh',
        marginBottom: 0,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },

    body: {
        display: 'flex',
        flex: 1,
        margin: '2vh',
        alignItems: 'stretch',
        flexDirection: 'column'
    },

    bodyContent: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },

    line: {
        display: 'flex',
        flex: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center'
    },


    text: {
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        cursor: css.cursor.pointer,
        borderRadius: css.borderRadius,
        fontSize: css.font.fontSize.XL,
        backgroundColor: css.background.text.backgroundColor,
    },


    item: {
        display: 'inline-flex',
        justifyContent: 'center',
        verdicalAlign: 'middle',
        boxSizing: 'border-box',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingTop: '5vh',
        paddingBottom: '5vh',
        backgroundColor: css.background.text.backgroundColor
    },


    footer: {
        display: 'flex'
    },

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getHeader() {
        return styles.header;
    },

    getBody() {
        return styles.body;
    },

    getBodyContent() {
        return styles.bodyContent;
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


    getFooter() {
        return styles.footer;
    }

});