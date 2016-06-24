/// <reference path="../../../../typings/tsd.d.ts" />
import {BoardFaces} from '../../interface';
import {space, viewIds, id, icons, displayIds} from '../../helper/constants';
import explenation = require('./explenation');

const separator = " - "
const common = [viewIds.oneTwoThree, displayIds.areRepeated];
const placeholder = 'Infinitive - Past Simple - Past Participle';
const title = 'Irregular Verbs';
const postfix = "";
const icon = icons.oneTwoThree;


const lessons = [
    {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["beat", "beat", "beaten"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["become", "became", "become"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["begin", "began", "begun"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["bend", "bent", "bent"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["bite", "bit", "bitten"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["blow", "blew", "blown"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["break", "broke", "broken"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["bring", "brought", "brought"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["build", "built", "built"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["burst", "burst", "burst"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["buy", "bought", "bought"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["catch", "caught", "caught"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["choose", "chose", "chosen"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["come", "came", "come"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["cost", "cost", "cost"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["cut", "cut", "cut"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["dig", "dug", "dug"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["do", "did", "done"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["draw", "drew", "drawn"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["drink", "drank", "drunk"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["drive", "drove", "driven"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["eat", "ate", "eaten"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["fall", "fell", "fallen"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["feed", "fed", "fed"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["feel", "felt", "felt"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["fight", "fought", "fought"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["find", "found", "found"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix, correct: ["fly", "flew", "flown"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["forget", "forgot", "forgotten"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["freeze", "froze", "frozen"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["give", "gave", "given"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["go", "went", "gone"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["grow", "grew", "grown"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["have", "had", "had"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["hear", "heard", "heard"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["hide", "hid", "hidden"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["hit", "hit", "hit"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["hold", "held", "held"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["hurt", "hurt", "hurt"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["keep", "kept", "kept"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["know", "knew", "known"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["lead", "led", "led"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["leave", "left", "left"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["let", "let", "let"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["light", "lit", "lit"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["lose", "lost", "lost"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["make", "made", "made"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["mean", "meant", "meant"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["meet", "met", "met"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["pay", "paid", "paid"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["put", "put", "put"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["read", "read", "read"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["ride", "rode", "ridden"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["ring", "rang", "rung"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["rise", "rose", "risen"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["run", "ran", "run"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["say", "said", "said"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["see", "saw", "seen"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["sell", "sold", "sold"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["send", "sent", "sent"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["shake", "shook", "shaken"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["shine", "shone", "shone"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["shoot", "shot", "shot"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["shut", "shut", "shut"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["sing", "sang", "sung"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["sink", "sank", "sunk"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["sit", "sat", "sat"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["sleep", "slept", "slept"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["speak", "spoke", "spoken"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["spread", "spread", "spread"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["stand", "stood", "stood"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["steal", "stole", "stolen"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["stick", "stuck", "stuck"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["strike", "struck", "struck"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["sweep", "swept", "swept"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["swim", "swam", "swum"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["take", "took", "taken"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["teach", "taught", "taught"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["tear", "tore", "torn"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["tell", "told", "told"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["think", "thought", "thought"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["throw", "threw", "thrown"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["wake", "woke", "woken"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["wear", "wore", "worn"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["win", "won", "won"], explenation: explenation, placeholder: placeholder
    }, {
        id: id(common), title: title,
        name: separator, postfix: postfix,
        correct: ["write", "wrote", "written"], explenation: explenation, placeholder: placeholder
    }] as BoardFaces


export {
title,
lessons,
icon
}