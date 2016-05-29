/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "The Present Perfect Tense is used:",
    list: []
}));

exp.push(tList({
    t: "To indicate activities that completed in the near past.",
    list: [
        { l: "He <p>has</p> just <p>gone</p> out." },
        { l: "They <p>have earned</p> goodwill." },
        { l: "The child <p>has gone</p> to bed." },
        { l: "Sue <p>has broken</p> the glass." },
        { l: "How <p>has</p> she <p>done</p> it?." },
        { l: "They <p>have</p> already <p>won</p>." },
        { l: "He <p>hasn't finished</p> his homework yet." },
    ]
}));

exp.push(tList({
    t: "To indicate actions that happened at an unspecified time before the present.",
    list: [
        { l: "I <p>have been</p> to London." },
        { l: "How many times <p>have</p> you <p>been</p> to London?" },
        { l: "He <p>has learned</p> to speak English." },
        { l: "You <p>have changed</p> so much!" },
        { l: "We <p>have seen</p> this movie ten times." },
        { l: "He <p>has</p> never <p>been</p> so surprised." },
    ]
}));


exp.push(tList({
    t: "States that started in the past, and are still going on.",
    list: [
        { l: "You <p>have been</p> sick since last week." },
        { l: "Since when <p>have</p> you <p>been</p> sick?" },
        { l: "I <p>have thought</p> about it for two hours." },,
        { l: "Bob <p>has lived</p> here since 2005." },
        { l: "Sophie <p>has</p> always <p>loved</p> skiing." },
    ]
}));



exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "I <p>have eaten</p> meal." },
        { l: "She <p>has learnt</p> a lesson." }
    ]
}));

exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "I <p>have not eaten</p> meal." },
        { l: "She <p>has not learnt</p> a lesson." }
    ]
}));

exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "<p>Have</p> I <p>eaten</p> meal?" },
        { l: "<p>Has</p> she <p>learnt</p> a lesson?" }
    ]
}));


export = {
    exp: exp
};
