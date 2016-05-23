/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons } from '../../helper/constants';
import explenation = require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Present Perfect Continuous Tense";
const title = "Present Perfect Continuous Tense";
const icon = icons.oneTwoThree;
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["They", "have", "been", "playing cricket", "since 5pm"],
        explenation: explenation,
        placeholder: placeholder
    },
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["", ""],
        explenation: explenation,
        placeholder: placeholder
    }
] as BoardFaces

export {
title,
lessons,
icon
}


