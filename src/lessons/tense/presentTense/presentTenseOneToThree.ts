/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons } from '../../helper/constants';
const explenation: any = null;//require('./explenation');

const separator = " ";
const postfix = ".";
const common = [viewIds.oneTwoThree];
const placeholder = "Simple Present Tense";
const title = "Simple Present Tense";
const icon = icons.oneTwoThree;
const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["I", "have", "a big", "house"],
        explenation: explenation,
        placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["Peter", "gives me", "a call", "every", "morning"],
        explenation: explenation,
        placeholder: placeholder
    }] as BoardFaces

export {
title,
lessons,
icon
}
