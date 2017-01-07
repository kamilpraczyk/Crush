import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const panel: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    color: css.font.color.normal,
    backgroundColor: 'rgba(0,0,0,0.9)',

    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    fontSize: css.font.fontSize.XL,

    backgroundImage: css.themes.standard.backgroundImageRead,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}
const wid = 22;
const main: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: 100 - wid + '%'
}
const menu: CSSProperties = {
    display: 'flex',
    height: '100%',
    marginBottom: '2px',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
    width: wid + '%',
}

const item: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
}

export = utils.union(css, {
    getPanel: () => css.get(panel),
    getMain: () => css.get(main),
    getMenu: () => css.get(menu),
    getItem: () => css.get(item),
});