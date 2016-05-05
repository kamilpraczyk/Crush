/// <reference path="../../../typings/tsd.d.ts" />
import _ = require('underscore');
import React = require('react');
import utils = require('../../utils/utils');
import css = require('../../utils/css/css');
const {div} = React.DOM;
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
    const aTitle = div({
        style: rendererCss.title(),
        dangerouslySetInnerHTML: {
            __html: o.t
        },
        onClick: css.animate(utils.voice.read, cleanText(o.t))
    });

    let aInfo: any = null;
    if (o.i) {
        aInfo = div({
            style: rendererCss.info(),
            dangerouslySetInnerHTML: {
                __html: o.i
            },
            onClick: css.animate(utils.voice.read, cleanText(o.i))
        });
    }
    const aList = o.list.map((item) => {
        if (item.l) {
            return div({
                key: _.uniqueId('_'),
                dangerouslySetInnerHTML: {
                    __html: item.l
                },
                onClick: css.animate(utils.voice.read, cleanText(item.l))
            });
        } else if (item.i) {
            return div({
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
                return div({
                    key: _.uniqueId('_'),
                    style: rendererCss.itemTo(),
                    dangerouslySetInnerHTML: {
                        __html: eq
                    },
                    onClick: css.animate(utils.voice.read, cleanText(eq))
                });
            }

            const getSeparator = function (key: string) {
                const sep = item.eq ? '=' : item.to ? ' ' : '-'
                return div({
                    key: '_sep' + key,
                    style: rendererCss.itemSep()
                }, sep);
            }
            return div({
                key: _.uniqueId('_'),
            }, getTo(to[0]), getSeparator(to[0]), getTo(to[1]))

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




