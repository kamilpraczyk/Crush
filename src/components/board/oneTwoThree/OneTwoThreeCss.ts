/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');


const bodyContent: CSSProperties = {
    alignItems: 'center',
}

const line: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center'
}


export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getHeader: css.layout.getHeader,
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,


    getBodyContent() {
        return css.get(css.layout.getBodyContent(), bodyContent);
    },

    getLine() {
        return css.get(line);
    },


});