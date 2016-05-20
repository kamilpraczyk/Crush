/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "6:00",
    list: [
        { l: "It's 6 o'clock." },
        { l: "" },
    ]
}));

exp.push(tList({
    t: "6:05",
    list: [
        { l: "It's 5 <p>past</p> 6." },
        { l: "It's six oh five." },
    ]
}));

exp.push(tList({
    t: "6:15",
    list: [
        { l: "It's quarter <p>past</p> 6." },
        { l: "It's six fifteen." },
    ]
}));

exp.push(tList({
    t: "6:30",
    list: [
        { l: "It's half <p>past</p> 6." },
        { l: "It's six thirty." },
    ]
}));

exp.push(tList({
    t: "6:35",
    list: [
        { l: "It's 25 <p>to</p> 7." },
        { l: "It's six thirty-five." },
    ]
}));

exp.push(tList({
    t: "6:45",
    list: [
        { l: "It's quarter <p>to</p> seven." },
        { l: "It's six forty-five." },
    ]
}));

exp.push(tList({
    t: "6:55",
    list: [
        { l: "It's 5 to 7." },
        { l: "It's six fifty-five." },
    ]
}));


exp.push(tList({
    t: "7:00",
    list: [
        { l: "It's 7o'clock." },
    ]
}));


exp.push(tList({
    t: "Remember",
    list: [
        { eq: ["quarter", "15 minutes"] },
        { eq: ["half", "30 minutes"] },
        { eq: ["o'clock", "of the clock"] }
    ]
}));

exp.push(tList({
    t: "The 12-hour-system in English",
    list: [
        { to: ["<p>Germany</p>", "<p>England</p>"] },
        { mute_to: ["0:00", "midnight"] },
        { mute_to: ["0:01", "12:01 am"] },
        { mute_to: ["8:00", "8:00 am"] },
        { mute_to: ["12:00", "noon"] },
        { mute_to: ["12:01", "12:01 pm"] },
        { mute_to: ["14:00", "2 pm"] },
        { mute_to: ["18:00", "6 pm"] },
        { mute_to: ["23:59", "11:59 pm"] }
    ]
}));

export = {
    exp: exp
};


