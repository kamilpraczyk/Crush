/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');
import React = require('react');

const panel: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    right: 0,
    color: css.font.color.dark,
    backgroundColor: 'rgba(255,255,255,0.9)',

    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch',
    fontSize: css.font.fontSize.XL,

    WebkitTransition: 'right .4s ease-in-out .2s',
    MozTransition: 'right .4s ease-in-out .2s',
    OTransition: 'right .4s ease-in-out .2s',
    transition: 'right .4s ease-in-out .2s',
}
const main: CSSProperties = {
    display: 'flex',
    flexGrow: 7,
    flexDirection: 'row',
    alignItems: 'stretch',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
}
const menu: CSSProperties = {
    display: 'flex',
    marginBottom: '2px',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
    width: '22%',

}

const menuMinimalized: CSSProperties = {
}

const item: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
}

export = utils.union(css, {

    getPanel(isMinimalized: boolean) {
        return css.get(panel, isMinimalized ? { right: '-100%' } : { right: 0 });
    },
    getMain() {
        return main;
    },
    getMenu(isMenuMinimalized: boolean) {
        return css.get(menu, isMenuMinimalized ? menuMinimalized : null);
    },
    getItem() {
        return item;
    }
});