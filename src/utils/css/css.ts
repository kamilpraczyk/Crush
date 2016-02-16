/// <reference path="../../../typings/tsd.d.ts" />
import _ = require("underscore");
let constFont = 4.5;
let constPoint = 'vh'

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

    themes: {
        standard: {
            backgroundImage: 'url("img/wood.jpg")',
        },

        draw: {
            canvasBackgroundColor: 'transparent'
        },
        quatro: {

        }
    }

}

export = style;