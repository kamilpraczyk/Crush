/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import {isId} from '../../../lessons/helper/constants';
import _ = require('underscore');


const header: CSSProperties = {
    marginTop: '1vh'
}
const headerShrink: CSSProperties = {
    marginTop: '1vh'
}
const bodyContent: CSSProperties = {
    alignItems: 'center',
}
const list: CSSProperties = {
    margin: 'auto',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
}


export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getHeader(id: string) {
        let style = css.get(css.layout.getHeader(), header);
        if (isId.isAnalogTime(id)) {
            style = css.get(style, headerShrink);
        }
        return style;
    },
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,

    getBodyContent() {
        return css.get(css.layout.getBodyContent(), bodyContent);
    },

    getInstructions: css.layout.getInstructions,


    getList() {
        return list;
    },

});