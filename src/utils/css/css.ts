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
const fontFamilyWriting = 'ArchitectsDaughter';
const fontFamilyJournal = 'journal';


import {isId} from '../../lessons/helper/constants';

const micro = constFont - 2.0 + constPoint;
const XS = constFont - 0.8 + constPoint;
const S = constFont - 0.7 + constPoint;
const M = constFont - 0.5 + constPoint;
const L = constFont - 0.3 + constPoint;
const XL = constFont + constPoint;
const XL2 = constFont + 0.2 + constPoint;
const XL3 = constFont + 0.5 + constPoint;
const XL4 = constFont + 0.8 + constPoint;


const get = function <T1, T2, T3, T4, T5>(a: T1, b?: T2, c?: T3, d?: T4, e?: T5): T1 & T2 & T3 & T4 & T5 {
    var res = {} as T1 & T2 & T3 & T4 & T5;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            _.extend(res, arguments[i]);
        }
    }
    return res;
}

function getSize() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    let x = w.innerWidth || e.clientWidth || g.clientWidth;
    let y = w.innerHeight || e.clientHeight || g.clientHeight;
    return {
        x: x,
        y: y
    }
}

function isMobile() {
    const size = getSize();
    if (size.x < 450 || size.y < 450) {
        return true;
    }
    return false;
}

const backgroundColourText = 'rgba(255, 255, 255, 0.60)';
let style = {

    get: get,
    isMobile: isMobile,


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
            light: 'white',
            dark: 'black',
            select: 'blue',
            hint: '#777',
            disable: '#555',
            success: '#00FF00',
            fail: '#FF0000',
            ink: '#2C5781'
        }
    },

    borderRadius: borderRadius,
    borderWidth: borderWidth,
    borderWidthUnit: borderWidthUnit,


    button: {
        background: {
            normal: 'black',
            active: '#00999D',
            focus: 'black',
            disabled: 'black'
        },
        color: {
            normal: 'white',
            active: 'white',
            focus: '#00999D',
            disabled: '#777'
        },
        border: {
            normal: '5px solid gray',
            active: '5px solid gray',
            focus: '5px solid gray',
            success: '5px solid #00FF00',
            fail: '5px solid  #FF0000',
            disabled: '5px solid gray'
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
        }
    },


    themes: {
        standard: {
            backgroundImageLesson: 'url("img/10.jpg")',
            backgroundImageBeer: 'url("img/beer.png")',
            backgroundImageRead: 'url("img/read.png")'
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
                fontFamily: fontFamilyWriting
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

        getInstructions: (id?: string) => {
            let style = {
                display: 'flex',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                paddingTop: '1vh',
                paddingBottom: '1vh',
                cursor: cursorPointer,
                borderRadius: borderRadius,
                marginBottom: '1vh',
                fontSize: XL,
            }
            if (id && isId.isDigitalTime(id)) {
                let digitalTime = {
                    fontSize: XL3,
                    fontFamily: fontFamilyTime,
                    background: 'black',
                    color: 'white'
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