import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const styles = {

    panel: {
        width: '100%',
    },

    title: {
        paddingTop: '5vh',
        padding: '2vh',
        paddingBottom: 0,
        textAlign: 'center',
        fontSize: css.font.fontSize.XL2,
    },

    body: {
        paddingTop: '2vh',
        paddingBottom: '5vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        margin: 'auto',
    },

    bodyContent: {
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        fontSize: css.font.fontSize.XL,
    }

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
    getBodyContent() {
        return styles.bodyContent;
    },
});