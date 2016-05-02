/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, ids, id } from '../../helper/constants';
import explenation = require('./explenation');

export =[
    {
        id: id([ids.center]),
        name: "This blunt knife is not mine. " + space,
        correct: ["My knife is sharp."],
        incorrect: ["Mine knife is sharp."],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I'm a buisness associate of " + space + " father",
        correct: ["your"],
        incorrect: ["yours"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "My girlfriend is optimistic and outgoing, how about" + space + "?",
        correct: ["yours"],
        incorrect: ["your"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "What I said is none of " + space + " buisness",
        correct: ["your"],
        incorrect: ["yours"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Some of " + space + " distant relatives are comming next week.",
        correct: ["my"],
        incorrect: ["mine"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "This pen is not " + space + ", it's Rob's",
        correct: ["mine"],
        incorrect: ["my"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Kate's father is very rich. Some day all this will be " + space,
        correct: ["hers"],
        incorrect: ["her"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: space + " room is not for rent; you must ask someone elese.",
        correct: ["Her"],
        incorrect: ["Hers"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: space + " house is much smaller than yours.",
        correct: ["My"],
        incorrect: ["Mine"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "The large briefcase is his, the smaller one is " + space + ".",
        correct: ["hers"],
        incorrect: ["her"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Their house is really big while " + space + " is tiny",
        correct: ["mine"],
        incorrect: ["my"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Let's meet on " + space + " patio at five.",
        correct: ["our"],
        incorrect: ["ours"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "Mr Thomas is a friend of " + space + " .",
        correct: ["ours"],
        incorrect: ["our"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "My rules are strict, but " + space + " are even stricter.",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "The park is mine as much as it's " + space + " .",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "I have collected my ticket, but where is " + space + "?",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: space + " childhood was tough, but my mum's was tougher.",
        correct: ["Her"],
        incorrect: ["Hers"],
        explenation: explenation
    }, {
        id: id([ids.center]),
        name: "That food is ours and not " + space + ".",
        correct: ["theirs"],
        incorrect: ["their"],
        explenation: explenation
    }



] as BoardFaces
