import { tList } from '../../helper/renderer';
let exp: any[] = [];

//[VERB] + s/es in third person

exp.push(tList({
    t: "The Simple Present Tense is used:",
    list: []
}));

exp.push(tList({
    t: "To indicate a habitual action.",
    list: [
        { l: "He drinks coffee every morning." },
        { l: "I go to church regularly." },
        { l: "My mother gets up at 6 a.m. everyday." },
        { l: "I smoke." },
        { l: "I work in London." },
        { l: "We catch the bus every morning." }
    ]
}));

exp.push(tList({
    t: "For fixed arrangements or events.",
    list: [
        { l: "The next bus arrives at 7.45 a.m." },
        { l: "The match starts at 9 a.m." },
        { l: "When does this shop reopen?" },
        { l: "Your exam starts at 08.00." },
    ]
}));

exp.push(tList({
    t: "To express the general truth.",
    list: [
        { l: "The Sun rises in the east." },
        { l: "Honey is sweet." },
        { l: "London is a large city. " },
        { l: "Water freezes at zero degrees." },
        { l: "Her mother is Polish." },
    ]
}));

exp.push(tList({
    t: "To give instructions or directions.",
    list: [
        { l: "You walk for five hundred meters, then you turn left." },
        { l: "Open the packet and pour the contents into hot water." },
        { l: "You take the No.6 bus to Craven Drive and then the No.10 to Clark Avenue." },
    ]
}));


exp.push(tList({
    t: "To introduce a quotation.",
    list: [
        { l: "Keats says, ‘A thing of beauty is joy for ever’." },
        { l: "Bible says, ‘To forgive is divine’." },
    ]
}));


exp.push(tList({
    t: "To express future time, after some conjunctions:",
    i: "after, when, before, as soon as, until.",
    list: [
        { l: "He'll give it to you when you come next Monday." },
        { l: "She'll see you before she leaves." },
        { l: "We'll give it to her when she arrives." },
    ]
}));


exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "I think." },
        { l: "He think<p>s</p>." }
    ]
}));

exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "I <p>do not</p> think" },
        { l: "He <p>does not</p> think" }
    ]
}));

exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "<p>Do</p> I think?" },
        { l: "<p>Does</p> he think?" }
    ]
}));

exp.push(tList({
    t: "In the third person.",
    i: "The verb <p>always ends in -s</p>.",
    list: [
        { l: "She want<p>s</p>" },
        { l: "She give<p>s</p>" },
        { l: "He think<p>s</p>" },
        { l: "He need<p>s</p>" },
    ]
}));

exp.push(tList({
    t: "In the third person.",
    i: "Negative and question forms use <p>Does</p>.",
    list: [
        { l: "He <p>wants</p> ice cream. <p>Does</p> he want blueberry? " },
        { l: "He <p>does</p> not want vanilla.</p>" }
    ]
}));
exp.push(tList({
    t: "In the third person.",
    i: "Verbs ending in -y changes the </p>-y</p> to <p>-ies</p>.",
    list: [
        { to: ["fly", "flies"] },
        { to: ["cry", "cries"] }
    ]
}));
exp.push(tList({
    i: "<p>Exception:</p> if there is a vowel before the <p>-y</p>.",
    list: [
        { to: ["play", "plays"] },
        { to: ["pray", "prays"] }
    ]
}));
exp.push(tList({
    i: "Add <p>-es</p> to verbs ending in:<p>-ss, -x, -sh, -ch</p>.",
    list: [
        { l: "He pass<p>es</p>." },
        { l: "She catch<p>es</p>." },
        { l: "He fix<p>es</p>." },
        { l: "It push<p>es</p>." }
    ]
}));



export { exp };
