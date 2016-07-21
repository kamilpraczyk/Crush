/// <reference path="../../../../../typings/tsd.d.ts" />
import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const panel: CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexFlow: 'row nowrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
}

const item: CSSProperties = {
    display: 'inline-flex',
    flexGrow: 1,
    backgroundColor: '#ddd',
    borderLeft: '1px solid gray',
}

const current: CSSProperties = {
    backgroundColor: 'yellow',
}

const success: CSSProperties = {
    backgroundColor: css.font.color.success
}

const fail: CSSProperties = {
    backgroundColor: css.font.color.fail
}


export = utils.union(css, {

    getPanel() {
        return panel;
    },

    getBar(completeTrueFalseNone: boolean, isCurrent: boolean) {
        let style = item;
        if (completeTrueFalseNone === true) {
            style = css.get(style, success);
        } else if (completeTrueFalseNone === false) {
            style = css.get(style, fail);
        }

        if (isCurrent) {
            style = css.get(style, current);
        }
        return style;
    }
});