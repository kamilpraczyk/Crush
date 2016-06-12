/// <reference path="underscore/underscore.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="react/react.d.ts" />
/// <reference path="react/react-dom.d.ts" />
/// <reference path="mocha/mocha.d.ts" />
/// <reference path="sinon/sinon.d.ts" />
/// <reference path="expect/expect.js.d.ts" />
/// <reference path="bluebird/bluebird.d.ts" />


interface UnderscoreStatic {
    bindt<T>(
        func: T,
        context: any): T;

}


interface Window {
    speechSynthesis: any
}
interface SpeechSynthesisUtterance {

}



export = Function
