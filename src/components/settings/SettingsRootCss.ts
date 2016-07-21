/// <reference path="../../../typings/tsd.d.ts" />
import css = require('../../utils/css/css');
import utils = require('../../utils/utils');
import React = require('react');



const panel: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    color: css.font.color.dark,
    backgroundColor: 'rgba(255,255,255,0.9)',

    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    alignContent: 'stretch',
    fontSize: css.font.fontSize.XL,
}
const panelSelection: CSSProperties = {
    display: 'flex',
    flexGrow: 7,
    flexDirection: 'column',
    alignItems: 'stretch'
}
const panelRoot: CSSProperties = {
    display: 'flex',
    marginBottom: '2px',
    backgroundColor: css.button.background.normal,
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
}
const panelRootMinimalized: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
}
const rootItem: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
}

export = utils.union(css, {

    getPanel() {
        return panel;
    },
    getPanelSelection() {
        return panelSelection;
    },
    getPanelRoot(isMenuMinimalized: boolean) {
        return css.get(panelRoot, isMenuMinimalized ? panelRootMinimalized : {});
    },
    getRootItem() {
        return rootItem;
    }
});