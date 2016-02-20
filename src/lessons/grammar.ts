/// <reference path="../../typings/tsd.d.ts" />
import {BoardFaces} from '../stores/lesson/interface';

export =[
    {
        id: '1',
        name: "I could talk to him but he doesn't come here often, _____ he?",
        correct: ["does"],
        incorrect: ["do", "doesn't", "is"]
    }, {
        id: '2',
        name: " Did you see ___ moon last night?",
        correct: ["the"],
        incorrect: ["_", "a", "an"]
    }, {
        id: '3',
        name: "You don't have to apply for a student visa _____ you're from outside the EU.",
        correct: ["unless"],
        incorrect: ["if", "if not","if so"]
    }
] as BoardFaces
