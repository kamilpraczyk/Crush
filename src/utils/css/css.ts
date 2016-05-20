/// <reference path="../../../typings/tsd.d.ts" />
import _ = require("underscore");
const constFont = 5.5;
const constPoint = 'vmin'
const borderRadius = 10;
const borderWidth = 1;
const borderWidthUnit = 'vh';
const cursorPointer = 'pointer';
const cursorDefault = 'default';
const fontFamilyTime = 'Orbitron Medium';
import {displayIds} from '../../lessons/helper/constants';


const XS = constFont - 0.8 + constPoint;
const S = constFont - 0.7 + constPoint;
const M = constFont - 0.5 + constPoint;
const L = constFont - 0.3 + constPoint;
const XL = constFont + constPoint;
const XL2 = constFont + 0.2 + constPoint;
const XL3 = constFont + 0.5 + constPoint;
const XL4 = constFont + 2.0 + constPoint;


const get = function <T1, T2, T3, T4, T5>(a: T1, b?: T2, c?: T3, d?: T4, e?: T5): T1 & T2 & T3 & T4 & T5 {
    var res = {} as T1 & T2 & T3 & T4 & T5;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            _.extend(res, arguments[i]);
        }
    }
    return res;
}

const backgroundColourText = 'rgba(255, 255, 255, 0.60)';
let style = {

    get: get,


    animate: function (callback: Function, object?: any) {
        if (callback) {
            return function (e: any) {
                var call = object ? _.partial(callback, object, _.extend({}, e) as any) : callback;
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
            normal: '1px solid gray',
            active: '1px solid gray',
            focus: '1px solid gray'
        }
    },

    answer: {
        normal: {
            border: borderWidth + borderWidthUnit + ' solid transparent',
            cursor: 'pointer',
            borderRadius: borderRadius
        },
        good: {
            border: borderWidth + borderWidthUnit + ' solid #00FF00',
            cursor: 'pointer',
            borderRadius: borderRadius

        },
        bad: {
            border: borderWidth + borderWidthUnit + ' solid #FF0000',
            cursor: 'pointer',
            borderRadius: borderRadius
        }
    },

    background: {
        text: {
            backgroundColor: backgroundColourText
        }
    },


    themes: {
        standard: {
            backgroundImage: 'url("img/b2.jpg")',
        },

        quatro: {

        }
    },

    layout: {
        getPanel: () => {
            return {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                alignContent: 'stretch',
                fontSize: XL,
            }
        },

        getHeader: () => {
            return {
                display: 'flex',
                margin: '2vh',
                marginBottom: 0,
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center' //by default in center
            }
        },

        getBody: () => {
            return {
                display: 'flex',
                flexGrow: 1,
                paddingBottom: '2vw',
                paddingTop: '2vw',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                flexDirection: 'column',
                alignItems: 'stretch',
            }
        },

        getBodyContent: () => {
            return {
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                alignItems: 'stretch',// by default stretch
            }
        },

        getText: () => {
            return {
                display: 'flex',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                paddingTop: '1vh',
                paddingBottom: '1vh',
                cursor: cursorPointer,
                borderRadius: borderRadius,
                fontSize: XL,
                backgroundColor: backgroundColourText,
            }
        },

        getInstructions: (id?: string) => {
            let style = {
                display: 'flex',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                paddingTop: '1vh',
                paddingBottom: '1vh',
                cursor: cursorPointer,
                borderRadius: borderRadius,
                fontSize: XL,
            }
            if (id && id.indexOf(displayIds.digitalTime) !== -1) {
                let digitalTime = {
                    fontSize: XL3,
                    fontFamily: fontFamilyTime
                }
                style = get(style, digitalTime);
            }
            return style;
        },


        getFooter: () => {
            return {
                display: 'flex'
            }
        }

    }



}

export = style;