import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

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

    getBodyContent: () => css.get(css.layout.getBodyContent(), bodyContent),
    getList: () => css.get(list),
});