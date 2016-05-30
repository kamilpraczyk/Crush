var renderer_1 = require('../../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: "Singular",
    list: [
        { l: "myself" },
        { l: "yourself" },
        { l: "himself" },
        { l: "herself" },
        { l: "itself" }
    ]
}));
exp.push(renderer_1.tList({
    t: "Plural",
    list: [
        { l: "ourselves" },
        { l: "yourselves" },
        { l: "themselves" },
    ]
}));
exp.push(renderer_1.tList({
    t: "We use a reflexive pronoun",
    i: "as a direct object when the object is the same as the subject of the verb",
    list: [
        { l: "<p>I</p> am teaching <p>myself</p> to play the guitar." },
        { s: " " },
        { l: "<p>You</p> should enjoy <p>yourself</p> more!" },
    ]
}));
exp.push(renderer_1.tList({
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
module.exports = {
    exp: exp
};
