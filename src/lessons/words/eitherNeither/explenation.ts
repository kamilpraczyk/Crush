/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "<p>Either</p>... <p>or</p> is used to offer a choice between two possibilities",
    list: [
        { l: "<p>Either</p> Mike <p>or</p> Rob will be there." },
        { l: "<p>Either</p> you leave me alone <p>or</p> I will call the police." },
        { l: "You can <p>either</p> help us <p>or</p> go to your home." },
        { l: "We should bring <p>either</p> tea <p>or</p> coffee." },
    ]
}));

exp.push(tList({
    t: "<p>Either</p> can be followed by (one) <p>of</p> + group of two",
    list: [
        { l: "<p>Either of</p> us could bring it." },
        { l: "<p>Either one of</p> us could bring it." },
        { s: " " },
        { l: "<p>Either of</p> you should know" },
        { l: "<p>Either one of</p> you should know" },
    ]
}));

exp.push(tList({
    t: "<p>Not</p>... <p>either</p>... <p>or</p> denies both possibilities",
    list: [
        { l: "I <p>don't</p> think <p>either</p> Mike <p>or</p> Rob will be there." },
        { l: "She <p>doesn't</p> speak <p>either</p> English <p>or</p> German." },
    ]
}));

exp.push(tList({
    t: "<p>Not</p>... <p>either</p>... is used after a negative statement.",
    list: [
        { l: "I don't speak German." },
        { l: "You don't either." },
        { s: " " },
        { l: "He isn't ready to go." },
        { l: "We aren't either." },
    ]
}));


exp.push(tList({
    t: "<p>Neither</p>... <p>nor</p>",
    i: "<p>Neither...</p> <p>nor</p> is equivalent to <p>not</p>... <p>either</p>... <p>or</p>.",
    list: [
        { l: "<p>Neither</p> Mike <p>nor</p> Rob will be there." },
        { l: "She speaks <p>neither</p> English <p>nor</p> German." },
        { l: "We brought <p>neither</p> coffee <p>nor</p> tea." },
    ]
}));

exp.push(tList({
    t: "<p>Neither</p> can be followed by (one) of + group of two.",
    list: [
        { l: "<p>Neither of</p> them is ready." },
        { l: "<p>Neither one of</p> them is ready." },
        { s: " " },
        { l: "<p>Neither of</p> us has any money." },
        { l: "<p>Neither one of</p> us has any money." },
    ]
}));

exp.push(tList({
    t: "<p>Neither</p> is used like <p>not</p>... <p>either</p>.",
    list: [
        { l: "I don't speak German." },
        { l: "<p>Neither</p> do I." },
        { l: "(informal): Me <p>neither</p>." },
        { s: " " },
        { l: "He isn't ready to go." },
        { l: "<p>Neither</p> are we." },
    ]
}));


exp.push(tList({
    t: "Remember",
    list: [
        { eq: ["either", "(means) one"] },
        { eq: ["neither", "(means) none"] },
        { eq: ["not either ", "neither"] },
        { l: "<p>or</p> goes with <p>either</p>" },
        { l: "<p>nor</p> goes with <p>neither</p>" },
        // { s: " " },
    ]
}));




export = {
    exp: exp
};
