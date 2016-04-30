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


    animate: function(callback: Function, object?: any) {
        if (callback) {
            return function(e: any) {
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
            disable: 'lightgray'
        }
    },

    borderRadius: borderRadius,
    borderWidth: borderWidth,
    borderWidthUnit: borderWidthUnit,

    /* dimensions of top bar*/
    status: {
        width: '20vmin',
        height: '20vmin',
        maxHeight: 90,
        maxWidth: 90,
    },

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
            border: borderWidth + borderWidthUnit + ' solid #67FF67',
            cursor: 'pointer',
            borderRadius: borderRadius

        },
        bad: {
            border: borderWidth + borderWidthUnit + ' solid #FF5656',
            cursor: 'pointer',
            borderRadius: borderRadius
        }
    },


    themes: {
        standard: {
            backgroundImage: 'url("img/b2.jpg")',
        },

        draw: {
            canvasBackgroundColor: 'transparent'
        },
        quatro: {

        }
    }

}

export = style;