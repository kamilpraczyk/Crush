/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

const panel: CSSProperties = {
    position: 'absolute',
    //backgroundImage: css.themes.standard.backgroundImageLesson,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#fff',
    backgroundImage: 'linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px), linear-gradient(#eee .1em, transparent .1em)',
    backgroundSize: '100% 1.2em'
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
    },

});