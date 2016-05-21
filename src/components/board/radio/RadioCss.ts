import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import {isId} from '../../../lessons/helper/constants';
import _ = require('underscore');

const styles = {

    header: {
        marginTop: '10vh'
    },
    headerShrink: {
        marginTop: '1vh'
    },

    bodyContent: {
        alignItems: 'center',
    },


    list: {
        paddingTop: '2vh',
        margin: 'auto',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column'

    },
    item: {
        marginTop: '2vh',
    },



}

export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getHeader(id: string) {
        let style = css.get(css.layout.getHeader(), styles.header);
        if (isId.isAnalogTime(id)) {
            style = css.get(style, styles.headerShrink);
        }
        return style;
    },
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
    getText: css.layout.getText,

    getBodyContent() {
        return css.get(css.layout.getBodyContent(), styles.bodyContent);
    },

    getInstructions: css.layout.getInstructions,


    getList() {
        return styles.list;
    },
    getItem(name: string, isCorrect: boolean, choosenName: string) {
        let style = css.get(css.layout.getText(), styles.item, css.answer.normal);

        if (choosenName === name) {
            if (isCorrect) {
                style = css.get(style, css.answer.good);
            } else {
                style = css.get(style, css.answer.bad);
            }
        }
        return style;
    },

});