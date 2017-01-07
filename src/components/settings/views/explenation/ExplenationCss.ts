import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

const panel: CSSProperties = {
    width: '100%',
    paddingBottom: '10vh',
    fontFamily: css.fontFamily.journal.fontFamily,
    color: css.font.color.ink
}
const title: CSSProperties = {
    paddingTop: '5vh',
    padding: '2vh',
    paddingBottom: 0,
    textAlign: 'center',
    fontFamily: css.fontFamily.charcoal.fontFamily,
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
    marginBottom: 30,
    fontSize: css.font.fontSize.XL3,
}


export = utils.union(css, {
    getPanel: () => css.get(panel),
    getTitle: () => css.get(title),
    getBody: () => css.get(body),
    getBodyContent: () => css.get(bodyContent)
});