/// <reference path="../../../../../typings/tsd.d.ts" />
import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');


const panel: CSSProperties = {
    width: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingBottom: '10vh',
    fontFamily: css.fontFamily.journal.fontFamily,
    color: css.font.color.ink,
    backgroundImage: css.themes.standard.backgroundImageRead
}
const title: CSSProperties = {
    paddingTop: '5vh',
    padding: '2vh',
    paddingBottom: 0,
    textAlign: 'center',
    fontSize: css.font.fontSize.XL4,
}
const body: CSSProperties = {
    paddingTop: '2vh',
    paddingBottom: '5vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    margin: 'auto',
    color: css.font.color.ink
}
const bodyContent: CSSProperties = {
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    fontSize: css.font.fontSize.XL3,
}


export = utils.union(css, {

    getPanel() {
        return panel;
    },
    getTitle() {
        return title;
    },
    getBody() {
        return body;
    },
    getBodyContent() {
        return bodyContent;
    },
});