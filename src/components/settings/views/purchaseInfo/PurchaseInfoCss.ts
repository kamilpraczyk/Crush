import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const styles = {

    panel: {
        display: 'flex',
        width: '100%',
        flexFlow: 'row wrap',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    line: {
        display: 'inline-flex',
        flexGrow: 1,
        flexFlow: 'row wrap',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    item: {
        display: 'flex',
        alignSelf: 'center',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        fontSize: css.font.fontSize.XL,
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap'
    },


}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },
    getLine() {
        return styles.line;
    },
    getItem() {
        return styles.item;
    },

    getIconSubscribe() {
        return 'moon-play2';
    }


});