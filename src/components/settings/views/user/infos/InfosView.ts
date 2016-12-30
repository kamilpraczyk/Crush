import dictionary = require('../../../../../utils/dictionary');
import React = require('react');
import CommonCss = require('../CommonCss');
import { isBrowserSupported } from '../../../../../utils/utils';
const {div, label} = React.DOM;


function render(): any {
    return null;
    /*
        function getBox() {
    
            return div({
                style: CommonCss.getBox()
            },
                div({ style: CommonCss.getBoxSplit() },
                      !isBrowserSupported() ? CommonCss.makeBoxLine(dictionary.INFO_BROWSER, null) : null
                )
            );
        }
    
        return div({
            style: CommonCss.getPanel()
        }, div({
            style: CommonCss.getContainer()
        }, getBox()));*/
}



export =  render;