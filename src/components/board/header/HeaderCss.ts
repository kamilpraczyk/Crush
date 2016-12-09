/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import { isId, TypeId } from '../../../lessons/helper/constants';
import _ = require('underscore');


const header: CSSProperties = {
    marginTop: '1vh'
}
const headerShrink: CSSProperties = {
    marginTop: '1vh'
}


export = utils.union(css, {

    getHeader(id: TypeId[]) {
        return css.get(css.layout.getHeader(), header, isId.isAnalogTime(id) ? headerShrink : null);
    },

    getInstructions: css.layout.getInstructions,

    getSupportIcon(): string {
        return css.icons.help;
    }
});