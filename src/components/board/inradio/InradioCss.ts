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
    alignContent: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const list: CSSProperties = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
}

export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
    getInstructions: css.layout.getInstructions,

    getHeader(id: string) {
        let style = css.get(css.layout.getHeader(), header);
        if (isId.isAnalogTime(id)) {
            style = css.get(style, headerShrink);
        }
        return style;
    },

    getBodyContent() {
        return css.get(css.layout.getBodyContent(), bodyContent);
    },

    getList() {
        return css.get(list);
    },

});