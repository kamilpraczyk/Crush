/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');
import React = require('react');
import utils = require('../../utils/utils');
import css = require('../../utils/css/css');
const {div} = React.DOM;



const title: CSSProperties = {
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
}
const info: CSSProperties = {
    color: '#777',
    textAlign: 'left',
    fontSize: '0.7em',
    marginBottom: '1vh',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    display: 'block',
    backgroundColor: 'transparent'
}
const item: CSSProperties = {
    paddingLeft: '1vh',
    paddingRight: '1vh',
    textAlign: 'left',
    display: 'block',
    backgroundColor: 'transparent'
}
const itemInfo: CSSProperties = {
    color: '#777',
    fontSize: '0.7em',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    textAlign: 'left',
    display: 'block',
    backgroundColor: 'transparent'
}
const wrapperItemTo: CSSProperties = {
    display: 'flex',
    flexGrow: 1,
    flexFlow: 'row wrap'
}
const itemTo: CSSProperties = {
    display: 'flex',
    flexBasis: 0,
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: '1vh',
    paddingRight: '1vh',
    backgroundColor: 'transparent'
}
const noClick: CSSProperties = {
    opacity: '0.4'
}
const itemSep: CSSProperties = {
    display: 'flex',
    flexBasis: 0,
    alignItems: 'center',
    paddingLeft: '2vh',
    paddingRight: '2vh',
}
const itemLineSep: CSSProperties = {
    marginTop: '5vh',
}


export = {
    title: (isClick: boolean) => { return css.get(title, isClick ? {} : noClick) },
    info: (isClick: boolean) => { return css.get(info, isClick ? {} : noClick) },
    item: (isClick: boolean) => { return css.get(item, isClick ? {} : noClick) },
    itemInfo: (isClick: boolean) => { return css.get(itemInfo, isClick ? {} : noClick) },
    wrapperItemTo: () => { return wrapperItemTo },
    itemTo: (isClick: boolean) => { return css.get(itemTo, isClick ? {} : noClick) },
    itemSep: () => { return itemSep },
    itemLineSep: () => { return itemLineSep },
}
