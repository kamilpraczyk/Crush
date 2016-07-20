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
        backgroundColor: 'transparent'
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
    noClick: {
        opacity: '0.4'
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
    title: (isClick: boolean) => { return css.get(style.title, isClick ? {} : style.noClick) },
    info: (isClick: boolean) => { return css.get(style.info, isClick ? {} : style.noClick) },
    item: (isClick: boolean) => { return css.get(style.item, isClick ? {} : style.noClick) },
    itemInfo: (isClick: boolean) => { return css.get(style.itemInfo, isClick ? {} : style.noClick) },
    wrapperItemTo: () => { return style.wrapperItemTo },
    itemTo: (isClick: boolean) => { return css.get(style.itemTo, isClick ? {} : style.noClick) },
    itemSep: () => { return style.itemSep },
    itemLineSep: () => { return style.itemLineSep },
}
