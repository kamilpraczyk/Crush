/// <reference path="../../../../typings/tsd.d.ts" />
import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const textShadow = '2px 2px 5px black';

const text: CSSProperties = {
    color: css.font.color.normal,
    fontSize: css.font.fontSize.XL2,
    paddingBottom: '2vh',
    textShadow: textShadow
}
const content: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const panel: CSSProperties = {
    position: 'absolute',
    zIndex : 100,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    fontSize: css.font.fontSize.XL,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}


export = utils.union(css, {
    getPanel() {
        return css.get(panel);
    },
    getContent() {
        return css.get(content);
    },
    getText() {
        return css.get(text);
    }
});