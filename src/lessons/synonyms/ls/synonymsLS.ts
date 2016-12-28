import { RawData } from '../../../types';
import { TypeId, id } from '../../helper/constants';
import explenation = require('./explenation');
const common = [TypeId.multiRadio, TypeId.allCapital];
const title = 'Synonyms L-S';
const info = 'Find 3 synonymms for a word:';

const lessons: RawData[] = [
    {
        id: id(common), title, info, explenation,
        name: "Love",
        correct: ["Like", "Admire", "Fancy"],
        incorrect: ["Exhibit", "Declare", "Advise", "Proper", "Set"]
    }, {
        id: id(common), title, info, explenation,
        name: "Make",
        correct: ["Create", "Design", "Manufacture"],
        incorrect: ["Remark", "Indicate", "Favorite", "Trek", "Ride"]
    }, {
        id: id(common), title, info, explenation,
        name: "Mark",
        correct: ["Label", "Tag", "Price"],
        incorrect: ["Alarmed", "Panicked", "Accurate", "Lawful", "Wander"]
    }, {
        id: id(common), title, info, explenation,
        name: "Mischievous",
        correct: ["Naughty", "Roguish", "Prankish"],
        incorrect: ["Reveal", "Frightened", "Fearful", "Terrified", "Hasten"]
    }, {
        id: id(common), title, info, explenation,
        name: "Move",
        correct: ["Go", "Crawl", "Hurry"],
        incorrect: ["Explain", "Still", "Peaceful", "Establish", "Favorite"]
    }, {
        id: id(common), title, info, explenation,
        name: "Moody",
        correct: ["Changeable", "Touchy", "Short-tempered"],
        incorrect: ["Mature", "Extinct", "Proper", "Fair", "Upright"]
    }, {
        id: id(common), title, info, explenation,
        name: "Neat",
        correct: ["Clean", "Tidy", "Well-organized"],
        incorrect: ["Mute", "Construct", "Produce", "Still", "Soundless"]
    }, {
        id: id(common), title, info, explenation,
        name: "New",
        correct: ["Fresh", "Recent", "Modern"],
        incorrect: ["Procedure", "Assign", "Correct", "Build", "Do"]
    }, {
        id: id(common), title, info, explenation,
        name: "Old",
        correct: ["Ancient", "Aged", "Obsolete"],
        incorrect: ["Upright", "Fair", "Worship", "Mischievous", "Roguish"]
    }, {
        id: id(common), title, info, explenation,
        name: "Part",
        correct: ["Portion", "Piece", "Share"],
        incorrect: ["Lawful", "Tag", "Fresh", "Speed", "Skittish"]
    }, {
        id: id(common), title, info, explenation,
        name: "Place",
        correct: ["Area", "Location", "Space"],
        incorrect: ["Trek", "Old-fashioned", "Fraction", "Share", "Piece"]
    }, {
        id: id(common), title, info, explenation,
        name: "Plan",
        correct: ["Procedure", "Map", "Scheme"],
        incorrect: ["Care for", "Build", "Price", "Section", "Piece"]
    }, {
        id: id(common), title, info, explenation,
        name: "Popular",
        correct: ["Well-liked", "Approved", "Accepted"],
        incorrect: ["Treasure", "Cherish", "Brand", "Archaic", "Obsolete"]
    }, {
        id: id(common), title, info, explenation,
        name: "Put",
        correct: ["Place", "Set", "Attach"],
        incorrect: ["Form", "Clean", "Mature", "Fabricate", "Develop"]
    }, {
        id: id(common), title, info, explenation,
        name: "Quiet",
        correct: ["Silent", "Mute", "Peaceful"],
        incorrect: ["Fair", "Accurate", "Adore", "Stamp", "Construct"]
    }, {
        id: id(common), title, info, explenation,
        name: "Right",
        correct: ["Suitable", "Proper", "Good"],
        incorrect: ["Cherish", "Fancy", "Sign", "Build", "Prankish"]
    }, {
        id: id(common), title, info, explenation,
        name: "Run",
        correct: ["Race", "Hurry", "Dash"],
        incorrect: ["Accepted", "Form", "Do", "Current", "Modern"]
    }, {
        id: id(common), title, info, explenation,
        name: "Say/Tell",
        correct: ["Inform", "Notify", "Advise"],
        incorrect: ["Attach", "Adore", "Fabricate", "Ride", "Stamp"]
    }, {
        id: id(common), title, info, explenation,
        name: "Scared",
        correct: ["Afraid", "Terrified", "Skittish"],
        incorrect: ["Accurate", "Treasure", "Stamp", "Short-tempered", "Touchy"]
    }, {
        id: id(common), title, info, explenation,
        name: "Show",
        correct: ["Display", "Exhibit", "Reveal"],
        incorrect: ["Worship", "Brand", "Accurate", "Fabricate", "Attach"]
    }
]

export {
    title,
    lessons,
}
