"use strict";
var React = require('react');
var css = require('../../utils/css/css');
var div = React.DOM.div;
var title = {
    color: css.font.color.normal,
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
};
var info = {
    color: '#777',
    textAlign: 'left',
    fontSize: '0.7em',
    marginBottom: '1vh',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    display: 'block',
    backgroundColor: 'transparent'
};
var item = {
    color: css.font.color.normal,
    paddingLeft: '1vh',
    paddingRight: '1vh',
    textAlign: 'left',
    display: 'block',
    backgroundColor: 'transparent'
};
var itemInfo = {
    color: '#777',
    fontSize: '0.7em',
    paddingLeft: '1vh',
    paddingRight: '1vh',
    textAlign: 'left',
    display: 'block',
    backgroundColor: 'transparent'
};
var wrapperItemTo = {
    color: css.font.color.normal,
    display: 'flex',
    flexGrow: 1,
    flexFlow: 'row wrap'
};
var itemTo = {
    color: css.font.color.normal,
    display: 'flex',
    flexBasis: 0,
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: '1vh',
    paddingRight: '1vh',
    backgroundColor: 'transparent'
};
var noClick = {
    color: css.font.color.normal,
    opacity: '0.4'
};
var itemSep = {
    color: css.font.color.normal,
    display: 'flex',
    flexBasis: 0,
    alignItems: 'center',
    paddingLeft: '2vh',
    paddingRight: '2vh'
};
var itemLineSep = {
    color: css.font.color.normal,
    marginTop: '5vh'
};
module.exports = {
    title: function (isClick) { return css.get(title, isClick ? {} : noClick); },
    info: function (isClick) { return css.get(info, isClick ? {} : noClick); },
    item: function (isClick) { return css.get(item, isClick ? {} : noClick); },
    itemInfo: function (isClick) { return css.get(itemInfo, isClick ? {} : noClick); },
    wrapperItemTo: function () { return wrapperItemTo; },
    itemTo: function (isClick) { return css.get(itemTo, isClick ? {} : noClick); },
    itemSep: function () { return itemSep; },
    itemLineSep: function () { return itemLineSep; }
};
