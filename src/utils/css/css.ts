/// <reference path="../../../typings/tsd.d.ts" />
import _ = require("underscore");
const constFont = 5.5;
const constPoint = 'vmin'
const borderRadius = 10;
const borderWidth = 1;
const borderWidthUnit = 'vh';
let style = {

    get: function <T1, T2, T3, T4, T5>(a: T1, b?: T2, c?: T3, d?: T4, e?: T5): T1 & T2 & T3 & T4 & T5 {
        var res = {} as T1 & T2 & T3 & T4 & T5;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i]) {
                _.extend(res, arguments[i]);
            }
        }
        return res;
    },


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
        normal: 'default',
        pointer: 'pointer'
    },

    font: {
        fontSize: {
            XS: constFont - 0.8 + constPoint,
            S: constFont - 0.7 + constPoint,
            M: constFont - 0.5 + constPoint,
            L: constFont - 0.3 + constPoint,
            XL: constFont + constPoint,
            XL2: constFont + 0.2 + constPoint,
            XL3: constFont + 0.5 + constPoint,
            XL4: constFont + 2.0 + constPoint
        },
        color: {
            light: 'white',
            default: 'black',
            select: 'blue',
            hint: 'gray',
            disable: 'lightgray',
            success : 'green',
            fail : 'red'
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
            backgroundColor: 'rgba(255, 255, 255, 0.60)'
        }
    },


    themes: {
        standard: {
            backgroundImage: 'url("img/b2.jpg")',
        },

        quatro: {

        }
    }

}

export = style;