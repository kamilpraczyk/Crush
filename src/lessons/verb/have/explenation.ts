import {tList} from '../../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: 'Two forms: <p>have</p> and <p>has</p>',
    list: [
        { l: 'I have' },
        { l: 'you have' },
        { l: 'he, she, it has' },
        { l: 'we have' },
        { l: 'you have' },
        { l: 'they have' }
    ]
}));

exp.push(tList({
    t: '<p>Have</p> and <p>has</p> often come with <p>got</p>',
    i: 'The meaning remains the same',
    list: [
        { eq: ['I have', 'I have <p>got</p>'] },
        { eq: ['he has', 'he has <p>got</p>'] },
    ]
}));

exp.push(tList({
    t: '<p>Have</p> often come with <p>some, any, no</p> and <p>one</p>',
    list: [
        { l: 'Have you got <p>any</p> money?' },
        { l: 'Yes, I have (got) <p>some</p>.' },
        { l: 'No, I have not got <p>any</p>.' },
        { s: ' ' },
        { l: 'Have you got <p>any</p> books?' },
        { l: 'Yes, I have (got) <p>some</p>.' },
        { l: 'No, I have not got <p>any</p>.' },
        { s: ' ' },
        { l: 'Have you got <p>a</p> car?' },
        { l: 'Yes, I have (got) <p>one</p>.' },
        { l: 'No, I have not got <p>one</p>.' }
    ]
}));

exp.push(tList({
    t: 'Negation of Noun Phrases with <p>not</p>',
    list: [
        { l: 'I have <p>not</p> got any money.' }
    ]
}));

exp.push(tList({
    t: 'Negation of Verb Phrases with <b>no</b>',
    list: [
        { l: 'I have <p>no</p> money.' }
    ]
}));

export = {
    exp: exp
};
