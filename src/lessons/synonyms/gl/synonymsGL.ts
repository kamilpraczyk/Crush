/// <reference path="../../../../typings/tsd.d.ts" />
import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.multiRadio];
const title = 'Synonyms G-L';
const info = 'Find two synonymms for a word:';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "Get",
        correct: ["Acquire", "Obtain", "Gain"],
        incorrect: ["Concept", "Inactive", "Gaze", "Peek", "Murder"]
    }, {
        id: id(common), title, info, explenation,
        name: "Go",
        correct: ["Depart", "Disappear", "Travel"],
        incorrect: ["Grand", "Considerable", "Indispensable", "Primary", "Wound"]
    }, {
        id: id(common), title, info, explenation,
        name: "Good",
        correct: ["Excellent", "Wonderful", "Fine"],
        incorrect: ["Depart", "Understanding", "", "", ""] //todo all file
    }, {
        id: id(common), title, info, explenation,
        name: "Great",
        correct: ["Worthy", "Remarkable", "Mighty"],
        incorrect: ["Critical", "Plan", "Helpful", "Grand", "Indecent"]
    }, {
        id: id(common), title, info, explenation,
        name: "Gross",
        correct: ["Rude", "Improper", "Vulgar"],
        incorrect: ["Travel", "Occupy", "Assist", "Speed", "Preserve"]
    }, {
        id: id(common), title, info, explenation,
        name: "Happy",
        correct: ["Pleased", "Contented", "Cheerful"],
        incorrect: ["Depart", "Obedient", "Shameful", "Mask", "Essential"]
    }, {
        id: id(common), title, info, explenation,
        name: "Hate",
        correct: ["Dislike", "Disapprove", "Disfavor"],
        incorrect: ["Travel", "Joyful", "Righteous", "Valid", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Have",
        correct: ["Hold", "Own", "Maintain"],
        incorrect: ["Fine", "Conception", "Plan", "Accelerate", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Help",
        correct: ["Aid", "Assist", "support"],
        incorrect: ["Depart", "Travel", "Elated", "Valid", "Moving"]
    }, {
        id: id(common), title, info, explenation,
        name: "Hide",
        correct: ["Conceal", "Cover", "Mask"],
        incorrect: ["Move", "Kindly", "Principal", "Important", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Hurry",
        correct: ["Rush", "Run", "Urge"],
        incorrect: ["Withhold", "Absorbing", "Valuable", "Harm", "Vital"]
    }, {
        id: id(common), title, info, explenation,
        name: "Hurt",
        correct: ["Harm", "Damage", "Injure"],
        incorrect: ["Depart", "Intriguing", "Inspiring", "Critical", "Disfavor"]
    }, {
        id: id(common), title, info, explenation,
        name: "Idea",
        correct: ["Concept", "Thought", "Conception"],
        incorrect: ["Travel", "Valuable", "Moving", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Important",
        correct: ["Vital", "Necessary", ""],
        incorrect: ["Depart", "Marvelous", "Intriguing", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Interesting",
        correct: ["Fascinating", "Engaging", "Absorbing"],
        incorrect: ["Microscopic", "", "", "", ""]
    }, {
        id: id(common), title, info, explenation,
        name: "Keep",
        correct: ["Hold", "Retain", "Withhold"],
        incorrect: ["Mighty", "Rude", "Small", "Necessary", "Valuable"]
    }, {
        id: id(common), title, info, explenation,
        name: "Kill",
        correct: ["Execute", "Murder", "Abolish"],
        incorrect: ["Kindly", "Safe", "Maintain", "Preserve", "Sustain"]
    }, {
        id: id(common), title, info, explenation,
        name: "Lazy",
        correct: ["Indolent", "Sluggish", "Idle"],
        incorrect: ["Travel", "Mask", "Camouflage", "Accelerate", "Significant"]
    }, {
        id: id(common), title, info, explenation,
        name: "Little",
        correct: ["Tiny", "Small", "Petite"],
        incorrect: ["Depart", "Thought", "Glimpse", "Race", "Afflict"]
    }, {
        id: id(common), title, info, explenation,
        name: "Look",
        correct: ["Gaze", "See", "Glance"],
        incorrect: ["Move", "Rude", "Opinion", "Retain", "Conception"]
    }
] 

export {
    title,
    lessons,
}
