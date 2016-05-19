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
        paddingLeft: '1vh',
        paddingRight: '1vh',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: css.font.fontSize.XL2,
        width: '100%',
        backgroundColor: 'rgb(221, 221, 221)'
    },

    info: {
        color: '#777',
        textAlign: 'left',
        fontSize: '0.7em',
        marginBottom: '1vh',
        paddingLeft: '1vh',
        paddingRight: '1vh',
        display: 'block',
        backgroundColor: 'transparent'
    },

    item: {
        paddingLeft: '1vh',
        paddingRight: '1vh',
        textAlign: 'left',
        display: 'block',
        backgroundColor: 'transparent'
    },

    itemInfo: {
        color: '#777',
        fontSize: '0.7em',
        paddingLeft: '1vh',
        paddingRight: '1vh',
        textAlign: 'left',
        display: 'block',
        backgroundColor: 'transparent'
    },
    wrapperItemTo: {
        display: 'flex',
        flexGrow: 1,
        flexFlow: 'row wrap'
    },
    itemTo: {
        display: 'flex',
        flexBasis: 0,
        justifyContent: 'center',
        flexGrow: 1,
        paddingLeft: '1vh',
        paddingRight: '1vh',
        backgroundColor: 'transparent'
    },
    itemSep: {
        display: 'flex',
        flexBasis: 0,
        alignItems: 'center',
        paddingLeft: '2vh',
        paddingRight: '2vh',
    },
    itemLineSep: {
        marginTop: '5vh',
    }

}


export = {
    title: () => { return style.title },
    info: () => { return style.info },
    item: () => { return style.item },
    itemInfo: () => { return style.itemInfo },
    wrapperItemTo: () => { return style.wrapperItemTo },
    itemTo: () => { return style.itemTo },
    itemSep: () => { return style.itemSep },
    itemLineSep: () => { return style.itemLineSep },
}
