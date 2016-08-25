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
    alignItems: 'stretch',
    alignContent: 'stretch',
}

const menuItem: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
}



export = utils.union(css, {

    getPanel() {
        return panel;
    },
    getProgress() {
        return progress;
    },
    getMenu() {
        return menu;
    },
    getMenuItem() {
        return menuItem;
    }


});