/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');
import React = require('react');
import utils = require('../../utils/utils');
import css = require('../../utils/css/css');
const {div, button} = React.DOM;
import rendererCss = require('./rendererCss');

interface List {
    l?: string //html line
    i?: string //html info
    s?: string //separator line
    eq?: string[] //array of html separated by '='
    to?: string[] //array of html separated by ' '
    mute_to?: string[]
}

interface TList {
    t?: string,
    i?: string,
    list: List[]
}

const cleanText = function (l: string) {
    l = utils.replaceAll(l, '<p>', '');
    l = utils.replaceAll(l, '</p>', '');
    l = utils.replaceAll(l, '</b>', '');
    return utils.replaceAll(l, '<b>', '');
}

function getTitle(o: TList) {
    if (!o.t) return null;
    const onClick = () => utils.voice.read(cleanText(o.t));
    return button({
        style: rendererCss.title(!!onClick),
        dangerouslySetInnerHTML: {
            __html: o.t
        },
        onClick
    });
}

function getInfo(o: TList) {
    if (!o.i) return null;
    const onClick = () => utils.voice.read(cleanText(o.i));
    return button({
        style: rendererCss.info(!!onClick),
        dangerouslySetInnerHTML: {
            __html: o.i
        },
        onClick
    });
}

function getLine(item: List, key: number) {
    if (!item.l) return null;
    const onClick = () => utils.voice.read(cleanText(item.l));
    return button({
        key: 'line' + key,
        style: rendererCss.item(!!onClick),
        dangerouslySetInnerHTML: {
            __html: item.l
        },
        onClick
    });
}

function getLineInfo(item: List, key: number) {
    if (!item.i) return null;
    const onClick = () => utils.voice.read(cleanText(item.i));
    return button({
        key: 'lineInfo' + key,
        style: rendererCss.info(!!onClick),
        dangerouslySetInnerHTML: {
            __html: item.i
        },
        onClick
    });
}

function getLineSeparator(item: List, key: number) {
    if (!item.s) return null;
    return div({
        style: rendererCss.itemLineSep(),
        key: 'separ' + key
    })
}

function getTo(text: string, isMute: boolean) {
    const onClick = isMute ? null : () => utils.voice.read(cleanText(text));
    return button({
        style: rendererCss.itemTo(!!onClick),
        dangerouslySetInnerHTML: {
            __html: text
        },
        onClick
    });
}


function getEQ(to: string[], key: number, sep: string, isMute: boolean) {


    const separator = div({
        style: rendererCss.itemSep()
    }, sep);
    /*NODE: if array contain 3 items the middle one is a separator */
    const v1 = getTo(to[0], isMute);
    const v2 = to.length >= 3 ? getTo(to[1], isMute) : separator;
    const v3 = to.length >= 3 ? getTo(to[2], isMute) : getTo(to[1], isMute);

    return div({
        style: rendererCss.wrapperItemTo(),
        key: 'eq' + key
    }, v1, v2, v3);
}

function getList(o: TList) {
    return _.compact(o.list.map((item, key) => {
        if (item.l) return getLine(item, key);
        else if (item.i) return getLineInfo(item, key);
        else if (item.eq) return getEQ(item.eq, key, '=', false);
        else if (item.to) return getEQ(item.to, key, ' ', false);
        else if (item.mute_to) return getEQ(item.mute_to, key, ' ', true);
        else if (item.s) return getLineSeparator(item, key);
        return null;
    }))
}

function logExpTest(o: TList) {
    o.i && console.info(o.i.toString());
    o.t && console.info(o.t.toString());

    if (o.list) {
        o.list.map(item => {
            item.l && console.info(item.l.toString());
            item.i && console.info(item.i.toString());
            item.eq && console.info(item.eq.join(' '));
            item.to && console.info(item.to.join(' '));
            item.mute_to && console.info(item.mute_to.join(' '));
        })
    }
}

export const tList = (o: TList) => {
    //logExpTest(o);
    return div({
        key: _.uniqueId('key') // this will be produced once on start app
    },
        getTitle(o),
        getInfo(o),
        getList(o)
    )
}




