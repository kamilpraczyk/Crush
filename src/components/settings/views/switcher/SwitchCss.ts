/// <reference path="../../../../../typings/tsd.d.ts" />
import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const panel: CSSProperties = {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingBottom: '10vh'
}

export = utils.union(css, {

    getPanel() {
        return panel;
    }
});