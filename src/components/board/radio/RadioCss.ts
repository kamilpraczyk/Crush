import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');

const styles = {

    panel: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
        fontSize: css.font.fontSize.XL
    },

    header: {
        display: 'flex',
        margin: '2vh',
        marginTop: '10vh',
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
        alignItems: 'center',
        flexDirection: 'column'
    },

    instructions: {
        textAlign: 'left',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        cursor: css.cursor.pointer,
        borderRadius: css.borderRadius
    },

    text: {
        textAlign: 'left',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        cursor: css.cursor.pointer,
        borderRadius: css.borderRadius,
        backgroundColor: css.background.text.backgroundColor
    },

    list: {
        paddingTop: '2vh',
        margin: 'auto',
        display: 'flex',
        flex: 1,
        flexDirection: 'column'

    },
    item: {
        margin: 'auto',
        minWidth: '35%',
        marginLeft: 0,
        marginTop: '2vh',
        marginRight: '10vw',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        backgroundColor: css.background.text.backgroundColor
    },
    itemEven: {
        marginRight: 0,
        marginLeft: '10vw',
    },

    footer: {
        display: 'flex',
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

    getFooter() {
        return styles.footer;
    },


    getText() {
        return styles.text;
    },

    getInstructions() {
        return styles.instructions;
    },


    getList() {
        return styles.list;
    },
    getItem(index: number, name: string, isCorrect: boolean, choosenName: string) {
        let style = css.get(styles.item, css.answer.normal);
        if (index % 2) {
            style = css.get(style, styles.itemEven);
        }

        if (choosenName === name) {
            if (isCorrect) {
                style = css.get(style, css.answer.good);
            } else {
                style = css.get(style, css.answer.bad);
            }
        }
        return style;
    },

});