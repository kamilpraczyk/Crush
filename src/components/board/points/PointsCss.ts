/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const panel: CSSProperties = {
    position: 'absolute',
    bottom: '20vh',
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    minWidth: '2vmin',
    minHeight: '5vmin',
    zIndex: 1,
}

export = utils.union(css, {

    getPanel() {
        return panel;
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