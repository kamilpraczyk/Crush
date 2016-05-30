var renderer_1 = require('../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: 'To make a plural we add <p>-s</p>, <p>-es</p>, <p>-ies</p>',
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
exp.push(renderer_1.tList({
    t: 'Words without <p>-(ie)s</p>',
    list: [
        { to: ['a man', 'men'] },
        { to: ['a woman', 'women'] },
        { to: ['a child', 'children'] },
        { to: ['a person', 'people'] }
    ]
}));
module.exports = {
    exp: exp
};
