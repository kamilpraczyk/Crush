import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import {isId} from '../../../lessons/helper/constants';
import _ = require('underscore');

const styles = {

    header: {
        marginTop: '1vh'
    },

    headerShrink: {
        marginTop: '1vh'
    },

    bodyContent: {
        alignItems: 'center',
    },

    list: {
        margin: 'auto',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center'
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

    getBodyContent() {
        return css.get(css.layout.getBodyContent(), styles.bodyContent);
    },

    getInstructions: css.layout.getInstructions,


    getList() {
        return styles.list;
    },

});