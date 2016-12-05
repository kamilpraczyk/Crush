/// <reference path="../../../../typings/tsd.d.ts" />

import { tList } from '../../helper/renderer';
let exp: any[] = [];
//TODO connect

exp.push(tList({
    t: "Be going to form is used:",
    list: []
}));

exp.push(tList({
    t: "To talk about future plans and <p>intentions</p>.",
    list: [
        { l: "I'm <p>going to</p> take a few exams at the end of the month." },
        { l: "I'm <p>going to</p> take a few exams at the end of the month." },
    ]
}));

exp.push(tList({
    t: "To give <p>commands</p> or state that something is obligatory.",
    list: [
        { l: "You're <p>going to</p> pick up all of those dirty clothes right now." },
    ]
}));

exp.push(tList({
    t: "When something is about to happen.",
    list: [
        { l: "Get back! The bomb is <p>going to</p> explode." },
    ]
}));

exp.push(tList({
    t: "Positive sentence.",
    list: [
        { l: "I am <p>going to</p> Spain." },
        { l: "They are <p>going to</p> Spain." },
    ]
}));

exp.push(tList({
    t: "Negative sentence.",
    list: [
        { l: "I am <p>not going to</p> Spain." },
        { l: "They are <p>not going to</p> Spain." }
    ]
}));

exp.push(tList({
    t: "Interrogative sentence.",
    list: [
        { l: "Am I <p>going to</p> Spain?" },
        { l: "They are <p>going to</p> Spain?" },
    ]
}));


exp.push(tList({
    t: 'Informal English',
    list: [
        { eq: ['gonna', 'going to'] },
        { i: "I'm <p>going to</p> go to the beach tomorrow." },
        { i: "I'm <p>gonna</p> go to the beach tomorrow." }
    ]
}));

/*
I’m going to take a few exams at the end of the year.
You are going to meet Jane tonight.
Are you going to meet Jane tonight?
You are not going to meet Jane tonight.
He is going to spend his vacation in Hawaii.
She is not going to spend her vacation in Hawaii.
A: When are we going to meet each other tonight?
B: We are going to meet at 6 PM.
I'm going to be an actor when I grow up.
Michelle is going to begin medical school next year.
They are going to drive all the way to Alaska.
Who are you going to invite to the party?
A: Who is going to make John's birthday cake?
B: Sue is going to make John's birthday cake.

She’s going to be a professional dancer when she grows up.


I'm going to India next year.
We talked about it yesterday and I'm going to quit my job tomorrow.

It's so cold! I think it is going to snow

Get back! The bomb is going to explode.

You are going to be sick if you eat that. (Positive sentence)
Are you going to be sick if you eat that? (Question)

We are going to take orange juice to the party. (Positive sentence)
Are we going to take orange juice to the party? (Question)


past:
I was going to call you but I lost your phone number.
It was going to rain but suddenly the sun appeared.
We were going to buy a new TV but then we changed our minds.
You were going to be my bridesmaid but then you slept with my fiancée.
 */

export = {
    exp: exp
};
