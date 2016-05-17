import css = require('../../../utils/css/css');
import utils = require('../../../utils/utils');

const styles = {

    panel: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    progress: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'stretch',
        height: '1vh',
    },


    menu: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        alignContent: 'stretch',
    },

    menuItem: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
    }

}

export = utils.union(css, {

    getPanel() {
        return styles.panel;
    },
    getProgress() {
        return styles.progress;
    },
    getMenu() {
        return styles.menu;
    },
    getMenuItem() {
        return styles.menuItem;
    }


});