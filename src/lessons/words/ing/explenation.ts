/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "When we add <p>ing</p> to a verb, we have to <p>take care</p> with spelling.",
    list: []
}));


exp.push(tList({
    t: "Remember to drop the <p>e</p> and add <p>-ing</p>.",
    list: [
        { to: ["abate", "abating"] },
        { to: ["ache", "aching"] },
        { to: ["bathe", "bathing"] },
        { to: ["believe", "believing"] },
        { to: ["bite", "biting"] },
        { to: ["care", "caring"] },
        { to: ["delete", "deleting"] },
        { to: ["dive", "diving"] },
        { to: ["enslave", "enslaving"] },
        { to: ["excite", "exciting"] },
        { to: ["file", "filing"] },
        { to: ["gripe", "griping"] },
        { to: ["hope", "hoping"] },
        { to: ["joke", "joking"] },
        { to: ["live", "living"] },
        { to: ["make", "making"] },
        { to: ["parade", "parading"] },
        { to: ["paste", "pasting"] },
        { to: ["raise", "raising"] },
        { to: ["revile", "reviling"] },
        { to: ["save", "saving"] },
        { to: ["taste", "tasting"] },
        { to: ["glue", "gluing"] },
        { to: ["rue", "ruing"] },
        { to: ["sue", "suing"] },
    ]
}));


exp.push(tList({
    t: "Remember when verb ends <p>-ie</p>, change <p>-ie</p> to <p>-y</p> and add <p>-ing</p>.",
    list: [
        { to: ["die", "dying"] },
        { to: ["lie", "lying"] },
        { to: ["tie", "tying"] },
        { to: ["vie", "vying"] },
    ]
}));


exp.push(tList({
    t: "Remember when verb ends in <p>-y</p>, add <p>-ing</p>.",
    list: [
        { to: ["pry", "prying"] },
        { to: ["spy", "spying"] },
        { to: ["pray", "praying"] },
        { to: ["spay", "spaying"] },
    ]
}));

exp.push(tList({
    t: "Remember when verb ends in a <p>vowel</p> + <p>one consonant</p>, double the consonant and add <p>-ing</p>.",
    list: [
        { to: ["beg", "begging"] },
        { to: ["chat", "chatting"] },
        { to: ["dig", "digging"] },
        { to: ["fit", "fitting"] },
        { to: ["grin", "grinning"] },
        { to: ["grip", "gripping"] },
        { to: ["hop", "hopping"] },
        { to: ["mix", "mixing"] },
        { to: ["nip", "nipping"] },
        { to: ["pin", "pinning"] },
        { to: ["quit", "quitting"] },
        { to: ["rip", "ripping"] },
        { to: ["sit", "sitting"] },
        { to: ["tip", "tipping"] },
        { to: ["win", "winning"] }
    ]
}));

exp.push(tList({
    t: "Remember when verb ends ends in a <p>stressed vowel</p> + <p>r</p>, double the <p>r</p> and add <p>-ing</p>. In an <p>unstressed vowel</p> + <p>r</p>, do not double, the <p>r</p>.",
    list: [
        { to: ["confer", "conferring"] },
        { to: ["defer", "deferring"] },
        { to: ["refer", "referring"] },
        { to: ["answer", "answering"] },
        { to: ["offer", "offering"] },
        { to: ["suffer", "suffering"] },
    ]
}));






export = {
    exp: exp
};
