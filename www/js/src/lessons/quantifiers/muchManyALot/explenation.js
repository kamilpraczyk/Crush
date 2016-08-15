/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var renderer_1 = require('../../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: '<p>Much</p> - is use for singular nouns',
    list: [
        { l: 'much milk' },
        { l: 'much water' },
        { l: 'much noise' },
        { l: 'much money' }
    ]
}));
exp.push(renderer_1.tList({
    t: '<p>Many</p> - is use for plural nouns',
    list: [
        { l: 'many problems' },
        { l: 'many friends' },
        { l: 'many people' },
        { l: 'many women' }
    ]
}));
exp.push(renderer_1.tList({
    t: '<p>A lot of</p> - is use for singular and plural nouns',
    list: [
        { l: 'a lot of time' },
        { l: 'a lot of times' },
        { l: 'a lot of coffee' },
        { l: 'a lot of coffees' }
    ]
}));
exp.push(renderer_1.tList({
    t: '<p>Much</p> cannot replace <p>many</p>, but both of them can be replaced by <p>a lot of</p>',
    list: [
        { eq: ['a lot of people', 'many people'] },
        { eq: ['a lot of women', 'many women'] },
        { eq: ['a lot of traffic', 'much traffic'] },
        { eq: ['a lot of time', 'much time'] },
        { eq: ['a lot of milk', 'much milk'] },
    ]
}));
module.exports = {
    exp: exp
};
