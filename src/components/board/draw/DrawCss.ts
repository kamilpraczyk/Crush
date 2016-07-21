/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');


const bodyContent: CSSProperties = {
    borderRadius: css.borderRadius,
    fontSize: css.font.fontSize.XL,
    backgroundColor: css.background.text.backgroundColor,
    alignItems: 'cneter',
    overflow: 'hidden'
}

export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getHeader: css.layout.getHeader,
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,

    getBodyContent() {
        return css.get(css.layout.getBodyContent(), bodyContent);
    },

    getSupportIcon(): string {
        return 'moon-support';
    }


});