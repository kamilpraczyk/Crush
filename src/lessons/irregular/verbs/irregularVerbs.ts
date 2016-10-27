/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../../types';
import {space, viewIds, id, icons } from '../../helper/constants';
import explenation = require('./explenation');
const common = [viewIds.draw];
const title = 'Irregular Verbs';

const lessons = [
    {
        id: id(common), title: title,
        name: "beat - beat - beaten", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "become - became - become", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "begin - began - begun", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "bend - bent - bent", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "bite - bit - bitten", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "blow - blew - blown", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "break - broke - broken", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "bring - brought - brought", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "build - built - built", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "burst - burst - burst", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "buy - bought - bought", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "catch - caught - caught", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "choose - chose - chosen", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "come - came - come", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "cost - cost - cost", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "cut - cut - cut", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "dig - dug - dug", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "do - did - done", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "draw - drew - drawn", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "drink - drank - drunk", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "drive - drove - driven", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "eat - ate - eaten", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "fall - fell - fallen", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "feed - fed - fed", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "feel - felt - felt", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "fight - fought - fought", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "find - found - found", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "fly - flew - flown", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "forget - forgot - forgotten", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "freeze - froze - frozen", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "give - gave - given", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "go - went - gone", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "grow - grew - grown", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "have - had - had", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hear - heard - heard", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hide - hid - hidden", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hit - hit - hit", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hold - held - held", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "hurt - hurt - hurt", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "keep - kept - kept", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "know - knew - known", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "lead - led - led", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "leave - left - left", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "let - let - let", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "light - lit - lit", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "lose - lost - lost", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "make - made - made", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "mean - meant - meant", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "meet - met - met", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "pay - paid - paid", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "put - put - put", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "read - read - read", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "ride - rode - ridden", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "ring - rang - rung", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "rise - rose - risen", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "run - ran - run", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "say - said - said", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "see - saw - seen", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sell - sold - sold", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "send - sent - sent", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "shake - shook - shaken", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "shine - shone - shone", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "shoot - shot - shot", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "shut - shut - shut", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sing - sang - sung", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sink - sank - sunk", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sit - sat - sat", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sleep - slept - slept", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "speak - spoke - spoken", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "spread - spread - spread", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "stand - stood - stood", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "steal - stole - stolen", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "stick - stuck - stuck", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "strike - struck - struck", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "sweep - swept - swept", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "swim - swam - swum", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "take - took - taken", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "teach - taught - taught", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "tear - tore - torn", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "tell - told - told", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "think - thought - thought", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "throw - threw - thrown", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "wake - woke - woken", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "wear - wore - worn", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "win - won - won", explenation: explenation
    }, {
        id: id(common), title: title,
        name: "write - wrote - written", explenation: explenation
    }] as BoardFaces


export {
title,
lessons,
}