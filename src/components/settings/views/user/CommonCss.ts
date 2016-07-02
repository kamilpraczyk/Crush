import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');
import React = require('react');
const {div, label} = React.DOM;

let styles = {
    panel: {
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
        paddingBottom: '2vh',
        justifyContent: 'left',
    },

    box: {
        display: 'flex',
        maxWidth: '100%',
        paddingTop: '2vh',
        flexFlow: 'row wrap',
        paddingBottom: '1vh',
    },

    boxSplit: {
        display: 'flex',
        flexGrow: 1,
        maxWidth: '100%',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    boxLine: {
        display: 'flex',
        maxWidth: '100%',
        flexFlow: 'row wrap',
        justifyContent: 'space-between'
    },

    boxLabel: {
        color: css.font.color.light,
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        paddingRight: '1vw',
        minWidth: '170px',
        maxWidth: '100%'
    },

    boxInput: {
        flexGrow: 1,
        display: 'flex',
        flexBasis: '50%',
        maxWidth: '100%',
        border: '1px solid #e6e6e6',
        borderRadius: '4px',
        backgroundColor: '#3CBC8D',
        color: css.font.color.light,
        marginBottom: '1vh',
        paddingLeft: '1vw',
        paddingRight: '1vw',
        paddingTop: '1vh',
        paddingBottom: '1vh',
        width: '100%'
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
    getBox() {
        return styles.box;
    },
    getBoxSplit() {
        return styles.boxSplit;
    },
    getBoxLine() {
        return styles.boxLine;
    },
    getBoxLabel() {
        return styles.boxLabel;
    },
    getBoxInput() {
        return css.get(styles.boxInput);
    },
    makeBoxLine(text: string, inputEl: any) {
        return div({
            style: this.getBoxLine()
        },
            label({
                style: this.getBoxLabel()
            }, text),
            inputEl
        );
    }
});