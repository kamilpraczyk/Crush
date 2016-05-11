import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

let styles = {

    panel: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    header: {
        display: 'flex',
        margin: '2vh',
        marginBottom: 0,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },

    body: {
        display: 'flex',
        flex: 1,
        margin: '2vh',
        alignItems: 'stretch',
        flexDirection: 'column'
    },

    bodyContent: {
        display: 'flex',
        flex: 1,
        cursor: css.cursor.pointer,
        borderRadius: css.borderRadius,
        fontSize: css.font.fontSize.XL,
        backgroundColor: css.background.text.backgroundColor,
        alignItems: 'stretch',
        flexDirection: 'column'
    },

    text: {
        display: 'flex',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        cursor: css.cursor.pointer,
        borderRadius: css.borderRadius,
        fontSize: css.font.fontSize.XL,
        backgroundColor: css.background.text.backgroundColor,
    },

    footer: {
        display: 'flex'
    }

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getHeader() {
        return styles.header;
    },

    getBody() {
        return styles.body;
    },

    getBodyContent() {
        return styles.bodyContent;
    },

    getText() {
        return styles.text;
    },

    getFooter() {
        return styles.footer;
    },

});