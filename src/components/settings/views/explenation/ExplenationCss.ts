import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const styles = {

    panel: {
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        paddingBottom: '10vh',
        fontFamily: css.fontFamily.journal.fontFamily,
        color: css.font.color.ink,
        background: css.themes.standard.backgroundImageRead
    },

    title: {
        paddingTop: '5vh',
        padding: '2vh',
        paddingBottom: 0,
        textAlign: 'center',
        fontSize: css.font.fontSize.XL4,
    },

    body: {
        paddingTop: '2vh',
        paddingBottom: '5vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        margin: 'auto',
        color: css.font.color.ink
    },

    bodyContent: {
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        fontSize: css.font.fontSize.XL3,
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