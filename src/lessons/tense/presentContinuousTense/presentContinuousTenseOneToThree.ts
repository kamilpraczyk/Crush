/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, capital } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Present Continuous Tense";
const title = "Present Continuous Tense";
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "writing", "a letter"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["You", "are", "studying", capital.nationalityNoun.English, "grammar"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["You", "are", "not", "watching", capital.things.TV],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["You", "are", "watching", capital.things.TV],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Are", "you", "watching", capital.things.TV, "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "am", "sitting"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "are", "reading", "their", "books"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "are", "not", "watching", "television"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["What", "are", "you", "doing", "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Why", "aren't", "you", "doing", "your homework?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I am", "not", "reading", "any", "books right now"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I am", "studying", "to become", "an engineer"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "am", "meeting", "some friends", "after work"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I am", "not", "going to", "the party", "tonight"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Are", "you", "still", "watching", capital.things.TV + "?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: "",
        correct: ["Isn't", "she", "coming", "with us", "tonight?"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "always", "coming to", "class late"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She", "is", "constantly", "talking"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["She's", "studying", "with her", "friend", "for a week"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["He's", "eating", "a lot", "these", "days"],
        explenation: explenation,
        placeholder: placeholder
    }



] as BoardFaces

export {
title,
lessons,
}


