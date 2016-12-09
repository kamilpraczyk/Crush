/// <reference path="../../../../typings/tsd.d.ts" />
import {RawData} from '../../../types';
import {space, TypeId, id} from '../../helper/constants';
import explenation = require('./explenation');

const separator = " - "
const common = [TypeId.oneTwoThree, TypeId.areRepeated];
const title = 'Irregular Verbs';
const info = 'Choose in right order: Infinitive - Past Simple - Past Participle.'
const postfix = "";


const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["beat", "beat", "beaten"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["become", "became", "become"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["begin", "began", "begun"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["bend", "bent", "bent"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["bite", "bit", "bitten"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["blow", "blew", "blown"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["break", "broke", "broken"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["bring", "brought", "brought"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["build", "built", "built"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["burst", "burst", "burst"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["buy", "bought", "bought"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["catch", "caught", "caught"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["choose", "chose", "chosen"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["come", "came", "come"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["cost", "cost", "cost"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["cut", "cut", "cut"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["dig", "dug", "dug"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["do", "did", "done"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["draw", "drew", "drawn"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["drink", "drank", "drunk"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["drive", "drove", "driven"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["eat", "ate", "eaten"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["fall", "fell", "fallen"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["feed", "fed", "fed"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["feel", "felt", "felt"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["fight", "fought", "fought"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["find", "found", "found"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator, correct: ["fly", "flew", "flown"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["forget", "forgot", "forgotten"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["freeze", "froze", "frozen"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["give", "gave", "given"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["go", "went", "gone"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["grow", "grew", "grown"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["have", "had", "had"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["hear", "heard", "heard"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["hide", "hid", "hidden"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["hit", "hit", "hit"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["hold", "held", "held"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["hurt", "hurt", "hurt"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["keep", "kept", "kept"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["know", "knew", "known"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["lead", "led", "led"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["leave", "left", "left"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["let", "let", "let"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["light", "lit", "lit"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["lose", "lost", "lost"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["make", "made", "made"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["mean", "meant", "meant"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["meet", "met", "met"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["pay", "paid", "paid"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["put", "put", "put"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["read", "read", "read"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["ride", "rode", "ridden"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["ring", "rang", "rung"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["rise", "rose", "risen"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["run", "ran", "run"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["say", "said", "said"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["see", "saw", "seen"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["sell", "sold", "sold"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["send", "sent", "sent"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["shake", "shook", "shaken"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["shine", "shone", "shone"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["shoot", "shot", "shot"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["shut", "shut", "shut"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["sing", "sang", "sung"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["sink", "sank", "sunk"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["sit", "sat", "sat"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["sleep", "slept", "slept"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["speak", "spoke", "spoken"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["spread", "spread", "spread"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["stand", "stood", "stood"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["steal", "stole", "stolen"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["stick", "stuck", "stuck"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["strike", "struck", "struck"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["sweep", "swept", "swept"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["swim", "swam", "swum"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["take", "took", "taken"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["teach", "taught", "taught"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["tear", "tore", "torn"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["tell", "told", "told"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["think", "thought", "thought"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["throw", "threw", "thrown"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["wake", "woke", "woken"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["wear", "wore", "worn"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["win", "won", "won"],
    }, {
        id: id(common), title, info, explenation, postfix,
        name: separator,
        correct: ["write", "wrote", "written"],
    }] 


export {
title,
lessons,
}