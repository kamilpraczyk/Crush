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


export = utils.union(css, {

    getHeader(id: string) {
        let style = css.get(css.layout.getHeader(), header);
        if (isId.isAnalogTime(id)) {
            style = css.get(style, headerShrink);
        }
        return style;
    },

    getInstructions: css.layout.getInstructions,

    getSupportIcon(): string {
        return css.icons.help;
    }
});