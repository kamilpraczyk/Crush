/// <reference path="underscore/underscore.d.ts" />
/// <reference path="node/node.d.ts" />
/// <reference path="react/react.d.ts" />
/// <reference path="react/react-dom.d.ts" />


interface UnderscoreStatic {
    bindt<T>(
        func: T,
        context: any): T;

}


interface Window {
    speechSynthesis : any
}
interface SpeechSynthesisUtterance{
    
}



export = Function
