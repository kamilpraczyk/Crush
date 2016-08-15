"use strict";
/// <reference path="../../../typings/tsd.d.ts" />
var _ = require("underscore");
var constFont = 5.5;
var constPoint = 'vmin';
var borderRadius = 10;
var borderWidth = 3;
var cursorPointer = 'pointer';
var cursorDefault = 'default';
var fontFamilyTime = 'Orbitron Medium';
var fontFamilyWriting = 'standard';
var fontFamilyJournal = 'journal';
var fontFamilyCharcoal = 'charcoal';
var constants_1 = require('../../lessons/helper/constants');
var micro = constFont - 1.8 + constPoint;
var XS = constFont - 0.8 + constPoint;
var S = constFont - 0.7 + constPoint;
var M = constFont - 0.5 + constPoint;
var L = constFont - 0.3 + constPoint;
var XL = constFont + constPoint;
var XL2 = constFont + 0.2 + constPoint;
var XL3 = constFont + 0.5 + constPoint;
var XL4 = constFont + 0.8 + constPoint;
var get = function (a, b, c, d, e) {
    var res = {};
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            _.extend(res, arguments[i]);
        }
    }
    return res;
};
function getSize() {
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var x = w.innerWidth || e.clientWidth || g.clientWidth;
    var y = w.innerHeight || e.clientHeight || g.clientHeight;
    return {
        x: x,
        y: y
    };
}
function isMobile() {
    var size = getSize();
    if (size.x < 450 || size.y < 450) {
        return true;
    }
    return false;
}
var backgroundColourText = 'rgba(255, 255, 255, 0.60)';
var style = {
    get: get,
    isMobile: isMobile,
    animate: function (callback, object) {
        if (callback) {
            return function (e) {
                var call = object ? _.partial(callback, object, _.extend({}, e)) : callback;
                call();
            };
        }
        return null;
    },
    cursor: {
        normal: cursorDefault,
        pointer: cursorPointer
    },
    icons: {
        left: 'icon-left-open',
        right: 'icon-right-open',
        random: 'moon-shuffle',
        success: 'moon-thumbs-up',
        fail: 'moon-thumbs-up2',
        menu: 'moon-menu2',
        help: 'moon-support',
        user: 'moon-user2',
        lessons: 'moon-drawer3',
        grammar: 'moon-file'
    },
    font: {
        fontSize: {
            micro: micro,
            XS: XS,
            S: S,
            M: M,
            L: L,
            XL: XL,
            XL2: XL2,
            XL3: XL3,
            XL4: XL4
        },
        color: {
            normal: 'white',
            hint: '#777',
            success: '#00FF00',
            fail: '#FF0000',
            average: 'orange',
            ink: '#99cdff'
        }
    },
    borderRadius: borderRadius,
    button: {
        color: {
            normal: '#F8F8F2',
            active: '#F8F8F2',
            focus: '#F8F8F2',
            disabled: '#999'
        },
        border: {
            normal: borderWidth + 'px solid #313131',
            normalGuess: borderWidth + 'px solid #313131',
            active: borderWidth + 'px solid #2b8182',
            focus: borderWidth + 'px solid #313131',
            success: borderWidth + 'px solid #00FF00',
            fail: borderWidth + 'px solid  #FF0000',
            disabled: borderWidth + 'px solid #313131'
        },
        backgroundColor: {
            normal: '#252526',
            normalGuess: 'transparent',
            active: '#00999D',
            focus: '#272822',
            disabled: '#252526'
        },
        backgroundImage: {
            normalGuess: 'linear-gradient(rgba(0,0,0, 0.1),rgba(7,7,7, 0.1))',
            normal: 'linear-gradient(#4b4c4e, #1f1f21)',
            active: null,
            focus: null,
            disabled: null
        },
        radius: {
            borderRadius: 28
        }
    },
    background: {
        text: {
            backgroundColor: backgroundColourText
        }
    },
    fontFamily: {
        time: {
            fontFamily: fontFamilyTime
        },
        writing: {
            fontFamily: fontFamilyWriting
        },
        journal: {
            fontFamily: fontFamilyJournal
        },
        charcoal: {
            fontFamily: fontFamilyCharcoal
        }
    },
    themes: {
        standard: {
            backgroundImageRead: 'url("img/chalkboard1.jpg")',
            backgroundImageBoard: 'url("img/chalkboard2.jpg")'
        }
    },
    layout: {
        getPanel: function () {
            var style = {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                alignContent: 'stretch',
                fontSize: XL,
                fontFamily: fontFamilyWriting
            };
            return style;
        },
        getHeader: function () {
            var style = {
                display: 'flex',
                margin: '2vh',
                marginBottom: 0,
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center' //by default in center
            };
            return style;
        },
        getBody: function () {
            var style = {
                display: 'flex',
                flexGrow: 1,
                paddingBottom: '2vw',
                paddingTop: '2vw',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                flexDirection: 'column',
                alignItems: 'stretch'
            };
            return style;
        },
        getBodyContent: function () {
            var s = {
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                alignItems: 'stretch'
            };
            return s;
        },
        getInstructions: function (id) {
            var style = {
                display: 'flex',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                paddingTop: '1vh',
                paddingBottom: '1vh',
                cursor: cursorPointer,
                borderRadius: borderRadius,
                marginBottom: '1vh',
                fontSize: XL
            };
            if (id && constants_1.isId.isDigitalTime(id)) {
                var digitalTime = {
                    fontSize: XL3,
                    fontFamily: fontFamilyTime,
                    backgroundColor: 'black',
                    color: 'white'
                };
                style = get(style, digitalTime);
            }
            return style;
        },
        getFooter: function () {
            var style = {
                display: 'flex'
            };
            return style;
        }
    }
};
module.exports = style;
