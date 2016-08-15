/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var renderer_1 = require('../../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: "We use pronouns to refer to possession and 'belonging'.",
    list: [
        { to: ["This is <p>my</p> pen.", "This pen is <p>mine</p>."] },
        { to: ["This is <p>your</p> pen.", "This pen is <p>yours</p>."] },
        { to: ["This is <p>his</p> pen.", "This pen is <p>his</p>."] },
        { to: ["This is <p>her</p> pen.", "This pen is <p>hers</p>."] },
        { to: ["This is <p>our</p> pen.", "This pen is <p>ours</p>."] },
        { to: ["This is <p>their</p> pen.", "This pen is <p>theirs</p>."] }
    ]
}));
exp.push(renderer_1.tList({
    t: "Possessive pronouns are used in English to avoid repeating information that is already clear.",
    list: [
        { to: ["This is <p>my</p> pen.", "This pen is <p>mine</p>."] },
        { to: ["<p>My</p> bag is old.", "<p>Hers</p> is new."] },
        { to: ["Is this <p>your</p> bag?", "No, it's <p>hers</p>."] },
        { to: ["<p>His</p> name is Bob", "<p>Hers</p> is Joanna."] },
        { to: ["<p>My</p> name is Sue", "<p>His</p> is Bob."] },
        { to: ["<p>Our</p> dog is friendly", "<p>Theirs</p> is agressive."] }
    ]
}));
exp.push(renderer_1.tList({
    t: "We use possessive pronouns in place of a noun:",
    list: [
        { l: "I know this drink is <p>yours</p> but I need to drink something." },
        { l: "I know this drink is <p>your drink</p> but I need to drink something." },
        { i: "<p>Yours</p> is a possessive pronoun that replaces <p>your drink</p>." },
        { s: ' ' },
        { l: "Her car is faster than <p>mine</p>." },
        { l: "Her car is faster than <p>my car</p>." },
        { i: "<p>Mine</p> is a possessive pronoun that replaces <p>my car</p>." },
        { s: ' ' },
    ]
}));
exp.push(renderer_1.tList({
    t: "Yours faithfully - Yours sincerely",
    i: "Yours is also used in English with faithfully or sincerely at the end of a formal letter or e-mail.",
    list: [
        { s: ' ' },
        { l: "Yours faithfully" },
        { i: "If it someone that you don't know" },
        { s: ' ' },
        { l: "Yours sincerely" },
        { i: "If it is someone that you know" },
        { s: ' ' },
    ]
}));
module.exports = {
    exp: exp
};
