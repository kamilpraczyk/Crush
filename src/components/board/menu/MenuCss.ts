/// <reference path="../../../../typings/tsd.d.ts" />
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

    getPanel() {
        return css.get(panel);
    },
    getProgress() {
        return css.get(progress);
    },
    getMenu() {
        return css.get(menu);
    },
    getMenuItem(oneOf: number) {
        return css.get(menuItem, { maxWidth: (100 / oneOf) + '%' });
    },

    getClassNameIconSuccess() {
        return css.icons.success;
    },
    getClassNameIconFail() {
        return css.icons.fail;
    },
    getClassNameIconUnknown() {
        return css.icons.menu;
    }


});