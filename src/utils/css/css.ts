/// <reference path="../../../typings/tsd.d.ts" />
import _ = require("underscore");
let constFont = 15;

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

    cursor :{
        normal : 'default',
        pointer : 'pointer'
    },

    font: {
        fontSize: {
            XS: constFont - 8,
            S: constFont - 7,
            M: constFont - 5,
            L: constFont - 3,
            XL: constFont,
            XL2: constFont + 2,
            XL3: constFont + 5,
            XL4: constFont + 20
        },
        color: {
            light: 'white',
            default: 'black',
            select: 'blue',
            hint: 'gray',
            disable: 'lightgray'
        }
    }

}

export = style;