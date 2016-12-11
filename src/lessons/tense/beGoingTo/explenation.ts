import { tList } from '../../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: "Be going to form is used:",
    list: []
}));
exp.push(tList({
    t: "To talk about future plans and <p>intentions</p>.",
    list: [
        { l: "I'm <p>going to</p> take a few exams at the end of the month." },
        { l: "I'm <p>going to</p> take a few exams at the end of the month." },
    ]
}));
exp.push(tList({
    t: "To give <p>commands</p> or state that something is obligatory.",
    list: [
        { l: "You're <p>going to</p> pick up all of those dirty clothes right now." },
    ]
}));
exp.push(tList({
    t: "When something is about to happen.",
    list: [
        { l: "Get back! The bomb is <p>going to</p> explode." },
    ]
}));
exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "I am <p>going to</p> Spain." },
        { l: "They are <p>going to</p> Spain." },
    ]
}));
exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "I am <p>not going to</p> Spain." },
        { l: "They are <p>not going to</p> Spain." }
    ]
}));
exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "Am I <p>going to</p> Spain?" },
        { l: "They are <p>going to</p> Spain?" },
    ]
}));
exp.push(tList({
    t: 'Informal English',
    list: [
        { eq: ['gonna', 'going to'] },
        { i: "I'm <p>going to</p> go to the beach tomorrow." },
        { i: "I'm <p>gonna</p> go to the beach tomorrow." }
    ]
}));

export { exp };
