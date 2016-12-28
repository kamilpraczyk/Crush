import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.multiRadio, TypeId.allCapital]; 
const title = 'Synonyms A-D';
const info = 'Find 3 synonymms for a word:';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "Amazing",
        correct: ["Incredible", "Unbelievable", "Fabulous"],
        incorrect: ["Mad", "Reply", "Frosty", "Twisted", "Yell", "Reduce", "Indignant", "Rotten", "Corrupt"],
    }, {
        id: id(common), title, info, explenation,
        name: "Angry",
        correct: ["Furious", "Enraged", "Mad"],
        incorrect: ["Improbable", "Wonderful", "Rupture", "Smart", "Cry"],
    }, {
        id: id(common), title, info, explenation,
        name: "Answer",
        correct: ["Reply", "Respond", "Retort"],
        incorrect: ["Bent", "Cold", "Unexcited", "Reduce", "Carve"],
    }, {
        id: id(common), title, info, explenation,
        name: "Ask",
        correct: ["Question", "Seek information from", "Request"],
        incorrect: ["Shatter", "Scream", "Unsafe", "Shaded", "Risky"],
    }, {
        id: id(common), title, info, explenation,
        name: "Awful",
        correct: ["Dreadful", "Terrible", "Unpleasant"],
        incorrect: ["Colossal", "Start", "Arrive", "Colorful", "Intelligent"],
    }, {
        id: id(common), title, info, explenation,
        name: "Bad",
        correct: ["Unsuitable", "Defective", "Faulty"],
        incorrect: ["Immense", "Elegant", "Initiate", "Aesthetic", "Launch"],
    }, {
        id: id(common), title, info, explenation,
        name: "Beautiful",
        correct: ["Pretty", "Lovely", "Attractive"],
        incorrect: ["Vast", "Faulty", "Harmful", "Unexcited", "Level-headed"],
    }, {
        id: id(common), title, info, explenation,
        name: "Begin",
        correct: ["Launch", "Start", "Open"],
        incorrect: ["Gigantic", "Shatter", "Shining", "Brilliant", "Shiny"],
    }, {
        id: id(common), title, info, explenation,
        name: "Big",
        correct: ["Enormous", "Huge", "Immense"],
        incorrect: ["Bright", "Reduce", "Uncertain", "Dim", "Dark"],
    }, {
        id: id(common), title, info, explenation,
        name: "Brave",
        correct: ["Courageous", "Fearless", "Heroic"],
        incorrect: ["Quiet", "Mild", "Roar", "Dangerous", "Cut"],
    }, {
        id: id(common), title, info, explenation,
        name: "Break",
        correct: ["Fracture", "Crash", "Shatter"],
        incorrect: ["Hooked", "Sob", "Frosty", "Arrive", "Shining"],
    }, {
        id: id(common), title, info, explenation,
        name: "Bright",
        correct: ["Brilliant", "Shiny", "Smart"],
        incorrect: ["Yell", "Chop", "Reduce", "Chilly", "Zigzag"],
    }, {
        id: id(common), title, info, explenation,
        name: "Calm",
        correct: ["Quiet", "Peaceful", "Still"],
        incorrect: ["Reduce", "Scream", "Slash", "Unsafe", "Sad"],
    }, {
        id: id(common), title, info, explenation,
        name: "Come",
        correct: ["Approach", "Arrive", "Reach"],
        incorrect: ["Reply", "Inflamed", "Elegant", "Smash", "Rupture"],
    }, {
        id: id(common), title, info, explenation,
        name: "Cool",
        correct: ["Cold", "Icy", "Chilly"],
        incorrect: ["Faulty", "Dazzling", "Colossal", "Poor", "Aroused"],
    }, {
        id: id(common), title, info, explenation,
        name: "Crooked",
        correct: ["Bent", "Twisted", "Curved"],
        incorrect: ["Daring", "Fearless", "Gigantic", "Aesthetic", "Unsuitable"],
    }, {
        id: id(common), title, info, explenation,
        name: "Cry",
        correct: ["Shout", "Yell", "Scream"],
        incorrect: ["Wreck", "Brilliant", "Vivid", "Peaceful", "Still"],
    }, {
        id: id(common), title, info, explenation,
        name: "Cut",
        correct: ["Slash", "Chop", "Slice"],
        incorrect: ["Murky", "Hazardous", "Uncertain", "Crash", "Rupture"],
    }, {
        id: id(common), title, info, explenation,
        name: "Dangerous",
        correct: ["Hazardous", "Unsafe", "Risky"],
        incorrect: ["Sad", "Twisted", "Chilly", "Roar", "Chop"],
    }, {
        id: id(common), title, info, explenation,
        name: "Dark",
        correct: ["Gloomy", "Sad", "Murky"],
        incorrect: ["Nick", "Quiet", "Near", "Crash", "Heroic"],
    }
] 

export {
    title,
    lessons,
}
