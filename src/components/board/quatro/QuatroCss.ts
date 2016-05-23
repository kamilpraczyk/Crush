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
        alignItems: 'stretch'
    },


}

export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
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

});
