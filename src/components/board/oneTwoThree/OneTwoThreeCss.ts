import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

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
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
    getBodyContent: () => css.get(css.layout.getBodyContent(), bodyContent),
    getLine: () => css.get(line)
});