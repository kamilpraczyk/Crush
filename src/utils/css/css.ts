/// <reference path="../../../typings/tsd.d.ts" />
import _ = require("underscore");
import { isId, TypeId } from '../../lessons/helper/constants';
import { getBrowser } from '../../utils/utils';
import { iconsSets } from './theme';


const constFont = 5.0;
const constPoint = 'vmin'
const borderRadius = 10;
const borderWidth = 3;
const cursorPointer = 'pointer';
const cursorDefault = 'default';
const fontFamilyTime = 'Orbitron Medium';
const fontFamilyWriting = 'standard';
const fontFamilyJournal = 'journal';
const fontFamilyCharcoal = 'charcoal';

const micro = constFont - 1.8 + constPoint;
const XS = constFont - 0.8 + constPoint;
const S = constFont - 0.7 + constPoint;
const M = constFont - 0.5 + constPoint;
const L = constFont - 0.3 + constPoint;
const XL = constFont + constPoint;
const XL2 = constFont + 0.2 + constPoint;
const XL3 = constFont + 0.5 + constPoint;
const XL4 = constFont + 0.8 + constPoint;
const mega = constFont + 1.8 + constPoint;


const get = function <CSSProperties>(a: CSSProperties, b?: CSSProperties, c?: CSSProperties, d?: CSSProperties, e?: CSSProperties): CSSProperties {
    let res = {} as CSSProperties;
    for (let i = 0; i < arguments.length; i++) {
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

//NOT the best solution for gradient, should we include some library for prefixes?
function getBacgroundGradient(start: string, stop: string) {
    const browser = getBrowser();
    if (browser.isOpera) {
        return `-o-linear-gradient(top, ${start}, ${stop})`;
    } else if (browser.isIE) {
        // 'linear-gradient(to bottom, start, stop);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=start, endColorstr=stop);'
        return `-ms-linear-gradient(top, ${start}, ${stop})`;
    } else if (browser.isEdge) {
        return `-ms-linear-gradient(top, ${start}, ${stop})`;
    } else if (browser.isFirefox) {
        return `-moz-linear-gradient(top, ${start}, ${stop})`;
    } else if (browser.isChrome) {
        return `-webkit-gradient(linear, left top, left bottom, from(${start}), to(${stop}))`;
    }

    return `gradient( ${start}, ${stop})`;
}

const style = {

    get: get,
    isMobile: isMobile,
    getSize: getSize,

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
        help: 'moon-support'
    },

    iconsSets,

    backUrl: {
        user: 'img/icons/About-me-icon.png',
        lessons: 'img/icons/My-blog-icon.png',
        grammar: 'img/icons/Freelance-icon.png',
        menu: 'img/icons/Hire-me-icon.png',
        random: 'img/icons/button-round-random-icon.png',
        left: 'img/icons/button-arrow-left-icon.png',
        right: 'img/icons/button-arrow-right-icon.png'
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
            XL4: XL4,
            mega: mega
        },
        color: {
            normal: 'white',
            info: '#819bcb',
            hint: '#777',
            merge: '#555658',
            success: '#00FF00',
            fail: '#FF0000',
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
            fromName: borderWidth + 'px solid transparent',
            transparent: borderWidth + 'px solid #313131',
            active: borderWidth + 'px solid #2b8182',
            focus: borderWidth + 'px solid #313131',
            success: borderWidth + 'px solid #00FF00',
            fail: borderWidth + 'px solid  #FF0000',
            disabled: borderWidth + 'px solid #313131'
        },
        backgroundColor: {
            normal: '#49494a',
            fromName: 'transparent',
            normalGuess: 'transparent',
            transparent: 'transparent',
            active: '#00999D',
            focus: '#272822',
            disabled: '#49494a'
        },
        backgroundImage: {
            normalGuess: () => getBacgroundGradient('#636363', '#454444'),
            fromName: () => getBacgroundGradient('transparent', 'transparent'),
            transparent: () => getBacgroundGradient('transparent', 'transparent'),
            normal: () => getBacgroundGradient('#616161', '#383737'),
            active: null as string,
            focus: null as string,
            disabled: null as string,
        },
        radius: {
            borderRadius: 28
        }
    },

    fontFamily: {
        time: <CSSProperties>{
            fontFamily: fontFamilyTime
        },
        writing: <CSSProperties>{
            fontFamily: fontFamilyWriting
        },
        journal: <CSSProperties>{
            fontFamily: fontFamilyJournal
        },
        charcoal: <CSSProperties>{
            fontFamily: fontFamilyCharcoal
        }
    },

    themes: {
        standard: {
            backgroundImageRead: 'url("img/chalkboard1.jpg")',
            backgroundImageBoard: 'url("img/chalkboard2.jpg")'
        },
        signaturePad: {
            background: 'rgba(0, 0, 0, 0.1)',
            color: 'white'
        }
    },

    layout: {
        getPanel: () => {
            const style: CSSProperties = {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                alignContent: 'stretch',
                fontSize: XL,
                fontFamily: fontFamilyWriting
            }
            return style;
        },

        getHeader: () => {
            const style: CSSProperties = {
                display: 'flex',
                margin: '2vh',
                marginBottom: 0,
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center' //by default in center
            }
            return style;
        },

        getBody: () => {
            const style: CSSProperties = {
                display: 'flex',
                flexGrow: 1,
                paddingBottom: '2vh',
                paddingTop: '2vh',
                paddingLeft: '2vw',
                paddingRight: '2vw',
                flexDirection: 'column',
                alignItems: 'stretch',
            }
            return style;
        },

        getBodyContent: () => {
            const s: CSSProperties = {
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                alignItems: 'stretch',// by default stretch
            }
            return s;
        },

        getInstructions: (id?: TypeId[]) => {
            let style: CSSProperties = {
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
            if (isId.isDigitalTime(id)) {
                const digitalTime: CSSProperties = {
                    fontSize: XL3,
                    fontFamily: fontFamilyTime,
                    backgroundColor: 'black',
                    color: 'white'
                }
                style = get(style, digitalTime);
            }
            return style;
        },


        getFooter: () => {
            const style: CSSProperties = {
                display: 'flex'
            }
            return style;
        }

    }

}




export = style;