/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];

exp.push(tList({
    t: "We use pronouns to refer to possession and 'belonging'.",
    list: [
        { to: ["This is <u>my</u> pen.", "This pen is <u>mine</u>."] },
        { to: ["This is <u>your</u> pen.", "This pen is <u>yours</u>."] },
        { to: ["This is <u>his</u> pen.", "This pen is <u>his</u>."] },
        { to: ["This is <u>her</u> pen.", "This pen is <u>hers</u>."] },
        { to: ["This is <u>our</u> pen.", "This pen is <u>ours</u>."] },
        { to: ["This is <u>their</u> pen.", "This pen is <u>theirs</u>."] }
    ]
}));

exp.push(tList({
    t: "Possessive pronouns are used in English to avoid repeating information that is already clear.",
    list: [
        { to: ["This is <u>my</u> pen.", "This pen is <u>mine</u>."] },
        { to: ["<u>My</u> bag is old.", "<u>Hers</u> is new."] },
        { to: ["Is this <u>your</u> bag?", "No, it's <u>hers</u>."] },
        { to: ["<u>His</u> name is Bob", "<u>Hers</u> is Joanna."] },
        { to: ["<u>My</u> name is Sue", "<u>His</u> is Bob."] },
        { to: ["<u>Our</u> dog is friendly", "<u>Theirs</u> is agressive."] }
    ]
}));

exp.push(tList({
    t: "We use possessive pronouns in place of a noun:",
    list: [
        { l: "I know this drink is <u>yours</u> but I need to drink something." },
        { l: "I know this drink is <u>your drink</u> but I need to drink something." },
        { i: "<u>Yours</u> is a possessive pronoun that replaces <u>your drink</u>." },
        { s: ' ' },
        { l: "Her car is faster than <u>mine</u>." },
        { l: "Her car is faster than <u>my car</u>." },
        { i: "<u>Mine</u> is a possessive pronoun that replaces <u>my car</u>." },
        { s: ' ' },
    ]
}));

exp.push(tList({
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

export = {
    exp: exp
};
