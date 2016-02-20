import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');
import _ = require('underscore');

const backgroundColor = 'rgba(250,250,250,0.5)'

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
        backgroundColor: backgroundColor
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
        backgroundColor: backgroundColor
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
    getName() {
        return styles.name;
    },

    getContentList() {
        return styles.listContent;
    },

    getList() {
        return styles.list;
    },
    getItem(index: number, name: string, correctNames: Array<string>, choosenName: string) {
        let style = css.get(styles.item, css.answer.normal);
        if (index % 2) {
            style = css.get(style, styles.itemEven);
        }

        if (choosenName === name) {
            if (_.contains(correctNames, name)) {
                style = css.get(style, css.answer.good);
            } else {
                style = css.get(style, css.answer.bad);
            }
        }
        return style;
    },

});