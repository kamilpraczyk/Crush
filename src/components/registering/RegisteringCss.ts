import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {
    panel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
        background: 'red',
        fontSize: css.font.fontSize.XL,
    },

    container: {
        display: 'flex',
        flexGrow: 1,
        margin: '2vmax',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: css.font.color.light,
        fontSize: css.font.fontSize.XL2,
        paddingBottom: '2vh'
    },


    line: {
        display: 'flex',
        maxWidth: '100%',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    },

    label: {
        color: css.font.color.light,
        flexGrow: 1,
        display: 'flex',
        fontSize: '22px',
        paddingTop: '1vh',
        paddingRight: '1vw',
        minWidth: '170px'
    },

    input: {
        flexGrow: 1,
        display: 'flex',
        maxWidth: '100%',
        fontSize: '22px',
        border: '1px solid #e6e6e6',
        borderRadius: '4px',
        backgroundColor: '#3CBC8D',
        color: css.font.color.light,
        marginBottom: '1vh',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
    }


}

export = utils.union(css, {
    getPanel() {
        return styles.panel;
    },

    getText() {
        return styles.text;
    },

    getContainer() {
        return styles.container;
    },


    getLine() {
        return styles.line;
    },
    getLabel() {
        return styles.label;
    },
    getInput() {
        return styles.input;
    }
});