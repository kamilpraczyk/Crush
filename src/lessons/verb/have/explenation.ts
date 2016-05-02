/// <reference path='../../../../typings/tsd.d.ts' />
import {tList} from '../../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: 'Two forms: <u>have</u> and <u>has</u>',
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
    t: '<u>Have</u> and <u>has</u> often come with <u>got</u>',
    i: 'The meaning remains the same',
    list: [
        { eq: ['I have', 'I have <u>got</u>'] },
        { eq: ['he has', 'he has <u>got</u>'] },
    ]
}));

exp.push(tList({
    t: '<u>Have</u> often come with <u>some, any, no</u> and <u>one</u>',
    list: [
        { l: 'Have you got <u>any</u> money?' },
        { l: 'Yes, I have (got) <u>some</u>.' },
        { l: 'No, I have not got <u>any</u>.' },
        { s: ' ' },
        { l: 'Have you got <u>any</u> books?' },
        { l: 'Yes, I have (got) <u>some</u>.' },
        { l: 'No, I have not got <u>any</u>.' },
        { s: ' ' },
        { l: 'Have you got <u>a</u> car?' },
        { l: 'Yes, I have (got) <u>one</u>.' },
        { l: 'No, I have not got <u>one</u>.' }
    ]
}));

exp.push(tList({
    t: 'Negation of Noun Phrases with <u>not</u>',
    list: [
        { l: 'I have <u>not</u> got any money.' }
    ]
}));

exp.push(tList({
    t: 'Negation of Verb Phrases with <b>no</b>',
    list: [
        { l: 'I have <u>no</u> money.' }
    ]
}));

export = {
    exp: exp
};
