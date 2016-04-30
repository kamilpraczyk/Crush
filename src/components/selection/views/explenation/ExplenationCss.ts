import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const styles = {

    panel: {
        height: '100%',
        maxWidth: '100%',
        maxHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        paddingLeft: '5vw',
        paddingRight: '5vw',
        margin: 'auto',
    },

    title: {
        paddingTop: '1hv',
        fontSize: css.font.fontSize.XL,
        textAlign: 'center'
    },

    body: {
        fontSize: css.font.fontSize.XL,
        width: '100%',
        height: '100%',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap'
    },

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },
    getTitle() {
        return styles.title;
    },
    getBody() {
        return styles.body;
    },

});