/// <reference path="../../../typings/tsd.d.ts" />
import {tList} from '../helper/renderer';

let exp: any[] = [];

exp.push(tList({
    t: 'To make a plural we add <u>-s</u>, <u>-es</u>, <u>-ies</u>',
    list: [
        { to: ['film', 'films'] },
        { to: ['book', 'books'] },
        { to: ['bank', 'banks'] },
        { to: ['bed', 'beds'] },
        { to: ['city', 'cities'] },
        { to: ['address', 'addresses'] },
        { to: ['university', 'universities'] },
        { to: ['boy', 'boys'] },
        { to: ['day', 'days'] },
    ]
}));


exp.push(tList({
    t: 'Words without <u>-(ie)s</u>',
    list: [
        { to: ['a man', 'men'] },
        { to: ['a woman', 'women'] },
        { to: ['a child', 'children'] },
        { to: ['a person', 'people'] }
    ]
}));

export = {
    exp: exp
};




