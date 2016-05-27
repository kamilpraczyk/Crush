/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


//"[has/have + been + present participle]"

exp.push(tList({
    t: "The Present Perfect Continuous Tense is used:",
    list: []
}));

exp.push(tList({
    t: "For an action which began at some time in the past and is still continuing.",
    list: [
        { l: "They <p>have been building</p> this bridge for the last nine months." },
        { l: "They <p>have been playing</p> tennis since 4pm." },
        { l: "He <p>has been working</p> in this company for a long time." },
        { l: "I <p>have been writing</p> a book for the last one year." },


    ]
}));

exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "You <p>have been waiting</p> here for two hours." },
        { l: "" }
    ]
}));

exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "<p>Have</p> you <p>been waiting</p> here for two hours?" },
        { l: "" }
    ]
}));

exp.push(tList({
    t: "Interrogative Sentences.",
    list: [
        { l: "You <p>have not been waiting</p> here for two hours." },
        { l: "" }
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
