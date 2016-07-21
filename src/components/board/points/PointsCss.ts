/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const panel: CSSProperties = {
    position: 'absolute',
    zIndex: 1,
    bottom: 90,
    right: 0,
    display: 'flex',
    flexFlow: 'column wrap',
    border: '1px solid black',
    borderRadius: css.borderRadius,
    backgroundColor: css.background.text.backgroundColor,
    minWidth: '10vmin',
    minHeight: '10vmin',

    cursor: css.cursor.pointer
}

const point: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    paddingTop: '1vh',
    paddingBottom: '1vh',
}

const status: CSSProperties = {
    display: 'flex',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    paddingBottom: '1vh',
    justifyContent: 'center',
}

const success: CSSProperties = {
    color: css.font.color.success
}

const fail: CSSProperties = {
    color: css.font.color.fail
}

export = utils.union(css, {

    getPanel() {
        return panel;
    },
    getPoints() {
        return point;
    },
    getStatusSuccess() {
        return css.get(status, success);
    },
    getStatusFail() {
        return css.get(status, fail);
    },
    getStatusUnknown() {
        return css.get(status);
    },
    getClassNameIconSuccess() {
        return 'moon-thumbs-up';
    },
    getClassNameIconFail() {
        return 'moon-thumbs-up2';
    },
    getClassNameIconUnknown() {
        return 'moon-question';
    }
});