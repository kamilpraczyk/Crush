/// <reference path='../../../../typings/tsd.d.ts' />
import {tList} from '../../helper/renderer';

let exp: any[] = [];

exp.push(tList({
    t: 'Present',
    list: [
        { l: 'I <u>am</u>' },
        { l: 'you <u>are</u>' },
        { l: 'he, she, it <u>is</u>' },
        { l: 'we <u>are</u>' },
        { l: 'you <u>are</u>' },
        { l: 'they <u>are</u>' }
    ]
}));

exp.push(tList({
    t: 'Past',
    list: [
        { l: 'I <u>was</u>' },
        { l: 'you <u>were</u>' },
        { l: 'he, she, it <u>was</u>' },
        { l: 'we <u>were</u>' },
        { l: 'you <u>were</u>' },
        { l: 'they <u>were</u>' }
    ]
}));

exp.push(tList({
    t: 'Negation',
    list: [
        { l: 'I am <u>not</u>' },
        { l: 'I was <u>not</u>' },
        { l: 'he, she, it was <u>not</u>' },
        { l: 'we are <u>not</u>' },
        { l: 'they were <u>not</u>' }
    ]
}));

exp.push(tList({
    t: 'Questions',
    list: [
        { l: 'They <u>are</u> tired.' },
        { l: '<u>Are</u> they tired?' },
    ]
}));


exp.push(tList({
    t: 'Answers',
    list: [
        { l: 'Are you tired?' },
        { l: '-Yes.' },
        { l: '-Yes, I am tired.' },
        { s: ' ' },
        { l: 'Are you hungry?' },
        { l: '-Yes.' },
        { l: '-Yes, I am hungry.' },
        { s: ' ' },
        { l: 'Are you sleepy?' },
        { l: '-No.' },
        { l: '-No, I am not sleepy.' }
    ]
}));


export = {
    exp: exp
};
