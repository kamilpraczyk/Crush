/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');


const bodyContent: CSSProperties = {
    borderRadius: css.borderRadius,
    fontSize: css.font.fontSize.XL,
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: 0,
    margin: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
}
const body: CSSProperties = {
    overflow: 'hidden',
    paddingTop: '1vh',
    margin: 0,
    paddingBottom: '1vh',
    paddingLeft: '1vw',
    paddingRight: '1vw'
}


export = utils.union(css, {

    getPanel: css.layout.getPanel,
    getFooter: css.layout.getFooter,

    getBody() {
        return css.get(css.layout.getBody(), body);
    },

    getBodyContent() {
        return css.get(css.layout.getBodyContent(), bodyContent);
    }
});