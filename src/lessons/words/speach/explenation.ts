/// <reference path="../../../../typings/tsd.d.ts" />

import {tList} from '../../helper/renderer';
let exp: any[] = [];



exp.push(tList({
    t: "",
    list: [
        { l: "When we write what someone says, we also need to write <p>who</p> is saying it." },
        { l: "We can say more about what the person is saying, like whether it is a question or a reply." },
        { l: "My hat is blue, <p>said Paul.</p>" },
        { l: "Where did you get it? <p>asked Alex.</p>" },
        { l: "From the junkyard, <p>replied Bob.</p>" },
        { l: "" },
    ]
}));


export = {
    exp: exp
};
