var renderer_1 = require('../../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: "The Present Perfect Continuous Tense is used:",
    list: []
}));
exp.push(renderer_1.tList({
    t: "For an action which began at some time in the past and is still continuing.",
    list: [
        { l: "They <p>have been building</p> this bridge for the last nine months." },
        { l: "They <p>have been playing</p> tennis since 4 p.m." },
        { l: "He <p>has been working</p> in this company for a long time." },
        { l: "I <p>have been writing</p> a book for the last one year." },
    ]
}));
exp.push(renderer_1.tList({
    t: "Positive sentence.",
    list: [
        { l: "You <p>have been waiting</p> here for two hours." },
    ]
}));
exp.push(renderer_1.tList({
    t: "Negative sentence.",
    list: [
        { l: "You <p>have not been waiting</p> here for two hours." },
    ]
}));
exp.push(renderer_1.tList({
    t: "Interrogative sentence.",
    list: [
        { l: "<p>Have</p> you <p>been waiting</p> here for two hours?" },
    ]
}));
exp.push(renderer_1.tList({
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
module.exports = {
    exp: exp
};
