import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');

let styles = {



    bodyContent: {
        alignItems: 'center',
    },


    line: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center'
    },


    item: {
        display: 'inline-flex',
        justifyContent: 'center',
        verdicalAlign: 'middle',
        boxSizing: 'border-box',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        backgroundColor: css.background.text.backgroundColor
    },


}

export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getHeader: css.layout.getHeader,
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
    getText: css.layout.getText,


    getBodyContent() {
        return css.get(css.layout.getBodyContent(), styles.bodyContent);
    },


    getLine() {
        return css.get(styles.line);
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


});