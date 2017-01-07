import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

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
    getBody: css.layout.getBody,
    getFooter: css.layout.getFooter,
    getBodyContent: () => css.get(css.layout.getBodyContent(), bodyContent),
    getInstructions: css.layout.getInstructions,
    getList: () => css.get(list)
});