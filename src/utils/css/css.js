var _ = require("underscore");
var constFont = 5.5;
var constPoint = 'vmin';
var borderRadius = 10;
var borderWidth = 1;
var borderWidthUnit = 'vh';
var cursorPointer = 'pointer';
var cursorDefault = 'default';
var fontFamilyTime = 'Orbitron Medium';
var constants_1 = require('../../lessons/helper/constants');
var XS = constFont - 0.8 + constPoint;
var S = constFont - 0.7 + constPoint;
var M = constFont - 0.5 + constPoint;
var L = constFont - 0.3 + constPoint;
var XL = constFont + constPoint;
var XL2 = constFont + 0.2 + constPoint;
var XL3 = constFont + 0.5 + constPoint;
var XL4 = constFont + 2.0 + constPoint;
var get = function (a, b, c, d, e) {
    var res = {};
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            _.extend(res, arguments[i]);
        }
    }
    return res;
};
var backgroundColourText = 'rgba(255, 255, 255, 0.60)';
var style = {
    get: get,
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
    font: {
        fontSize: {
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
            light: 'white',
            default: 'black',
            select: 'blue',
            hint: 'gray',
            disable: 'lightgray',
            success: 'green',
            fail: 'red'
        }
    },
    borderRadius: borderRadius,
    borderWidth: borderWidth,
    borderWidthUnit: borderWidthUnit,
    button: {
        background: {
            normal: 'black',
            active: 'orange',
            focus: 'blue'
        },
        color: {
            normal: 'white',
            active: 'white',
            focus: 'white'
        },
        border: {
            normal: '5px solid gray',
            active: '5px solid gray',
            focus: '5px solid gray',
            success: '5px solid #00FF00',
            fail: '5px solid  #FF0000',
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
        }
    },
    themes: {
        standard: {
            backgroundImageLesson: 'url("img/b2.png")',
            backgroundImageBeer: 'url("img/beer.png")',
        }
    },
    layout: {
        getPanel: function () {
            return {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                alignContent: 'stretch',
                fontSize: XL,
            };
        },
        getHeader: function () {
            return {
                display: 'flex',
                margin: '2vh',
                marginBottom: 0,
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            };
        },
        getBody: function () {
            return {
                display: 'flex',
                flexGrow: 1,
                paddingBottom: '2vw',
                paddingTop: '2vw',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                flexDirection: 'column',
                alignItems: 'stretch',
            };
        },
        getBodyContent: function () {
            return {
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                alignItems: 'stretch',
            };
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
                fontSize: XL,
            };
            if (id && constants_1.isId.isDigitalTime(id)) {
                var digitalTime = {
                    fontSize: XL3,
                    fontFamily: fontFamilyTime,
                    background: 'black',
                    color: 'white'
                };
                style = get(style, digitalTime);
            }
            return style;
        },
        getFooter: function () {
            return {
                display: 'flex'
            };
        }
    }
};
module.exports = style;
