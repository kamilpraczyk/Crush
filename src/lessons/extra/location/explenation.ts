/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];


//TODO finish this explanation

exp.push(tList({
    t: "<p>up</p> - <p>down</p>",
    list: [
        { l: "My house is <p>up</p> the road." },
        { l: "My friend lives <p>down</p> the river." },
    ]
}));

exp.push(tList({
    t: "<p>everywhere</p> - <p>nowhere</p>",
    list: [
        { l: "You can find mushrooms <p>everywhere</p>." },
        { l: "Birds of paradise live in Papua New Guinea and <p>nowhere</p> else." },
    ]
}));

exp.push(tList({
    t: "<p>(in) indoors</p> - <p>(out) outdoors</p>",
    list: [
        { l: "He worked <p>indoors</p> all afternoon." },
        { l: "Let's play badminton <p>outdoors</p>." },
    ]
}));


exp.push(tList({
    t: "<p>here</p> - <p>there</p>",
    list: [
        { l: "Come <p>here</p> and give me that book." },
        { i: "<p>Here</p> is used to locate something which is near, within the range of one's vision." },
        { s: " " },
        { l: "Go over <p>there</p> and get that book." },
        { i: "<p>There</p> is used to locate something which is far, out of the range of one's vision." }
    ]
}));



exp.push(tList({
    t: "",
    list: [

        { l: "<p>away</p>" },
        { l: "" }, 
        
        { l: "<p>from</p>" },
        { l: "" }, 

        { l: "<p>off</p>" },
        { l: "The ship sank 10 miles off the shore." },


        { l: "<p>beyond</p>" },
        { l: "" }, 

        { l: "<p>at the front of</p>" },
        { l: "" }, 
        
        { l: "<p>at the back/rear of</p>" },
        { l: "" }, 


        { l: "<p>ahead of</p>" },
        { l: "Tom sat two rows ahead of me." }, 
        
        { l: "<p>on top of</p>" },
        { l: "This book goes on the top shelf." }, 
        
        { l: "<p>in the centre(middle of)</p>" },
        { l: "There is a nice park in the center of the town." },
       
        
        
        { l: "<p>at the bottom of</p>" },
         { l: "Please write your name at the bottom of this paper." },
        


    ]
}));


exp.push(tList({
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



exp.push(tList({
    t: "<p>in front of</p> - <p>behind</p>",
    list: [
        { l: "The letter box is <p>in front of</p> the bank." },
        { l: "She is hiding <p>behind</p> the fence." },
    ]
}));



exp.push(tList({
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


exp.push(tList({
    t: "<p>below</p> - <p>under</p> - <p>above</p> - <p>over</p>",
    list: [
        { l: "Write your name <p>below</p> the line." },
        { l: "The letter is <p>under</p> the book." },
        { l: "Look at the sentence <p>above</p>." },
        { l: "She is wearing a shawl <p>over</p> her shoulders." },
    ]
}));


exp.push(tList({
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


exp.push(tList({
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

export = {
    exp: exp
};


