/// <reference path="../../../typings/tsd.d.ts" />

let constFont = 15;

let style = {

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