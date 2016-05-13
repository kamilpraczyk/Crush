import css = require('../../../../utils/css/css');
import utils = require('../../../../utils/utils');

let styles = {
    
    panel :{
        width : '100%',
        height : '100%'
        
    },
    
    button : {
      color : '#AAA'
    }
}

export = utils.union(css, {
    
    getPanel(){
        return styles.panel;
    },
    
    getButton(){
        return styles.button;
    }



});