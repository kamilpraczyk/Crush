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

exp.push(tList({
    t: "To describe an event planned in the future.",
    list: [
        { l: "I am meeting my boyfriend tonight." },
        { l: "We are going on holiday tomorrow." },
        { l: "Are they visiting you next winter?" },
        { l: "They are discussing the problem tonight." },
    ]
}));

exp.push(tList({
    t: "To describe an action that is going on during this period of time or a trend.",
    list: [
        { l: "Are you still working for the same company?" },
        { l: "More and more people are becoming vegetarian." }
    ]
}));


exp.push(tList({
    t: "with <p>always</p>, <p>forever</p>, <p>constantly</p>, to describe a continuing series of repeated actions.",
    list: [
        { l: "They are always arguing!" },
        { l: "You are constantly complaining about your mother-in-law!" }
    ]
}));


exp.push(tList({
    t: "Singular",
    list: [
        { l: "I <p>am</p>" },
        { l: "You <p>are</p>" },
        { l: "He, she, it <p>is</p>" },
    ]
}));
exp.push(tList({
    t: "Plural",
    list: [
        { l: "We <p>are</p>" },
        { l: "You <p>are</p>" },
        { l: "They <p>are</p>" },
    ]
}));


exp.push(tList({
    t: "Contracted forms",
    list: [
        { eq: ["I am", "I'm"] },
        { eq: ["is not", "isn't"] },
        { eq: ["are not", "aren't"] },
        { eq: ["he is", "he's"] },
        { eq: ["she is", "she's"] },
        { eq: ["it is", "it's"] },
    ]
}));



exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "I <p>am eating</p> a meal." },
        { l: "She <p>is learning</p> a lesson." }
    ]
}));

exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "I <p>am not eating</p> a meal." },
        { l: "She <p>is not learning</p> a lesson." }
    ]
}));

exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "<p>Am</p> I <p>eating</p> a meal?" },
        { l: "<p>Is</p> she <p>learning</p> a lesson?" }
    ]
}));



exp.push(tList({
    t: ".",
    list: [
        { l: "<p>I</p> am going." },
        { l: "I am not going." },
        { l: "Am I going?" },
        { s: " " },
        { l: "<p>You</p> are going." },
        { l: "You aren't going." },
        { l: "Are you going?" },
        { s: " " },
        { l: "<p>He, she, it</p> is going." },
        { l: "He, she, it isn't going." },
        { l: "Is he, she, it going?" },
        { s: " " },
        { l: "<p>We</p> are going." },
        { l: "We aren't going." },
        { l: "Are we going?" },
        { s: " " },
        { l: "<p>You</p> are going." },
        { l: "You aren't going." },
        { l: "Are you going?" },
        { s: " " },
        { l: "<p>They</p> are going." },
        { l: "They aren't going." },
        { l: "Are they going?" },
        { s: " " },
    ]
}));


export = {
    exp: exp
};
