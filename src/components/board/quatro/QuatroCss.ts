/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');
import {isId}  from '../../../lessons/helper/constants';


const line: CSSProperties = {
    display: 'flex',
    flexGrow: 1
}


const itemWraper: CSSProperties = {
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    display: 'flex',
    flexGrow: 1,
    alignItems: 'stretch'
}


export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
    getBodyContent: css.layout.getBodyContent,


    getLine() {
        return css.get(line);
    },

    getItemWraper() {
        return itemWraper
    },

});
