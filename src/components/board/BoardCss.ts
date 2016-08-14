/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const panel: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#000',
    backgroundImage: css.themes.standard.backgroundImageBoard,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const text: CSSProperties = {
    fontSize: css.font.fontSize.XL
}

export = utils.union(css, {

    getPanel(): CSSProperties {
        return css.get(panel);
    },
    getText(): CSSProperties {
        return css.get(text);
    }
});