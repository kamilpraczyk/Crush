/// <reference path="../../../../../typings/tsd.d.ts" />
import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');
import React = require('react');
const {div, label} = React.DOM;


const panel: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
    fontSize: css.font.fontSize.XL,
}
const container: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    margin: '2vmax',
    marginBottom: '1vmax',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width : 'calc(100% - 4vmax)'
}
const text: CSSProperties = {
    color: css.font.color.normal,
    fontSize: css.font.fontSize.XL2,
    paddingBottom: '2vh',
    justifyContent: 'flex-start',
}
const box: CSSProperties = {
    display: 'flex',
    width : '100%',
    maxWidth: '100%',
    paddingTop: '2vh',
    paddingBottom: '1vh',
    flexDirection : 'column',
}
const boxSplit: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    maxWidth: '100%',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    flexDirection: 'column',
    justifyContent: 'flex-end'
}
const boxLine: CSSProperties = {
    display: 'flex',
    maxWidth: '100%',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
}
const boxLabel: CSSProperties = {
    color: css.font.color.normal,
    flexGrow: 1,
    alignItems: 'flex-start',
    display: 'flex',
    paddingRight: '1vw',
    minWidth: '170px',
    maxWidth: '100%'
}
const boxInput: CSSProperties = {
    flexGrow: 1,
    display: 'flex',
    flexBasis: '50%',
    maxWidth: '100%',
    border: '1px solid #e6e6e6',
    borderRadius: '4px',
    backgroundColor: '#3CBC8D',
    color: css.font.color.normal,
    marginBottom: '1vh',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    paddingTop: '1vh',
    paddingBottom: '1vh',
    fontSize: '0.7em',
    width: '100%'
}


export = utils.union(css, {
    getPanel() {
        return panel;
    },
    getText() {
        return text;
    },
    getContainer() {
        return container;
    },
    getBox() {
        return box;
    },
    getBoxSplit() {
        return boxSplit;
    },
    getBoxLine() {
        return boxLine;
    },
    getBoxLabel() {
        return boxLabel;
    },
    getBoxInput() {
        return css.get(boxInput);
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