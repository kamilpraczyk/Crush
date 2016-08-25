/// <reference path='../../../../typings/tsd.d.ts' />
import {tList} from '../../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: 'Verbs tell us what a person or thing is doing.',
    i: ' The ending of the verb changes depending no who is doing the activity and:',
    list: [
        { l: 'whether it has already happened (past),' },
        { l: 'is happening (present),' },
        { l: 'now or will happen (future).' },

    ]
}));

exp.push(tList({
    list: [
        { eq: ['PAST', 'he walk<p>ed</p>'] },
        { eq: ['PRESENT', 'he walk<p>s</p>'] },
        { eq: ['FUTURE', 'he will be walk<p>ing</p>'] }, //TODO fix display css - p is droping line below
    ]
}));


exp.push(tList({
    i: 'Sometimes the spelling of the verb changes when the ending is added.',
    list: [
        { l: '' }
    ]
}));

export = {
    exp: exp
};
