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
    to?: string[] //array of html separated by '-'
}

interface TList {
    t: string,
    i?: string,
    list: List[]
}

const cleanText = function (l: string) {
    return l.replace('<p>', '').replace('</p>', '').replace('</b>', '').replace('<b>', '');
}

export const tList = (o: TList) => {
    let aTitle: any = null;
    if (o.t) {
        aTitle = button({
            style: rendererCss.title(),
            dangerouslySetInnerHTML: {
                __html: o.t
            },
            onClick: css.animate(utils.voice.read, cleanText(o.t))
        });
    }

    let aInfo: any = null;
    if (o.i) {
        aInfo = button({
            style: rendererCss.info(),
            dangerouslySetInnerHTML: {
                __html: o.i
            },
            onClick: css.animate(utils.voice.read, cleanText(o.i))
        });
    }
    const aList = o.list.map((item) => {
        if (item.l) {
            return button({
                key: _.uniqueId('_'),
                style: rendererCss.item(),
                dangerouslySetInnerHTML: {
                    __html: item.l
                },
                onClick: css.animate(utils.voice.read, cleanText(item.l))
            });
        } else if (item.i) {
            return button({
                key: _.uniqueId('_'),
                style: rendererCss.itemInfo(),
                dangerouslySetInnerHTML: {
                    __html: item.i
                },
                onClick: css.animate(utils.voice.read, cleanText(item.i))
            })
        } else if (item.eq || item.to) {
            const to = item.eq || item.to;

            const getTo = function (eq: string) {
                return button({
                    key: _.uniqueId('_'),
                    style: rendererCss.itemTo(),
                    dangerouslySetInnerHTML: {
                        __html: eq
                    },
                    onClick: css.animate(utils.voice.read, cleanText(eq))
                });
            }

            const getSeparator = function () {
                const sep = item.eq ? '=' : item.to ? ' ' : '-'
                return div({
                    style: rendererCss.itemSep()
                }, sep);
            }
            /*NODE: if array contain 3 items the middle one is a separator */
            const v1 = getTo(to[0]);
            const v2 = to.length >= 3 ? getTo(to[1]) : getSeparator();
            const v3 = to.length >= 3 ? getTo(to[2]) : getTo(to[1]);

            return div({
                style: rendererCss.wrapperItemTo(),
                key: _.uniqueId('_'),
            }, v1, v2, v3);

        } else if (item.s) {
            return div({
                style: rendererCss.itemLineSep(),
                key: _.uniqueId('_'),
            })
        }
        return null;
    })

    return div({
        key: _.uniqueId('_'),
    }, aTitle, aInfo, _.compact(aList))
}




