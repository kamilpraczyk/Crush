/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var renderer_1 = require('../../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: "",
    list: [
        { l: "You can add prefixes to the <p>beginning</p> of some words to change their meanings." },
        { s: " " },
        { to: ["happy", "<p>un</p>happy"] },
        { s: " " },
        { l: "Different prefixes different things." },
        { eq: ["un", "not"] },
        { eq: ["dis", "not"] },
        { eq: ["re", "again"] },
        { eq: ["pre", "before"] },
    ]
}));
module.exports = {
    exp: exp
};
