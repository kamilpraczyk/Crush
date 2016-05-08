import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');

import {idsCss} from '../../../lessons/helper/constants';

let styles = {

    panel: {
        width: '100%',
        height: 'calc(100% - ' + css.status.height + ')',
        marginTop: css.status.height,
        display: 'table',
        fontSize: css.font.fontSize.XL
    },

    radio: {
        display: 'table-row',
        width: '100%',
        height: '100%'
    },

    radioPanel: {
        width: '100%',
        height: '100%'
    },

    nameContent: {

    },

    name: {
        textAlign: 'left',
        padding: '1vh',
        paddingLeft: '10vw',
        paddingRight: '10vw',
        backgroundColor: css.background.text.backgroundColor
    },

    listContent: {
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden'
    },

    list: {
        paddingTop: '2vh',
        margin: 'auto',
        textAlign: 'center',
        display: 'table',
    },
    item: {
        margin: 'auto',
        minWidth: '35%',
        marginLeft: 0,
        marginTop: '2vh',
        marginRight: '10vw',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        backgroundColor: css.background.text.backgroundColor
    },
    itemEven: {
        marginRight: 0,
        marginLeft: '10vw',
    },

    menu: {
        display: 'table-row',
        width: '100%'
    }

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },

    getRadio() {
        return styles.radio;
    },

    getRadioPanel() {
        return styles.radioPanel;
    },

    getMenu() {
        return styles.menu;
    },

    getContentName() {
        return styles.nameContent;
    },
    getName(id: string) {
        let style = styles.name;
        if (_.contains(id, idsCss.center)) {
            style = css.get(style, {
                textAlign: 'center'
            })
        }
        return style;
    },

    getContentList() {
        return styles.listContent;
    },

    getList() {
        return styles.list;
    },
    getItem(index: number, name: string, isCorrect: boolean, choosenName: string) {
        let style = css.get(styles.item, css.answer.normal);
        if (index % 2) {
            style = css.get(style, styles.itemEven);
        }

        if (choosenName === name) {
            if (isCorrect) {
                style = css.get(style, css.answer.good);
            } else {
                style = css.get(style, css.answer.bad);
            }
        }
        return style;
    },

});