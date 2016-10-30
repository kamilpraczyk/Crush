/// <reference path="../../../typings/tsd.d.ts" />

import {tList} from '../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: "",
    list: [
        { l: "Camel" },
        { l: "Cat" },
        { l: "Cow" },
        { l: "Donkey" },
        { l: "Lamb" },
        { l: "Lion" },
        { l: "Rat" },
        { l: "Rabbit" },
        { l: "Tiger" },
        { l: "Wolf" },
    ]
}));

export = {
    exp: exp
};
