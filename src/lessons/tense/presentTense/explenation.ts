/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];



exp.push(tList({
    t: "The Simple Present Tense is used:",
    list: []
}));

exp.push(tList({
    t: "To indicate a habitual action.",
    list: [
        { l: "He drinks coffee every morning." },
        { l: "I go to church regularly." },
        { l: "My mother gets up at 6am everyday." },
        // { l: "" },
        // { l: "" },
    ]
}));

exp.push(tList({
    t: "To express the general truth.",
    list: [
        { l: "The Sun rises in the east." },
        { l: "Honey is sweet." },
        //  { l: "." },
        //  { l: "." },
    ]
}));

exp.push(tList({
    t: "To express a future event that is part of a fixed timetable.",
    list: [
        { l: "The next bus arrives at 7.45am." },
        { l: "The match starts at 9am." },
        { l: "When does this shop reopen?" },
    ]
}));

exp.push(tList({
    t: "To introduce a quotation.",
    list: [
        { l: "Keats says, ‘A thing of beauty is joy for ever’." },
        { l: "Bible says, ‘To forgive is divine’." },
    ]
}));




export = {
    exp: exp
};
