import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const panel: CSSProperties = {
    display: 'flex',
    width: '100%', //do not apply height 100% - will hide some pixels
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
}

const progress: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch',
    height: '1vh',
}

const menu: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignContent: 'stretch',
}

const menuItem: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    maxWidth: '100%'
}

export = utils.union(css, {
    getPanel: () => css.get(panel),
    getProgress: () => css.get(progress),
    getMenu: () => css.get(menu),
    getMenuItem: (oneOf: number) => css.get(menuItem, { maxWidth: (100 / oneOf) + '%' }),
    getClassNameIconSuccess: () => css.icons.success,
    getClassNameIconFail: () => css.icons.fail,
    getClassNameIconUnknown: () => css.icons.menu,
});