/// <reference path="../../../../../typings/tsd.d.ts" />
import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const panel: CSSProperties = {
    width: '100%',
    overflowY: 'auto'
}

export = utils.union(css, {

    getPanel() {
        return panel;
    }

});