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
    marginRight: '1vmax',
    marginBottom: '1vmax',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 'calc(100% - 3vmax)'
}
const text: CSSProperties = {
    color: css.font.color.normal,
    fontSize: css.font.fontSize.XL2,
    paddingBottom: '2vh',
    justifyContent: 'flex-start',
}
const box: CSSProperties = {
    display: 'flex',
    width: '100%',
    maxWidth: '100%',
    paddingTop: '2vh',
    paddingBottom: '1vh',
    flexDirection: 'column',
}
const boxSplit: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    maxWidth: '100%',
    paddingLeft: '1vw',
    paddingRight: '1vw',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start'
}
const boxSplitToCenter: CSSProperties = {
    justifyContent: 'center'
}

const boxLine: CSSProperties = {
    display: 'flex',
    maxWidth: '100%',
    width: '100%',
    flexFlow: 'row wrap',
    justifyContent: 'space-between'
}
const boxLabel: CSSProperties = {
    color: css.font.color.normal,
    alignItems: 'flex-start',
    display: 'flex',
    paddingRight: '1vw',
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
const error: CSSProperties = {
    color: '#ff0050'

}

export = utils.union(css, {
    getPanel(isHidden?: boolean) {
        return css.get(panel, isHidden ? { display: 'none' } : null);
    },
    getText() {
        return css.get(text);
    },
    getContainer() {
        return css.get(container);
    },
    getBox() {
        return css.get(box);
    },
    getBoxSplit() {
        return css.get(boxSplit);
    },
    getBoxSplitToCenter() {
        return css.get(boxSplit, boxSplitToCenter);
    },
    getBoxLine(isError?: boolean) {
        return css.get(boxLine, isError ? error : null);
    },
    getBoxLineRight() {
        return css.get(boxLine, { justifyContent: 'flex-end' });
    },
    getBoxLabel() {
        return css.get(boxLabel);
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