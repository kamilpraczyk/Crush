/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id, capital, getPossessiveNameFemale, getPossessiveNameMale, getSurname } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.radio];
const title = 'Possessive Pronouns: mine, yours, hers...';
const info = 'Choose the correct answer.';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "This blunt knife is not mine. " + space,
        correct: ["My knife is sharp."],
        incorrect: ["Mine knife is sharp."],
    }, {
        id: id(common), title, info, explenation,
        name: "I'm a business associate of " + space + " father",
        correct: ["your"],
        incorrect: ["yours"],
    }, {
        id: id(common), title, info, explenation,
        name: "My girlfriend is optimistic and outgoing, how about" + space + "?",
        correct: ["yours"],
        incorrect: ["your"],
    }, {
        id: id(common), title, info, explenation,
        name: "What I said is none of " + space + " business",
        correct: ["your"],
        incorrect: ["yours"],
    }, {
        id: id(common), title, info, explenation,
        name: "Some of " + space + " distant relatives are coming next week.",
        correct: ["my"],
        incorrect: ["mine"],
    }, {
        id: id(common), title, info, explenation,
        name: "This pen is not " + space + ", it's " + getPossessiveNameMale(),
        correct: ["mine"],
        incorrect: ["my"],
    }, {
        id: id(common), title, info, explenation,
        name: getPossessiveNameFemale() + " father is very rich. Some day all this will be " + space,
        correct: ["hers"],
        incorrect: ["her"],
    }, {
        id: id(common), title, info, explenation,
        name: space + " room is not for rent; you must ask someone else.",
        correct: ["Her"],
        incorrect: ["Hers"],
    }, {
        id: id(common), title, info, explenation,
        name: space + " house is much smaller than yours.",
        correct: ["My"],
        incorrect: ["Mine"],
    }, {
        id: id(common), title, info, explenation,
        name: "The large briefcase is his, the smaller one is " + space + ".",
        correct: ["hers"],
        incorrect: ["her"],
    }, {
        id: id(common), title, info, explenation,
        name: "Their house is really big while " + space + " is tiny",
        correct: ["mine"],
        incorrect: ["my"],
    }, {
        id: id(common), title, info, explenation,
        name: "Let's meet on " + space + " patio at five.",
        correct: ["our"],
        incorrect: ["ours"],
    }, {
        id: id(common), title, info, explenation,
        name: "Mr " + getSurname() + " is a friend of " + space + " .",
        correct: ["ours"],
        incorrect: ["our"],
    }, {
        id: id(common), title, info, explenation,
        name: "My rules are strict, but " + space + " are even stricter.",
        correct: ["theirs"],
        incorrect: ["their"],
    }, {
        id: id(common), title, info, explenation,
        name: "The park is mine as much as it's " + space + " .",
        correct: ["theirs"],
        incorrect: ["their"],
    }, {
        id: id(common), title, info, explenation,
        name: "I have collected my ticket, but where is " + space + "?",
        correct: ["theirs"],
        incorrect: ["their"],
    }, {
        id: id(common), title, info, explenation,
        name: space + " childhood was tough, but my mum's was tougher.",
        correct: ["Her"],
        incorrect: ["Hers"],
    }, {
        id: id(common), title, info, explenation,
        name: "That food is ours and not " + space + ".",
        correct: ["theirs"],
        incorrect: ["their"],
    }, {
        id: id(common), title, info, explenation,
        name: "Their mother gets along well with " + space + ".",
        correct: ["yours"],
        incorrect: ["your"],
    }, {
        id: id(common), title, info, explenation,
        name: "I appreciate " + space + " understanding of the matter.",
        correct: ["your"],
        incorrect: ["yours"],
    }
] 


export {
title,
lessons,
}