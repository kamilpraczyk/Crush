import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        flexFlow: 'column wrap',
        border: '1px solid black',
        borderRadius: css.borderRadius,
        backgroundColor: css.background.text.backgroundColor,
        minWidth: '10vmin',
        minHeight: '10vmin',

        cursor: css.cursor.pointer
    },

    point: {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
    },

    status: {
        display: 'flex',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        paddingBottom: '1vh',
        justifyContent: 'center',
    },

    success: {
        color: css.font.color.success
    },

    fail: {
        color: css.font.color.fail
    },
}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getPoints() {
        return styles.point;
    },

    getStatusSuccess() {
        return css.get(styles.status, styles.success);
    },

    getStatusFail() {
        return css.get(styles.status, styles.fail);
    },

    getClassNameIconSuccess() {
        return 'moon-thumbs-up';
    },
    getClassNameIconFail() {
        return 'moon-thumbs-up2';
    },


});