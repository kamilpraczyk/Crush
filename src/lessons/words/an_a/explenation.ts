/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "",
    list: [
        { l: "The sound of a word's first letter shows you whether to say <p>a</p> or <p>an</p>." },
        { l: "If the word starts with a vowel sound, use <p>an</p>" },
        { l: "if it starts with a consonat sound, use <p>a</p>." },
        { l: "Be careful - it's about the way things <p>sound</p>. So you say 'an hour' not 'a hour'." },
        { l: "<p>H</p> is a consonat, but in the word <p>hour</p> it makes a vowel sound." },
    ]
}));

exp.push(tList({
    t: "<p>A</p> is used before singular, countable nouns which begin with <p>consonant</p> sounds.",
    list: [
        { l: "a teacher" },
        { l: "a laptop" },
        { l: "a car" },
    ]
}));

exp.push(tList({
    t: "<p>An</p> is used before singular, countable nouns which begin with <p>vowel</p> sounds.",
    list: [
        { l: "an actor" },
        { l: "an elephant" },
        { l: "an invitation" },
    ]
}));

exp.push(tList({
    t: "Remember",
    list: [
        { i: "<p>A, AN</p> means <p>one</p> or <p>a single</p>." },
        { i: "You cannot use <p>A, AN</p> with plural nouns." },
    ]
}));


export = {
    exp: exp
};
