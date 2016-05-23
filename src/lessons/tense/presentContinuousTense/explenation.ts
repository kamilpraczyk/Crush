/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "The Present Continuous Tense is used:",
    list: []
}));

exp.push(tList({
    t: "For an action going on at the time of speaking.",
    list: [
        { l: "She is writing a letter." },
        { l: "He is walking along the road." },
        { l: "We are playing tennis." },
        { l: "They are discussing the problem." },
    ]
}));
/*
exp.push(tList({
    t: ".",
    list: [
        { l: "." },
        { l: "." },
        { l: "." },
    ]
}));
*/


export = {
    exp: exp
};
