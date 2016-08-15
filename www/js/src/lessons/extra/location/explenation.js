/// <reference path="../../../../typings/tsd.d.ts" />
"use strict";
var renderer_1 = require('../../helper/renderer');
var exp = [];
exp.push(renderer_1.tList({
    t: "<p>up</p> - <p>down</p>",
    list: [
        { l: "My house is <p>up</p> the road." },
        { l: "My friend lives <p>down</p> the river." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>everywhere</p> - <p>nowhere</p>",
    list: [
        { l: "You can find mushrooms <p>everywhere</p>." },
        { l: "Birds of paradise live in Papua New Guinea and <p>nowhere</p> else." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>(in) indoors</p> - <p>(out) outdoors</p>",
    list: [
        { l: "He worked <p>indoors</p> all afternoon." },
        { l: "Let's play badminton <p>outdoors</p>." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>here</p> - <p>there</p>",
    list: [
        { l: "Come <p>here</p> and give me that book." },
        { i: "<p>Here</p> is used to locate something which is near, within the range of one's vision." },
        { s: " " },
        { l: "Go over <p>there</p> and get that book." },
        { i: "<p>There</p> is used to locate something which is far, out of the range of one's vision." }
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>off</p>",
    list: [
        { l: "The ship sank 10 miles <p>off</p> the shore." },
        { l: "<p>Off</p> the normal route, he discovered new restaurants." }
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>from</p>",
    list: [
        { l: "The ambush occurred 50 metres <p>from</p> a checkpoint." },
        { l: "We walked <p>from</p> George Street to Park Avenue." }
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>away</p>",
    list: [
        { l: "We can cycle there. It's only 2 miles <p>away</p>." },
        { l: "The music faded <p>away</p>." }
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>beyond</p>",
    list: [
        { l: "Pushing the laws to their limits and <p>beyond</p>." },
        { l: "She longed to go to the next village and <p>beyond</p>." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>on top of</p>",
    list: [
        { l: "This book goes <p>on the top</p> shelf." },
        { l: "A town perched <p>on top of</p> a hill." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>in the centre (middle of)</p>",
    list: [
        { l: "There is a nice park <p>in the center of</p> the town." },
        { l: "The chandelier <p>in centre of</p> the ceiling." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>at the bottom of</p>",
    list: [
        { l: "Please write your name <p>at the bottom of</p> this paper." },
        { l: "The strange creature found <p>at the bottom of</p> the sea." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>ahead of</p>",
    list: [
        { l: "Tom sat two rows <p>ahead of</p> me." },
        { l: "She walked <p>ahead of</p> him along the corridor." }
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>at the front of</p> - <p>at the back</p> - <p>at the rear of</p>",
    list: [
        { l: "I found my tennis racket <p>at the back of</p> the cupboard." },
        { l: "We sat <p>at the back of</p> the bus." },
        { s: " " },
        { l: "Katherine stood <p>at the back of</p> the room." },
        { s: " " },
        { l: "The field <p>at the rear of</p> the church." },
        { l: "The kitchen door <p>at the rear of</p> the house." }
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>parallel</p> - <p>perpendicular</p> - <p>at an angle</p>",
    list: [
        { l: "Draw this line <p>parallel</p> to that one." },
        { i: "Lines are parallel if they are always the same distance apart." },
        { s: " " },
        { l: "This building is <p>perpendicular</p> to the ground." },
        { i: "It just means at right angles (90°) to." },
        { s: " " },
        { l: "She wore her beret <p>at an angle</p>." },
        { i: "In a direction different from parallel, vertical, or horizontal." }
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>in front of</p> - <p>behind</p>",
    list: [
        { l: "The letter box is <p>in front of</p> the bank." },
        { l: "She is hiding <p>behind</p> the fence." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>opposite</p> - <p>across</p>",
    list: [
        { l: "Our son was sitting <p>opposite<p> us on the train." },
        { l: "Our son was sitting <p>across from</p> us on the train." },
        { i: "Opposite is never used with 'of'." },
        { l: "The park is <p>opposite</p> the school." },
        { l: "They're building a new bridge <p>across</p> the river." },
        { l: "She walked <p>across</p> the field." },
        { l: "He folded his arms <p>across</p> his chest." },
    ]
}));
exp.push(renderer_1.tList({
    t: "<p>below</p> - <p>under</p> - <p>above</p> - <p>over</p>",
    list: [
        { l: "Write your name <p>below</p> the line." },
        { l: "The letter is <p>under</p> the book." },
        { l: "Look at the sentence <p>above</p>." },
        { l: "She is wearing a shawl <p>over</p> her shoulders." },
    ]
}));
exp.push(renderer_1.tList({
    t: "Cardinal direction",
    list: [
        { l: "north" },
        { l: "east" },
        { l: "west" },
        { l: "south" },
        { s: " " },
        { l: "Asia is <p>east</p> of Europe." },
        { l: "Europe is <p>west</p> of Asia" },
    ]
}));
exp.push(renderer_1.tList({
    t: "",
    list: [
        { l: "worldwide" },
        { l: "nationwide" },
        { l: "local" },
        { l: "global, universal" },
        { l: "widespread" },
        { l: "eastern" },
        { l: "western" },
        { l: "northern" },
        { l: "southern" },
        { s: " " },
        { l: "She achieved worldwide fame." },
        { l: "We are having nationwide elections." },
    ]
}));
module.exports = {
    exp: exp
};
