import css = require('../../utils/css/css');
import utils = require('../../utils/utils');

let styles = {
    
    panel :{
        
    },
    
    item : {

    }
}

export = utils.union(css, {
    
    getPanel(){
        return styles.panel;
    },
    
    getItem(){
        return styles.item;
    }



});