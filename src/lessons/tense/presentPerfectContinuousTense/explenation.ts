/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


//"[has/have + been + present participle]"
//Subject + HAS/HAVE + BEEN + Verb (continuous form)'

exp.push(tList({
    t: "The Present Perfect Continuous Tense is used:",
    list: []
}));

exp.push(tList({
    t: "For an action which began at some time in the past and is still continuing.",
    list: [
        { l: "They <p>have been building</p> this bridge for the last nine months." },
        { l: "They <p>have been playing</p> tennis since 4 p.m." },
        { l: "He <p>has been working</p> in this company for a long time." },
        { l: "I <p>have been writing</p> a book for the last one year." },


    ]
}));

exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "You <p>have been waiting</p> here for two hours." },
        { l: "I <p>have been living</p>." }
    ]
}));

exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "You <p>have not been waiting</p> here for two hours." },
        { l: "I <p>have not been living</p>." }
    ]
}));

exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "<p>Have</p> you <p>been waiting</p> here for two hours?" },
        { l: "<p>Have I been living</p>?" }
    ]
}));




exp.push(tList({
    t: "Some verbs are not usually used with present perfect continuous because they are not action verbs:",
    i: "believe, belong, depend, hate, know, like, love, mean, need, prefer, realise, suppose, want, understand.",
    list: [
        { l: "I've known him for ten years. -correct." },
        { l: "I've been knowing him for ten years – incorrect." },
        { s: " " },
        { l: "I've belonged to the tennis club for 25 years – correct." },
        { l: "I've been belonging to the tennis club for 25 years – incorrect." },
    ]
}));






export = {
    exp: exp
};
