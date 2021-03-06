import {tList} from '../../helper/renderer';
let exp: any[] = [];


exp.push(tList({
    t: "Singular",
    list: [
        { l: "myself" },
        { l: "yourself" },
        { l: "himself" },
        { l: "herself" },
        { l: "itself" }
    ]
}));
exp.push(tList({
    t: "Plural",
    list: [
        { l: "ourselves" },
        { l: "yourselves" },
        { l: "themselves" },
    ]
}));


exp.push(tList({
    t: "We use a reflexive pronoun as a direct object when the object is the same as the subject of the verb",
    list: [
        { l: "<p>I</p> am teaching <p>myself</p> to play the guitar." },
        { s: " " },
        { l: "<p>You</p> should enjoy <p>yourself</p> more!" },
    ]
}));

exp.push(tList({
    t: "We can use a reflexive pronoun as direct object with most transitive verbs",
    list: [
        { l: "Teach yourself to learn a foreign language." },
        { l: "Enjoy yourself! Enjoy yourselves!" },
        { l: "Treat yourself to some cake." },
        { l: "Make yourself at home." },
        { l: "Do it yourself. I did it myself." },
        { l: "Treat yourself to some cake." },
        { l: "Amuse yourself." },
        { l: "Blame yourself." },
        { l: "Cut yourself." },
        { l: "Dry yourself." },
        { l: "Introduce yourself." },
        { l: "Kill yourself." },
        { l: "Satisfy yourself." },
        { l: "Prepare yourself." },
        { l: "Hurt yourself." },
    ]
}));







export = {
    exp: exp
};
