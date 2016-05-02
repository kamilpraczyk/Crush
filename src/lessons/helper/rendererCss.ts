/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');
import React = require('react');
import utils = require('../../utils/utils');
import css = require('../../utils/css/css');
const {div} = React.DOM;



const style = {
    title: {
        marginTop: '5vh',
        paddingTop: '2vh',
        paddingBottom: '2vh',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    info: {
        color: '#777',
        textAlign: 'left',
        fontSize: '0.9em',
        marginBottom: '1vh',
    },

    itemInfo: {
        color: '#777',
        fontSize: '0.9em'
    },
    itemTo: {
        display: 'inline-block',
        minWidth: '40%'
    },
    itemSep: {
        display: 'inline-block',
        minWidth: '10%',
        paddingLeft: '2vh',
        paddingRight: '2vh'
    },
    itemLineSep: {
        marginTop: '5vh',
    }

}


export = {
    title: () => { return style.title },
    info: () => { return style.info },
    itemInfo: () => { return style.itemInfo },
    itemTo: () => { return style.itemTo },
    itemSep: () => { return style.itemSep },
    itemLineSep: () => { return style.itemLineSep },
}
