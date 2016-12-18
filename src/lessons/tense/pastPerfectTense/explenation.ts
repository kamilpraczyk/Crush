import { tList } from '../../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: "The past perfect refers to a time <p>earlier than before now</p>. It is used to make it clear that <p>one event happened before another</p> in the past.",
    list: [
        { l: "You <p>had studied</p> English before you moved to London." },
        { l: "<p>Had</p> you <p>studied</p> English before you moved to London?" },
        { l: "You <p>had not studied</p> English before you moved to London." },
    ]
}));

exp.push(tList({
    t: 'Event A is the event that happened first and Event B is the second or more recent event:',
    list: [
        { to: ['Event <p>A</p>', "I <p>had saved</p> my file"] },
        { to: ['Event <p>B</p>', "before the computer crashed."] },
    ]
}));


exp.push(tList({ //leave big space
    t: " ",
    list: []
}));

exp.push(tList({
    t: '',
    list: [
        { to: ['Event <p>B</p>', "When she arrived"] },
        { to: ['Event <p>A</p>', "he <p>had already started</p> cooking."] },
    ]
}));

exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "I <p>had</p> decided." },
        { l: "The train <p>had</p> left." },
    ]
}));
exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "I <p>had not</p> decided." },
        { l: "The train <p>had not</p> left." }
    ]
}));
exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "<p>Had</p> I decided?" },
        { l: "<p>Had</p> the train left?" },
    ]
}));

exp.push(tList({
    t: 'Contracted forms',
    list: [
        { eq: ['had not', "hadn't"] },
    ]
}));


export { exp };
