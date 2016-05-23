/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "The Present Perfect Continuous Tense is used:",
    list: []
}));

exp.push(tList({
    t: "For an action which began at some time in the past and is still continuing.",
    list: [
        { l: "They have been building this bridge for the last nine months." },
        { l: "They have been playing tennis since 4pm." },
        { l: "He has been working in this company for a long time." },
        { l: "I have been writing a book for the last one year." },


    ]
}));
/*
exp.push(tList({
    t: ".",
    list: [      
        { l: "." },
        { l: "." },
    ]
}));
*/



export = {
    exp: exp
};
