/// <reference path="../../../../../typings/tsd.d.ts" />
import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const styles = {

    panel: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexFlow: 'row nowrap',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    item: {
        display: 'inline-flex',
        flexGrow: 1,
        backgroundColor: '#ddd',
        borderLeft: '1px solid gray',
    },
    current: {
        backgroundColor: 'yellow',
    },
    success: {
        backgroundColor: css.font.color.success
    },
    fail: {
        backgroundColor: css.font.color.fail
    },
}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getBar(completeTrueFalseNone: boolean, isCurrent: boolean) {
        let style = styles.item;
        if (completeTrueFalseNone === true) {
            style = css.get(style, styles.success);
        } else if (completeTrueFalseNone === false) {
            style = css.get(style, styles.fail);
        }

        if (isCurrent) {
            style = css.get(style, styles.current);
        }
        return style;
    }

});