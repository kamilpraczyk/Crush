import { tList } from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "The Simple Future Tense is used:",
    list: []
}));

exp.push(tList({
    t: "To predict a future situation.",
    list: [
        { l: "It <p>will</p> rain tomorrow.." },
    ]
}));

exp.push(tList({
    t: "To express willingness.",
    list: [
        { l: "I <p>will</p> do the cleaning." },
    ]
}));


exp.push(tList({
    t: "To express unwillingness.",
    list: [
        { l: "I <p>will not</p> shower tonight." },
        { l: "The baby <p>won't</p> sleep." },
    ]
}));

exp.push(tList({
    t: "To express instant decisions.",
    list: [
        { l: "Let me help you, I <p>will</p> open the door." },
        { l: "The window is open, I <p>will</p> close it." },
    ]
}));

exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "I <p>will</p> do it tomorrow." },
        { l: "Mary <p>will</p> help with the cooking." }
    ]
}));

exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "I <p>will not</p> do it tomorrow." },
        { l: "Mary <p>will not</p> help with the cooking." },
        { l: "Mary <p>won't</p> help with the cooking." }
    ]
}));

exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "<p>Will</p> I do it tomorrow?" },
        { l: "<p>Will</p> Mary help with the cooking." }
    ]
}));

exp.push(tList({
    t: "Interrogative negative sentence.",
    list: [
        { l: "<p>Won't</p> I do it tomorrow?" },
        { l: "<p>Won't</p> Mary help with the cooking?" }
    ]
}));

exp.push(tList({
    t: 'Contractions',
    list: [
        { eq: ["I will", "I'll"] },
        { eq: ["You will", "You'll"] },
        { eq: ["He will", "He'll"] },
        { eq: ["She will", "She'll"] },
        { eq: ["We will", "We'll"] },
        { eq: ["They will", "They'll"] },
        { eq: ["Will not", "Won't"] },
        { i: 'The form "it will" is not normally shortened.' }
    ]
}));

export { exp };