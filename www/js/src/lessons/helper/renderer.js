"use strict";
/// <reference path="../../../typings/tsd.d.ts" />
var _ = require('underscore');
var React = require('react');
var utils = require('../../utils/utils');
var css = require('../../utils/css/css');
var _a = React.DOM, div = _a.div, button = _a.button;
var rendererCss = require('./rendererCss');
var cleanText = function (l) {
    l = utils.replaceAll(l, '<p>', '');
    l = utils.replaceAll(l, '</p>', '');
    l = utils.replaceAll(l, '</b>', '');
    return utils.replaceAll(l, '<b>', '');
};
exports.tList = function (o) {
    var aTitle = null;
    if (o.t) {
        var onClick = css.animate(utils.voice.read, cleanText(o.t));
        aTitle = button({
            style: rendererCss.title(!!onClick),
            dangerouslySetInnerHTML: {
                __html: o.t
            },
            onClick: onClick
        });
    }
    var aInfo = null;
    if (o.i) {
        var onClick = css.animate(utils.voice.read, cleanText(o.i));
        aInfo = button({
            style: rendererCss.info(!!onClick),
            dangerouslySetInnerHTML: {
                __html: o.i
            },
            onClick: onClick
        });
    }
    var aList = o.list.map(function (item) {
        if (item.l) {
            var onClick = css.animate(utils.voice.read, cleanText(item.l));
            return button({
                key: _.uniqueId('_'),
                style: rendererCss.item(!!onClick),
                dangerouslySetInnerHTML: {
                    __html: item.l
                },
                onClick: onClick
            });
        }
        else if (item.i) {
            var onClick = css.animate(utils.voice.read, cleanText(item.i));
            return button({
                key: _.uniqueId('_'),
                style: rendererCss.itemInfo(!!onClick),
                dangerouslySetInnerHTML: {
                    __html: item.i
                },
                onClick: onClick
            });
        }
        else if (item.eq || item.to || item.mute_to) {
            var to = item.eq || item.to || item.mute_to;
            var getTo = function (eq) {
                var onClick = !!item.mute_to ? null : css.animate(utils.voice.read, cleanText(eq));
                return button({
                    key: _.uniqueId('_'),
                    style: rendererCss.itemTo(!!onClick),
                    dangerouslySetInnerHTML: {
                        __html: eq
                    },
                    onClick: onClick
                });
            };
            var getSeparator = function () {
                var sep = item.eq ? '=' : item.to || item.mute_to ? ' ' : '-';
                return div({
                    style: rendererCss.itemSep()
                }, sep);
            };
            /*NODE: if array contain 3 items the middle one is a separator */
            var v1 = getTo(to[0]);
            var v2 = to.length >= 3 ? getTo(to[1]) : getSeparator();
            var v3 = to.length >= 3 ? getTo(to[2]) : getTo(to[1]);
            return div({
                style: rendererCss.wrapperItemTo(),
                key: _.uniqueId('_')
            }, v1, v2, v3);
        }
        else if (item.s) {
            return div({
                style: rendererCss.itemLineSep(),
                key: _.uniqueId('_')
            });
        }
        return null;
    });
    return div({
        key: _.uniqueId('_')
    }, aTitle, aInfo, _.compact(aList));
};
